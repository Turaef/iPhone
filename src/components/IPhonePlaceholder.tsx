import React from 'react';
import { motion } from 'framer-motion';

interface IPhonePlaceholderProps {
  name: string;
  year: number;
  color?: string;
}

const IPhonePlaceholder: React.FC<IPhonePlaceholderProps> = ({ name, year, color = '#E5E7EB' }) => {
  return (
    <motion.div
      className="relative w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="absolute inset-0 rounded-lg"
        style={{ backgroundColor: color }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="w-16 h-32 rounded-lg border-4 border-gray-400 relative">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-400 rounded-full" />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-2 border-gray-400" />
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm font-medium text-gray-600">{name}</p>
          <p className="text-xs text-gray-500">{year}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default IPhonePlaceholder; 