import React, { useState, useEffect } from 'react';
import galleryData from './iphoneGalleryData.json';

interface IPhone {
  model: string;
  image: string;
}

const SimpleIPhoneGallery: React.FC = () => {
  const [iphones, setIphones] = useState<IPhone[]>([]);
  
  useEffect(() => {
    setIphones(galleryData);
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">iPhone Evolution</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {iphones.map((iphone, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl hover:shadow-2xl p-6 text-center transition-all duration-300 transform hover:-translate-y-1"
          >
            <img 
              src={iphone.image} 
              alt={`${iphone.model} image`}
              className="rounded-xl shadow-md mb-3 object-cover h-48 w-full"
            />
            <h3 className="text-xl font-semibold mt-4">{iphone.model}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleIPhoneGallery; 