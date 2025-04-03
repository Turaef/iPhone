import React, { useState } from 'react';
import { iPhone } from '../types';
import PhoneCard from './PhoneCard';

interface PhoneTimelineProps {
  phones: iPhone[];
  years: string[];
  onUpdatePhone?: (phoneId: string, updatedData: Partial<iPhone>) => Promise<void>;
  onDeletePhone?: (phoneId: string) => Promise<void>;
}

const PhoneTimeline: React.FC<PhoneTimelineProps> = ({ phones, years, onUpdatePhone, onDeletePhone }) => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const filteredPhones = selectedYear 
    ? phones.filter(phone => phone.year === selectedYear)
    : phones;

  const handleYearClick = (year: string) => {
    setSelectedYear(year === selectedYear ? null : year);
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => handleYearClick(year)}
            className={`text-2xl font-bold px-6 py-3 rounded-lg shadow-md transition-colors ${
              year === selectedYear 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {years.map((year) => {
          const yearPhones = phones.filter((phone) => phone.year === year);
          return (
            <div key={year} className="mb-16">
              <h2 className="text-4xl font-bold mb-8 text-gray-800 border-b pb-2">{year}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {yearPhones.map((phone) => (
                  <div key={phone.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                    {/* Image Section */}
                    <div className="relative h-64 bg-gray-100">
                      <img 
                        src={phone.imageUrl} 
                        alt={phone.name}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 text-gray-800">{phone.name}</h3>
                      
                      {/* Quick Specs */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-sm">
                          <span className="text-gray-500">Processor</span>
                          <p className="font-medium text-gray-800">{phone.processor}</p>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">Display</span>
                          <p className="font-medium text-gray-800">{phone.display}</p>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">Camera</span>
                          <p className="font-medium text-gray-800">{phone.camera}</p>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-500">Storage</span>
                          <p className="font-medium text-gray-800">{phone.storage?.join(', ')}</p>
                        </div>
                      </div>

                      {/* Colors */}
                      {phone.colors && (
                        <div className="mb-4">
                          <span className="text-sm text-gray-500">Available Colors</span>
                          <div className="flex gap-2 mt-1">
                            {phone.colors.map((color, index) => (
                              <span 
                                key={index}
                                className="px-2 py-1 text-xs bg-gray-100 rounded-full text-gray-600"
                              >
                                {color}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-4">{phone.description}</p>

                      {/* Price */}
                      {phone.price && (
                        <div className="text-lg font-bold text-gray-800 mb-4">
                          Starting from {phone.price}
                        </div>
                      )}

                      {/* Key Features */}
                      {phone.features && (
                        <div className="mb-4">
                          <span className="text-sm text-gray-500">Key Features</span>
                          <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                            {phone.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Action Buttons */}
                      {(onUpdatePhone || onDeletePhone) && (
                        <div className="flex gap-3 mt-6">
                          {onUpdatePhone && (
                            <button
                              onClick={() => onUpdatePhone(phone.id, { name: phone.name + " (Updated)" })}
                              className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                            >
                              Edit
                            </button>
                          )}
                          {onDeletePhone && (
                            <button
                              onClick={() => onDeletePhone(phone.id)}
                              className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                            >
                              Delete
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhoneTimeline; 