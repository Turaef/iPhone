export interface IPhoneModel {
  name: string;
  year: number;
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
    name: 'iPhone 2G',
    year: 2007,
    specs: {
      display: '3.5" LCD (320 x 480)',
      processor: 'Samsung 32-bit RISC ARM 11 620 MHz',
      camera: '2 MP rear',
      battery: '1400 mAh',
      storage: ['4GB', '8GB', '16GB'],
      features: ['Multi-touch display', 'WiFi', 'Safari browser', 'iTunes integration']
    }
  },
  {
    name: 'iPhone 3G',
    year: 2008,
    specs: {
      display: '3.5" LCD (320 x 480)',
      processor: 'Samsung 32-bit RISC ARM 11 620 MHz',
      camera: '2 MP rear',
      battery: '1150 mAh',
      storage: ['8GB', '16GB'],
      features: ['3G connectivity', 'GPS', 'App Store', 'Microsoft Exchange support']
    }
  },
  {
    name: 'iPhone 3GS',
    year: 2009,
    specs: {
      display: '3.5" LCD (320 x 480)',
      processor: 'Samsung APL0298C05 600 MHz',
      camera: '3 MP rear, autofocus',
      battery: '1219 mAh',
      storage: ['8GB', '16GB', '32GB'],
      features: ['Voice Control', 'Digital compass', 'Video recording', 'Nike+ support']
    }
  },
  {
    name: 'iPhone 4',
    year: 2010,
    specs: {
      display: '3.5" Retina (640 x 960)',
      processor: 'Apple A4 800 MHz',
      camera: '5 MP rear, VGA front',
      battery: '1420 mAh',
      storage: ['8GB', '16GB', '32GB'],
      features: ['Retina Display', 'FaceTime', 'HD video recording', 'Gyroscope']
    }
  },
  {
    name: 'iPhone 4S',
    year: 2011,
    specs: {
      display: '3.5" Retina (640 x 960)',
      processor: 'Apple A5 dual-core 1 GHz',
      camera: '8 MP rear, VGA front',
      battery: '1432 mAh',
      storage: ['8GB', '16GB', '32GB', '64GB'],
      features: ['Siri', '1080p video recording', 'iCloud', 'AirPlay mirroring']
    }
  },
  {
    name: 'iPhone 5',
    year: 2012,
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
    specs: {
      display: '6.1" Super Retina XDR OLED (1179 x 2556)',
      processor: 'Apple A16 Bionic hexa-core',
      camera: '48 MP main + 12 MP ultra-wide rear, 12 MP front',
      battery: '3349 mAh',
      storage: ['128GB', '256GB', '512GB'],
      features: ['Dynamic Island', 'USB-C', 'Ceramic Shield', 'Advanced portrait mode']
    }
  }
]; 