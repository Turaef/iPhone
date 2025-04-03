import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">iPhone Evolution</h3>
            <p className="text-gray-400">A comprehensive history of Apple's iconic device</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">© {currentYear} iPhone Evolution</p>
            <p className="text-gray-500 text-sm mt-1">This is a demo project. Not affiliated with Apple Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 