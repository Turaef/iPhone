import React from 'react';
import { motion } from 'framer-motion';
import { iPhone } from '../types';

// Default placeholder image for missing iPhone images
const DEFAULT_PLACEHOLDER = "https://images.unsplash.com/photo-1592434134763-c83411b3ab1a?auto=format&fit=crop&w=800";

// High-quality iPhone images from Unsplash and Pexels
const getIPhoneImage = (modelName: string, imageUrl?: string): string => {
  // If imageUrl is provided and valid, use it
  if (imageUrl && imageUrl.trim() !== '') {
    return imageUrl;
  }
  
  const imageMap: Record<string, string> = {
    'iPhone 2G': 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800',
    'iPhone 3G': 'https://images.pexels.com/photos/3644098/pexels-photo-3644098.jpeg?auto=compress&w=800',
    'iPhone 3GS': 'https://images.pexels.com/photos/8533269/pexels-photo-8533269.jpeg?auto=compress&w=800',
    'iPhone 4': 'https://images.unsplash.com/photo-1616430765481-315b2dc5d4d4?auto=format&fit=crop&w=800',
    'iPhone 4S': 'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800',
    'iPhone 5': 'https://images.unsplash.com/photo-1535157412991-2ef801c1748b?auto=format&fit=crop&w=800',
    'iPhone 5S': 'https://images.unsplash.com/photo-1589394810845-378bdfd76f97?auto=format&fit=crop&w=800',
    'iPhone 5C': 'https://images.unsplash.com/photo-1565849905460-97dce0f9ac70?auto=format&fit=crop&w=800',
    'iPhone 6': 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800',
    'iPhone 6 Plus': 'https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg?auto=compress&w=800',
    'iPhone 6S': 'https://images.unsplash.com/photo-1565849904461-04023db9c94b?auto=format&fit=crop&w=800',
    'iPhone 6S Plus': 'https://images.pexels.com/photos/5741605/pexels-photo-5741605.jpeg?auto=compress&w=800',
    'iPhone SE (1st gen)': 'https://images.unsplash.com/photo-1551122102-63a2aed40fe3?auto=format&fit=crop&w=800',
    'iPhone 7': 'https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&w=800',
    'iPhone 7 Plus': 'https://images.unsplash.com/photo-1592434134753-a70baf7979d5?auto=format&fit=crop&w=800',
    'iPhone 8': 'https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&w=800',
    'iPhone 8 Plus': 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&w=800',
    'iPhone X': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800',
    'iPhone XR': 'https://images.unsplash.com/photo-1548094878-84ced0f6896d?auto=format&fit=crop&w=800',
    'iPhone XS': 'https://images.unsplash.com/photo-1535157412991-2ef801c1748b?auto=format&fit=crop&w=800',
    'iPhone XS Max': 'https://images.pexels.com/photos/5741605/pexels-photo-5741605.jpeg?auto=compress&w=800',
    'iPhone 11': 'https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&w=800',
    'iPhone 11 Pro': 'https://images.unsplash.com/photo-1574629810360-7efbbe195409?auto=format&fit=crop&w=800',
    'iPhone 11 Pro Max': 'https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&w=800',
    'iPhone SE (2nd gen)': 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&w=800',
    'iPhone 12 Mini': 'https://images.unsplash.com/photo-1607936854279-55e8a4c64888?auto=format&fit=crop&w=800',
    'iPhone 12': 'https://images.unsplash.com/photo-1605637465473-e5f8e159820b?auto=format&fit=crop&w=800',
    'iPhone 12 Pro': 'https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?auto=format&fit=crop&w=800',
    'iPhone 12 Pro Max': 'https://images.unsplash.com/photo-1604054923518-f977fa89eeac?auto=format&fit=crop&w=800',
    'iPhone 13 Mini': 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=800',
    'iPhone 13': 'https://images.unsplash.com/photo-1633053699005-183bd5a19f87?auto=format&fit=crop&w=800',
    'iPhone 13 Pro': 'https://images.unsplash.com/photo-1631452180513-978ea3abdc4c?auto=format&fit=crop&w=800',
    'iPhone 13 Pro Max': 'https://images.unsplash.com/photo-1634618774956-57a0d3b128a3?auto=format&fit=crop&w=800', 
    'iPhone SE (3rd gen)': 'https://images.unsplash.com/photo-1659873007385-4d3b6afb8faf?auto=format&fit=crop&w=800',
    'iPhone 14': 'https://images.unsplash.com/photo-1663072345306-99c74280854b?auto=format&fit=crop&w=800',
    'iPhone 14 Plus': 'https://images.unsplash.com/photo-1663072345173-58eb3f38d3d8?auto=format&fit=crop&w=800',
    'iPhone 14 Pro': 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&w=800',
    'iPhone 14 Pro Max': 'https://images.unsplash.com/photo-1663039781664-8e5b799e60b0?auto=format&fit=crop&w=800',
    'iPhone 15': 'https://images.unsplash.com/photo-1694818848785-66e527b5c454?auto=format&fit=crop&w=800',
    'iPhone 15 Plus': 'https://images.unsplash.com/photo-1694638275673-9659b2ad5169?auto=format&fit=crop&w=800',
    'iPhone 15 Pro': 'https://images.unsplash.com/photo-1695048133142-1a2be8861e3d?auto=format&fit=crop&w=800',
    'iPhone 15 Pro Max': 'https://images.unsplash.com/photo-1700088574432-7f0f93f89be7?auto=format&fit=crop&w=800'
  };

  return imageMap[modelName] || DEFAULT_PLACEHOLDER;
};

interface IPhoneModelDetailsProps {
  phone: iPhone;
  onClose: () => void;
}

const IPhoneModelDetails: React.FC<IPhoneModelDetailsProps> = ({ phone, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl p-6 max-w-2xl w-full mx-4 relative border border-neutral-200 dark:border-neutral-800"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-800 dark:hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="md:w-1/3">
            <img
              src={getIPhoneImage(phone.name, phone.imageUrl)}
              alt={`${phone.name} image`}
              className="h-64 w-full object-cover rounded-xl shadow-sm mb-4"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = DEFAULT_PLACEHOLDER;
              }}
            />
          </div>

          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-white mb-2">{phone.name}</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">{phone.releaseDate}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-white">Specifications</h3>
                <div className="space-y-2 text-neutral-600 dark:text-neutral-300">
                  <p><span className="font-medium">Display:</span> {phone.display}</p>
                  <p><span className="font-medium">Processor:</span> {phone.processor}</p>
                  <p><span className="font-medium">Camera:</span> {phone.camera}</p>
                  <p><span className="font-medium">RAM:</span> {phone.ram}</p>
                  <p><span className="font-medium">Price:</span> {phone.price}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-white">Storage Options</h3>
                <div className="flex flex-wrap gap-2">
                  {phone.storage.map((size) => (
                    <span
                      key={size}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {size}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mt-6 mb-3 text-neutral-800 dark:text-white">Key Features</h3>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                  {phone.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <h3 className="text-lg font-semibold mb-3 text-neutral-800 dark:text-white">Description</h3>
              <p className="text-neutral-600 dark:text-neutral-300">{phone.description}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IPhoneModelDetails; 