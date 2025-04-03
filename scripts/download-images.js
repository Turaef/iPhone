import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iphoneData = [
  {
    name: 'iPhone 2G',
    year: 2007,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-2g.jpg'
  },
  {
    name: 'iPhone 3G',
    year: 2008,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-3g.jpg'
  },
  {
    name: 'iPhone 3GS',
    year: 2009,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-3gs.jpg'
  },
  {
    name: 'iPhone 4',
    year: 2010,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-4.jpg'
  },
  {
    name: 'iPhone 4S',
    year: 2011,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-4s.jpg'
  },
  {
    name: 'iPhone 5',
    year: 2012,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-5.jpg'
  },
  {
    name: 'iPhone 5S',
    year: 2013,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-5s.jpg'
  },
  {
    name: 'iPhone 5C',
    year: 2013,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-5c.jpg'
  },
  {
    name: 'iPhone 6',
    year: 2014,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-6.jpg'
  },
  {
    name: 'iPhone 6 Plus',
    year: 2014,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-6-plus.jpg'
  },
  {
    name: 'iPhone 6S',
    year: 2015,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-6s.jpg'
  },
  {
    name: 'iPhone 6S Plus',
    year: 2015,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-6s-plus.jpg'
  },
  {
    name: 'iPhone SE (1st gen)',
    year: 2016,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-se.jpg'
  },
  {
    name: 'iPhone 7',
    year: 2016,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-7.jpg'
  },
  {
    name: 'iPhone 7 Plus',
    year: 2016,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-7-plus.jpg'
  },
  {
    name: 'iPhone 8',
    year: 2017,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-8.jpg'
  },
  {
    name: 'iPhone 8 Plus',
    year: 2017,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-8-plus.jpg'
  },
  {
    name: 'iPhone X',
    year: 2017,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-x.jpg'
  },
  {
    name: 'iPhone XR',
    year: 2018,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-xr.jpg'
  },
  {
    name: 'iPhone XS',
    year: 2018,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-xs.jpg'
  },
  {
    name: 'iPhone XS Max',
    year: 2018,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-xs-max.jpg'
  },
  {
    name: 'iPhone 11',
    year: 2019,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-11.jpg'
  },
  {
    name: 'iPhone 11 Pro',
    year: 2019,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-11-pro.jpg'
  },
  {
    name: 'iPhone 11 Pro Max',
    year: 2019,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-11-pro-max.jpg'
  },
  {
    name: 'iPhone SE (2nd gen)',
    year: 2020,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-se-2.jpg'
  },
  {
    name: 'iPhone 12',
    year: 2020,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-12.jpg'
  },
  {
    name: 'iPhone 12 Mini',
    year: 2020,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-12-mini.jpg'
  },
  {
    name: 'iPhone 12 Pro',
    year: 2020,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-12-pro.jpg'
  },
  {
    name: 'iPhone 12 Pro Max',
    year: 2020,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-12-pro-max.jpg'
  },
  {
    name: 'iPhone 13',
    year: 2021,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-13.jpg'
  },
  {
    name: 'iPhone 13 Mini',
    year: 2021,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-13-mini.jpg'
  },
  {
    name: 'iPhone 13 Pro',
    year: 2021,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-13-pro.jpg'
  },
  {
    name: 'iPhone 13 Pro Max',
    year: 2021,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-13-pro-max.jpg'
  },
  {
    name: 'iPhone SE (3rd gen)',
    year: 2022,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-se-3.jpg'
  },
  {
    name: 'iPhone 14',
    year: 2022,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-14.jpg'
  },
  {
    name: 'iPhone 14 Plus',
    year: 2022,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-14-plus.jpg'
  },
  {
    name: 'iPhone 14 Pro',
    year: 2022,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-14-pro.jpg'
  },
  {
    name: 'iPhone 14 Pro Max',
    year: 2022,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-14-pro-max.jpg'
  },
  {
    name: 'iPhone 15',
    year: 2023,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-15.jpg'
  },
  {
    name: 'iPhone 15 Plus',
    year: 2023,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-15-plus.jpg'
  },
  {
    name: 'iPhone 15 Pro',
    year: 2023,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-15-pro.jpg'
  },
  {
    name: 'iPhone 15 Pro Max',
    year: 2023,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-15-pro-max.jpg'
  },
  {
    name: 'iPhone 16',
    year: 2024,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-16.jpg'
  },
  {
    name: 'iPhone 16 Plus',
    year: 2024,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-16-plus.jpg'
  },
  {
    name: 'iPhone 16 Pro',
    year: 2024,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-16-pro.jpg'
  },
  {
    name: 'iPhone 16 Pro Max',
    year: 2024,
    imageUrl: 'https://raw.githubusercontent.com/wiki/phonegap/phonegap-start/iphone-16-pro-max.jpg'
  }
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(filepath))
          .on('error', reject)
          .once('close', () => resolve(filepath));
      } else {
        response.resume();
        reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
};

const main = async () => {
  const imagesDir = path.join(__dirname, '..', 'public', 'images', 'iphones');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  for (const iphone of iphoneData) {
    const filename = `${iphone.name.toLowerCase().replace(/\s+/g, '-')}.jpg`;
    const filepath = path.join(imagesDir, filename);
    
    try {
      console.log(`Downloading ${iphone.name}...`);
      await downloadImage(iphone.imageUrl, filepath);
      console.log(`Successfully downloaded ${iphone.name}`);
    } catch (error) {
      console.error(`Error downloading ${iphone.name}:`, error.message);
    }
  }
};

main().catch(console.error); 