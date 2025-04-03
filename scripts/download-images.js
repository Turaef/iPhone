import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iphoneImages = [
  {
    name: 'iphone2g',
    url: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-2G-2007-hero_Full-Bleed-Image.jpg.large.jpg'
  },
  {
    name: 'iphone3g',
    url: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-3G-2008-hero_Full-Bleed-Image.jpg.large.jpg'
  },
  {
    name: 'iphone3gs',
    url: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-3GS-2009-hero_Full-Bleed-Image.jpg.large.jpg'
  },
  {
    name: 'iphone4',
    url: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-4-2010-hero_Full-Bleed-Image.jpg.large.jpg'
  },
  {
    name: 'iphone4s',
    url: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-4s-2011-hero_Full-Bleed-Image.jpg.large.jpg'
  },
  {
    name: 'iphone5',
    url: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-5-2012-hero_Full-Bleed-Image.jpg.large.jpg'
  }
  // Add more iPhone models here
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    };

    https.get(url, options, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filename);
        response.pipe(fileStream);
        
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
};

const main = async () => {
  const imagesDir = path.join(__dirname, '..', 'public', 'images');
  
  // Create images directory if it doesn't exist
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }
  
  // Download all images
  for (const iphone of iphoneImages) {
    const filename = path.join(imagesDir, `${iphone.name}.jpg`);
    try {
      await downloadImage(iphone.url, filename);
    } catch (error) {
      console.error(`Error downloading ${iphone.name}:`, error.message);
    }
  }
};

main().catch(console.error); 