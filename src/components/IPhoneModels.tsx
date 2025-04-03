import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { iphoneModels, IPhoneSpecs } from '../data/iphoneModels';

const IPhoneModels = () => {
  const [selectedModel, setSelectedModel] = useState<IPhoneSpecs | null>(null);

  return (
    <section id="models" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-12"
        >
          iPhone Models
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {iphoneModels.map((model, index) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedModel(model)}
            >
              <div className="aspect-square relative">
                <img
                  src={model.imageUrl}
                  alt={model.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{model.name}</h3>
                <p className="text-gray-600 text-sm">{model.releaseDate}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedModel && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedModel(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl font-bold">{selectedModel.name}</h2>
                    <button
                      onClick={() => setSelectedModel(null)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="aspect-square relative mb-6">
                    <img
                      src={selectedModel.imageUrl}
                      alt={selectedModel.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-700">Release Date</h3>
                      <p className="text-gray-600">{selectedModel.releaseDate}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-700">Display</h3>
                      <p className="text-gray-600">{selectedModel.display}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-700">Processor</h3>
                      <p className="text-gray-600">{selectedModel.processor}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-700">RAM</h3>
                      <p className="text-gray-600">{selectedModel.ram}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-700">Storage</h3>
                      <p className="text-gray-600">{selectedModel.storage.join(', ')}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-700">Camera</h3>
                      <p className="text-gray-600">{selectedModel.camera}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-700">Battery</h3>
                      <p className="text-gray-600">{selectedModel.battery}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-700">Price</h3>
                      <p className="text-gray-600">{selectedModel.price}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-700">Description</h3>
                      <p className="text-gray-600">{selectedModel.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default IPhoneModels; 