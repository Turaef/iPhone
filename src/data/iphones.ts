export interface IPhoneModel {
  name: string;
  year: number;
  imageUrl: string;
  specs: {
    display: string;
    processor: string;
    camera: string;
    battery: string;
    storage: string[];
    features: string[];
  };
}

export const iphones: IPhoneModel[] = [
  {
    name: "iPhone 2G",
    year: 2007,
    imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800",
    specs: {
      display: "3.5-inch TFT, 320 x 480 pixels",
      processor: "Samsung 32-bit RISC ARM 11, 620 MHz",
      camera: "2 MP rear camera",
      battery: "1400 mAh",
      storage: ["4GB", "8GB", "16GB"],
      features: ["Multi-touch display", "WiFi", "Safari browser", "YouTube app"]
    }
  },
  {
    name: "iPhone 3G",
    year: 2008,
    imageUrl: "https://images.pexels.com/photos/3644098/pexels-photo-3644098.jpeg?auto=compress&w=800",
    specs: {
      display: "3.5-inch TFT, 320 x 480 pixels",
      processor: "Samsung 32-bit RISC ARM 11, 620 MHz",
      camera: "2 MP rear camera",
      battery: "1150 mAh",
      storage: ["8GB", "16GB"],
      features: ["3G connectivity", "GPS", "App Store"]
    }
  },
  {
    name: "iPhone 3GS",
    year: 2009,
    imageUrl: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800",
    specs: {
      display: "3.5-inch TFT, 320 x 480 pixels",
      processor: "Samsung APL0298C05, 600 MHz",
      camera: "3.15 MP rear camera, video recording",
      battery: "1220 mAh",
      storage: ["8GB", "16GB", "32GB"],
      features: ["Voice Control", "Digital Compass", "Improved performance"]
    }
  },
  {
    name: "iPhone 4",
    year: 2010,
    imageUrl: "https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg?auto=compress&w=800",
    specs: {
      display: "3.5-inch Retina, 640 x 960 pixels",
      processor: "Apple A4, 1 GHz",
      camera: "5 MP rear camera, 0.3 MP front",
      battery: "1420 mAh",
      storage: ["8GB", "16GB", "32GB"],
      features: ["Retina Display", "FaceTime", "HD Video Recording"]
    }
  },
  {
    name: "iPhone 4S",
    year: 2011,
    imageUrl: "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800",
    specs: {
      display: "3.5-inch Retina, 640 x 960 pixels",
      processor: "Apple A5, Dual-core 1 GHz",
      camera: "8 MP rear camera, 0.3 MP front",
      battery: "1432 mAh",
      storage: ["8GB", "16GB", "32GB", "64GB"],
      features: ["Siri", "iCloud", "1080p video recording"]
    }
  },
  {
    name: 'iPhone 5',
    year: 2012,
    imageUrl: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800",
    specs: {
      display: '4" Retina (640 x 1136)',
      processor: 'Apple A6 dual-core 1.3 GHz',
      camera: '8 MP rear, 1.2 MP front',
      battery: '1440 mAh',
      storage: ['16GB', '32GB', '64GB'],
      features: ['4G LTE', 'Lightning connector', 'Panorama photos', 'Larger display']
    }
  },
  {
    name: 'iPhone 5S',
    year: 2013,
    imageUrl: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800",
    specs: {
      display: '4" Retina (640 x 1136)',
      processor: 'Apple A7 64-bit dual-core 1.3 GHz',
      camera: '8 MP rear, 1.2 MP front',
      battery: '1560 mAh',
      storage: ['16GB', '32GB', '64GB'],
      features: ['Touch ID', '64-bit processor', 'M7 motion coprocessor', 'Slow-motion video']
    }
  },
  {
    name: 'iPhone 6',
    year: 2014,
    imageUrl: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800",
    specs: {
      display: '4.7" Retina HD (750 x 1334)',
      processor: 'Apple A8 64-bit dual-core 1.4 GHz',
      camera: '8 MP rear, 1.2 MP front',
      battery: '1810 mAh',
      storage: ['16GB', '64GB', '128GB'],
      features: ['Apple Pay', 'VoLTE', 'Larger display', 'Improved autofocus']
    }
  },
  {
    name: 'iPhone 6 Plus',
    year: 2014,
    imageUrl: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800",
    specs: {
      display: '5.5" Retina HD (1080 x 1920)',
      processor: 'Apple A8 64-bit dual-core 1.4 GHz',
      camera: '8 MP rear with OIS, 1.2 MP front',
      battery: '2915 mAh',
      storage: ['16GB', '64GB', '128GB'],
      features: ['Optical image stabilization', 'Landscape mode', 'Larger battery', 'NFC']
    }
  },
  {
    name: 'iPhone 6S',
    year: 2015,
    imageUrl: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800",
    specs: {
      display: '4.7" Retina HD (750 x 1334)',
      processor: 'Apple A9 64-bit dual-core 1.85 GHz',
      camera: '12 MP rear, 5 MP front',
      battery: '1715 mAh',
      storage: ['16GB', '32GB', '64GB', '128GB'],
      features: ['3D Touch', 'Live Photos', '4K video recording', 'Second-gen Touch ID']
    }
  },
  {
    name: 'iPhone SE (1st gen)',
    year: 2016,
    imageUrl: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800",
    specs: {
      display: '4" Retina (640 x 1136)',
      processor: 'Apple A9 64-bit dual-core 1.85 GHz',
      camera: '12 MP rear, 1.2 MP front',
      battery: '1624 mAh',
      storage: ['16GB', '32GB', '64GB', '128GB'],
      features: ['Compact design', 'Touch ID', '4K video', 'Live Photos']
    }
  },
  {
    name: 'iPhone 7',
    year: 2016,
    imageUrl: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800",
    specs: {
      display: '4.7" Retina HD (750 x 1334)',
      processor: 'Apple A10 Fusion quad-core 2.34 GHz',
      camera: '12 MP rear, 7 MP front',
      battery: '1960 mAh',
      storage: ['32GB', '128GB', '256GB'],
      features: ['Water resistance', 'Stereo speakers', 'No headphone jack', 'Taptic Engine']
    }
  },
  {
    name: 'iPhone 8',
    year: 2017,
    imageUrl: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800",
    specs: {
      display: '4.7" Retina HD (750 x 1334)',
      processor: 'Apple A11 Bionic hexa-core 2.39 GHz',
      camera: '12 MP rear, 7 MP front',
      battery: '1821 mAh',
      storage: ['64GB', '256GB'],
      features: ['Wireless charging', 'Glass back', 'True Tone display', 'Fast charging']
    }
  },
  {
    name: 'iPhone X',
    year: 2017,
    imageUrl: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800",
    specs: {
      display: '5.8" Super Retina OLED (1125 x 2436)',
      processor: 'Apple A11 Bionic hexa-core 2.39 GHz',
      camera: 'Dual 12 MP rear, 7 MP TrueDepth front',
      battery: '2716 mAh',
      storage: ['64GB', '256GB'],
      features: ['Face ID', 'OLED display', 'Animoji', 'No home button']
    }
  },
  {
    name: 'iPhone XS',
    year: 2018,
    imageUrl: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800",
    specs: {
      display: '5.8" Super Retina OLED (1125 x 2436)',
      processor: 'Apple A12 Bionic hexa-core',
      camera: 'Dual 12 MP rear, 7 MP TrueDepth front',
      battery: '2658 mAh',
      storage: ['64GB', '256GB', '512GB'],
      features: ['Dual SIM', 'Smart HDR', 'Improved Face ID', 'IP68 water resistance']
    }
  },
  {
    name: 'iPhone 11',
    year: 2019,
    imageUrl: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800",
    specs: {
      display: '6.1" Liquid Retina LCD (828 x 1792)',
      processor: 'Apple A13 Bionic hexa-core',
      camera: 'Dual 12 MP rear, 12 MP TrueDepth front',
      battery: '3110 mAh',
      storage: ['64GB', '128GB', '256GB'],
      features: ['Night mode', 'Ultra Wide camera', 'Spatial audio', 'Wi-Fi 6']
    }
  },
  {
    name: 'iPhone 12',
    year: 2020,
    imageUrl: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800",
    specs: {
      display: '6.1" Super Retina XDR OLED (1170 x 2532)',
      processor: 'Apple A14 Bionic hexa-core',
      camera: 'Dual 12 MP rear, 12 MP TrueDepth front',
      battery: '2815 mAh',
      storage: ['64GB', '128GB', '256GB'],
      features: ['5G', 'MagSafe', 'Ceramic Shield', 'HDR video recording']
    }
  },
  {
    name: 'iPhone 13',
    year: 2021,
    imageUrl: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800",
    specs: {
      display: '6.1" Super Retina XDR OLED (1170 x 2532)',
      processor: 'Apple A15 Bionic hexa-core',
      camera: 'Dual 12 MP rear, 12 MP TrueDepth front',
      battery: '3240 mAh',
      storage: ['128GB', '256GB', '512GB'],
      features: ['Cinematic mode', 'Photographic Styles', 'Smaller notch', 'Enhanced 5G']
    }
  },
  {
    name: 'iPhone 14',
    year: 2022,
    imageUrl: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800",
    specs: {
      display: '6.1" Super Retina XDR OLED (1170 x 2532)',
      processor: 'Apple A15 Bionic hexa-core',
      camera: 'Dual 12 MP rear, 12 MP TrueDepth front',
      battery: '3279 mAh',
      storage: ['128GB', '256GB', '512GB'],
      features: ['Emergency SOS via satellite', 'Crash Detection', 'Action mode', 'Photonic Engine']
    }
  },
  {
    name: 'iPhone 15',
    year: 2023,
    imageUrl: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800",
    specs: {
      display: '6.1" Super Retina XDR OLED (1179 x 2556)',
      processor: 'Apple A16 Bionic hexa-core',
      camera: '48 MP main + 12 MP ultra-wide rear, 12 MP front',
      battery: '3349 mAh',
      storage: ['128GB', '256GB', '512GB'],
      features: ['Dynamic Island', 'USB-C', 'Ceramic Shield', 'Advanced portrait mode']
    }
  },
  {
    name: "iPhone 15 Pro Max",
    year: 2023,
    imageUrl: "https://images.unsplash.com/photo-1696428762104-439d2a0c9900?auto=format&fit=crop&w=800",
    specs: {
      display: "6.7-inch Super Retina XDR OLED, 2796 x 1290 pixels (460 ppi), ProMotion, Always-On",
      processor: "Apple A17 Pro chip, 6‑core CPU, 6‑core GPU, 16‑core Neural Engine",
      camera: "48 MP main + 12 MP ultrawide + 12 MP telephoto with 5x optical zoom, 12 MP TrueDepth front",
      battery: "4441 mAh Li-ion battery, up to 29 hours video playback",
      storage: ["256GB", "512GB", "1TB"],
      features: [
        "Titanium design",
        "Action button",
        "USB-C with Thunderbolt",
        "Emergency SOS via satellite",
        "ProRes video recording",
        "5G connectivity"
      ]
    }
  },
  {
    name: "iPhone 16 Pro Max (Concept)",
    year: 2024,
    imageUrl: "https://images.unsplash.com/photo-1697644371824-41d4d0a8a12d?auto=format&fit=crop&w=800",
    specs: {
      display: "6.9-inch Super Retina XDR OLED",
      processor: "Apple A18 Pro (expected)",
      camera: "Expected improvements in camera system",
      battery: "Expected larger battery capacity",
      storage: ["256GB", "512GB", "1TB", "2TB"],
      features: ["Expected new features", "Improved AI capabilities", "Enhanced cameras"]
    }
  }
];

// Note: For models without direct image URLs, we'll use placeholder images
export const getPlaceholderImage = (model: string) => {
  return `https://placehold.co/800x600/e2e8f0/64748b?text=${encodeURIComponent(model)}`;
}; 