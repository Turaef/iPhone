import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { iPhone } from '../types';
import IPhoneModelDetails from './IPhoneModelDetails';

// High-quality iPhone images from Unsplash and Pexels
const getIPhoneImage = (modelName: string): string => {
  const imageMap: Record<string, string> = {
    'iPhone 2G': 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=800',
    'iPhone 3G': 'https://images.pexels.com/photos/3644098/pexels-photo-3644098.jpeg?auto=compress&w=800',
    'iPhone 3GS': 'https://images.pexels.com/photos/8533269/pexels-photo-8533269.jpeg?auto=compress&w=800',
    'iPhone 4': 'https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg?auto=compress&w=800',
    'iPhone 4S': 'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800',
    'iPhone 5': 'https://images.unsplash.com/photo-1535157412991-2ef801c1748b?auto=format&fit=crop&w=800',
    'iPhone 5S': 'https://images.unsplash.com/photo-1536688261748-008b2421be90?auto=format&fit=crop&w=800',
    'iPhone 5C': 'https://images.unsplash.com/photo-1565849905460-97dce0f9ac70?auto=format&fit=crop&w=800',
    'iPhone 6': 'https://images.unsplash.com/photo-1571380401583-72ca84994796?auto=format&fit=crop&w=800',
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
    'iPhone 11 Pro': 'https://images.unsplash.com/photo-1573148195900-78da7a155de0?auto=format&fit=crop&w=800',
    'iPhone 11 Pro Max': 'https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&w=800',
    'iPhone SE (2nd gen)': 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&w=800',
    'iPhone 12 Mini': 'https://images.unsplash.com/photo-1607936854279-55e8a4c64888?auto=format&fit=crop&w=800',
    'iPhone 12': 'https://images.unsplash.com/photo-1605637465473-e5f8e159820b?auto=format&fit=crop&w=800',
    'iPhone 12 Pro': 'https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?auto=format&fit=crop&w=800',
    'iPhone 12 Pro Max': 'https://images.unsplash.com/photo-1604054923518-f977fa89eeac?auto=format&fit=crop&w=800',
    'iPhone 13 Mini': 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=800',
    'iPhone 13': 'https://images.unsplash.com/photo-1633053699005-183bd5a19f87?auto=format&fit=crop&w=800',
    'iPhone 13 Pro': 'https://images.unsplash.com/photo-1632661674388-78da7a155de0?auto=format&fit=crop&w=800',
    'iPhone 13 Pro Max': 'https://images.unsplash.com/photo-1634618774956-57a0d3b128a3?auto=format&fit=crop&w=800', 
    'iPhone SE (3rd gen)': 'https://images.unsplash.com/photo-1659873007385-4d3b6afb8faf?auto=format&fit=crop&w=800',
    'iPhone 14': 'https://images.unsplash.com/photo-1663072345306-99c74280854b?auto=format&fit=crop&w=800',
    'iPhone 14 Plus': 'https://images.unsplash.com/photo-1663072345173-58eb3f38d3d8?auto=format&fit=crop&w=800',
    'iPhone 14 Pro': 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&w=800',
    'iPhone 14 Pro Max': 'https://images.unsplash.com/photo-1663039781664-8e5b799e60b0?auto=format&fit=crop&w=800',
    'iPhone 15': 'https://images.unsplash.com/photo-1694818848785-66e527b5c454?auto=format&fit=crop&w=800',
    'iPhone 15 Plus': 'https://images.unsplash.com/photo-1694638275673-9659b2ad5169?auto=format&fit=crop&w=800',
    'iPhone 15 Pro': 'https://images.unsplash.com/photo-1695048133142-1a2be8861e3d?auto=format&fit=crop&w=800',
    'iPhone 15 Pro Max': 'https://images.unsplash.com/photo-1695048132845-31795a61b720?auto=format&fit=crop&w=800'
  };

  return imageMap[modelName] || 'https://images.unsplash.com/photo-1592434134763-c83411b3ab1a?auto=format&fit=crop&w=800';
};

interface IPhoneGalleryProps {
  phones: iPhone[];
}

const IPhoneGallery: React.FC<IPhoneGalleryProps> = ({ phones }) => {
  const [selectedPhone, setSelectedPhone] = useState<iPhone | null>(null);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState<'year' | 'name'>('year');

  const filteredPhones = phones
    .filter(phone => 
      phone.name.toLowerCase().includes(filter.toLowerCase()) ||
      phone.year.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'year') {
        return parseInt(b.year) - parseInt(a.year);
      }
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="min-h-screen backdrop-blur-md bg-gradient-to-b from-gray-100 to-gray-200 dark:from-neutral-800 dark:to-neutral-900 p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto space-y-8"
      >
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text"
          >
            iPhone Evolution
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 text-lg"
          >
            Explore the history of innovation
          </motion.p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search iPhones..."
              className="w-full sm:w-64 px-4 py-2 pl-10 rounded-lg bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          
          <select
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'year' | 'name')}
          >
            <option value="year">Sort by Year</option>
            <option value="name">Sort by Name</option>
          </select>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredPhones.map((phone) => (
              <motion.div
                key={phone.id}
                className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl hover:shadow-2xl p-6 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                whileHover={{ y: -5 }}
                onClick={() => setSelectedPhone(phone)}
              >
                <img 
                  src={getIPhoneImage(phone.name)} 
                  alt={`${phone.name} image`} 
                  className="rounded-xl shadow-md mb-3 object-cover h-48 w-full"
                />
                <h3 className="font-semibold text-lg text-center mb-2">{phone.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center mb-4">{phone.year}</p>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <p><span className="font-medium">Display:</span> {phone.display}</p>
                  <p><span className="font-medium">Processor:</span> {phone.processor}</p>
                  <p><span className="font-medium">Camera:</span> {phone.camera}</p>
                  <p><span className="font-medium">RAM:</span> {phone.ram}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-neutral-800">
                  <button className="w-full py-2 text-blue-600 dark:text-blue-400 font-medium text-sm hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredPhones.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">No iPhones found matching your search.</p>
          </motion.div>
        )}
      </motion.div>

      <AnimatePresence>
        {selectedPhone && (
          <IPhoneModelDetails
            phone={selectedPhone}
            onClose={() => setSelectedPhone(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default IPhoneGallery; 