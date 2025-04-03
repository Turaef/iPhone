import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IPhoneModelDetailsProps {
  model: {
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
    imageUrl: string;
  };
  onClose: () => void;
}

const IPhoneModelDetails: React.FC<IPhoneModelDetailsProps> = ({ model, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white rounded-2xl max-w-5xl w-full shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <div className="grid md:grid-cols-2">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-gradient-to-br from-gray-50 to-gray-100"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="aspect-w-3 aspect-h-4 rounded-xl overflow-hidden shadow-2xl ring-1 ring-gray-200"
              >
                <img
                  src={model.imageUrl}
                  alt={model.name}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="p-8"
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-6"
              >
                <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                  {model.name}
                </h2>
                <p className="text-gray-600 text-lg">Released in {model.year}</p>
              </motion.div>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Technical Specifications</h3>
                  <div className="space-y-4">
                    {Object.entries({
                      Display: model.specs.display,
                      Processor: model.specs.processor,
                      Camera: model.specs.camera,
                      Battery: model.specs.battery,
                    }).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl shadow-sm border border-gray-100"
                      >
                        <h4 className="font-medium text-gray-700 mb-1">{key}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{value}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Storage Options</h3>
                  <div className="flex flex-wrap gap-2">
                    {model.specs.storage.map((size, index) => (
                      <motion.span
                        key={size}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 rounded-full font-medium shadow-sm border border-blue-100"
                      >
                        {size}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {model.specs.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        className="flex items-center space-x-2 group"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          className="w-5 h-5 text-green-500 flex-shrink-0"
                        >
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </motion.div>
                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 bg-white rounded-full shadow-md"
            onClick={onClose}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default IPhoneModelDetails; 