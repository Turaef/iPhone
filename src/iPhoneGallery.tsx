import React, { useState, useEffect } from 'react';
import galleryData from './iphoneGalleryData.json';

// Default placeholder image for missing iPhone images
const DEFAULT_PLACEHOLDER = "https://images.unsplash.com/photo-1592434134763-c83411b3ab1a?auto=format&fit=crop&w=800";

interface IPhone {
  model: string;
  image: string;
}

const SimpleIPhoneGallery: React.FC = () => {
  const [iphones, setIphones] = useState<IPhone[]>([]);
  
  useEffect(() => {
    setIphones(galleryData);
  }, []);

  // Function to get the short label for each iPhone model
  const getShortLabel = (model: string): string => {
    if (model.includes("iPhone")) {
      return `Apple ${model}`;
    } else {
      return `iPhone ${model}`;
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">iPhone Evolution Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {iphones.map((iphone, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl hover:shadow-2xl p-6 text-center transition-all duration-300 transform hover:-translate-y-1 border border-neutral-200 dark:border-neutral-800"
          >
            <div className="flex justify-center items-center h-48">
              <img 
                src={iphone.image || DEFAULT_PLACEHOLDER} 
                alt={`${iphone.model} image`}
                className="h-48 w-full object-contain rounded-xl shadow-sm mb-4"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = DEFAULT_PLACEHOLDER;
                }}
              />
            </div>
            <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-2">{iphone.model}</h3>
            <div className="mt-2">
              <span className="text-sm text-neutral-600 dark:text-neutral-300">{getShortLabel(iphone.model)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleIPhoneGallery; 