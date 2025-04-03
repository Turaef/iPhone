import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IPhoneModel, iphones } from '../data/iphones';
import IPhonePlaceholder from './IPhonePlaceholder';

const IPhoneGallery: React.FC = () => {
  const [selectedIPhone, setSelectedIPhone] = useState<IPhoneModel | null>(null);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState<'year' | 'name'>('year');

  const filteredIPhones = iphones
    .filter(iphone =>
      iphone.name.toLowerCase().includes(filter.toLowerCase()) ||
      iphone.year.toString().includes(filter)
    )
    .sort((a, b) => {
      if (sortBy === 'year') {
        return b.year - a.year;
      }
      return a.name.localeCompare(b.name);
    });

  const getColorForYear = (year: number): string => {
    const startYear = 2007;
    const endYear = 2024;
    const hue = ((year - startYear) / (endYear - startYear)) * 240; // Blue (240) to Red (0)
    return `hsl(${hue}, 70%, 90%)`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-center mb-4">iPhone Evolution</h2>
        <p className="text-center text-gray-600 mb-6">
          Explore the history of iPhone from 2007 to present
        </p>
        <div className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Search by name or year..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <div className="flex justify-center space-x-4">
            <button
              className={`px-4 py-2 rounded-lg ${
                sortBy === 'year'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setSortBy('year')}
            >
              Sort by Year
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                sortBy === 'name'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setSortBy('name')}
            >
              Sort by Name
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredIPhones.map((iphone, index) => (
          <motion.div
            key={iphone.name}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedIPhone(iphone)}
          >
            <div className="p-6">
              <div className="h-48 mb-4">
                <IPhonePlaceholder
                  name={iphone.name}
                  year={iphone.year}
                  color={getColorForYear(iphone.year)}
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{iphone.name}</h3>
                  <p className="text-gray-600">Released: {iphone.year}</p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {iphone.specs.storage[0]} - {iphone.specs.storage[iphone.specs.storage.length - 1]}
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-sm"><span className="font-medium">Display:</span> {iphone.specs.display}</p>
                <p className="text-sm"><span className="font-medium">Processor:</span> {iphone.specs.processor}</p>
                <p className="text-sm"><span className="font-medium">Camera:</span> {iphone.specs.camera}</p>
                <p className="text-sm"><span className="font-medium">Battery:</span> {iphone.specs.battery}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIPhone && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIPhone(null)}
          >
            <motion.div
              className="bg-white rounded-lg max-w-2xl w-full p-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold">{selectedIPhone.name}</h3>
                  <p className="text-gray-600">Released: {selectedIPhone.year}</p>
                </div>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setSelectedIPhone(null)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="h-64">
                  <IPhonePlaceholder
                    name={selectedIPhone.name}
                    year={selectedIPhone.year}
                    color={getColorForYear(selectedIPhone.year)}
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Specifications</h4>
                    <div className="grid grid-cols-1 gap-2">
                      <p className="text-sm"><span className="font-medium">Display:</span> {selectedIPhone.specs.display}</p>
                      <p className="text-sm"><span className="font-medium">Processor:</span> {selectedIPhone.specs.processor}</p>
                      <p className="text-sm"><span className="font-medium">Camera:</span> {selectedIPhone.specs.camera}</p>
                      <p className="text-sm"><span className="font-medium">Battery:</span> {selectedIPhone.specs.battery}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">Storage Options</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedIPhone.specs.storage.map((size) => (
                        <span
                          key={size}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedIPhone.specs.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center space-x-2"
                    >
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IPhoneGallery; 