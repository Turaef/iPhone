import React from 'react';
import { motion } from 'framer-motion';
import { iPhone } from '../types';

interface IPhoneModelDetailsProps {
  phone: iPhone;
  onClose: () => void;
}

const IPhoneModelDetails: React.FC<IPhoneModelDetailsProps> = ({ phone, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-gray-800 rounded-xl p-6 max-w-2xl w-full mx-4 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-4">{phone.name}</h2>
        <p className="text-gray-400 mb-6">{phone.releaseDate}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Specifications</h3>
            <div className="space-y-2">
              <p><span className="text-gray-400">Display:</span> {phone.display}</p>
              <p><span className="text-gray-400">Processor:</span> {phone.processor}</p>
              <p><span className="text-gray-400">Camera:</span> {phone.camera}</p>
              <p><span className="text-gray-400">RAM:</span> {phone.ram}</p>
              <p><span className="text-gray-400">Price:</span> {phone.price}</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Storage Options</h3>
            <div className="flex flex-wrap gap-2">
              {phone.storage.map((size) => (
                <span
                  key={size}
                  className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                >
                  {size}
                </span>
              ))}
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-3">Key Features</h3>
            <ul className="space-y-2">
              {phone.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 text-gray-300">{phone.description}</p>
      </motion.div>
    </div>
  );
};

export default IPhoneModelDetails; 