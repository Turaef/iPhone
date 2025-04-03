import React from 'react';
import { iPhone } from '../types';

interface PhoneCardProps {
  phone: iPhone;
}

const PhoneCard: React.FC<PhoneCardProps> = ({ phone }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative bg-gray-100 h-48 flex items-center justify-center">
        <div className="text-center text-2xl font-bold text-gray-700">
          {phone.name}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{phone.name}</h3>
        <p className="text-gray-500 mb-4">{phone.releaseDate}</p>
        
        <div className="space-y-3">
          <div className="flex items-start">
            <span className="font-semibold w-24">Display:</span>
            <span className="text-gray-700">{phone.display}</span>
          </div>
          
          <div className="flex items-start">
            <span className="font-semibold w-24">Camera:</span>
            <span className="text-gray-700">{phone.camera}</span>
          </div>
          
          <div className="flex items-start">
            <span className="font-semibold w-24">Processor:</span>
            <span className="text-gray-700">{phone.processor}</span>
          </div>
          
          <div className="flex items-start">
            <span className="font-semibold w-24">RAM:</span>
            <span className="text-gray-700">{phone.ram}</span>
          </div>
          
          <div className="flex items-start">
            <span className="font-semibold w-24">Price:</span>
            <span className="text-gray-700">{phone.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard; 