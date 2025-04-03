import React from 'react';

interface HeroProps {
  onYearSelect: (year: string | null) => void;
}

const Hero: React.FC<HeroProps> = ({ onYearSelect }) => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            iPhone Evolution
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore the revolutionary journey of iPhone from its inception to the latest innovations
          </p>
          
          {/* Quick Year Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["2023", "2022", "2021", "2020", "2019"].map((year) => (
              <button
                key={year}
                onClick={() => onYearSelect(year)}
                className="px-6 py-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-200 text-sm md:text-base"
              >
                {year}
              </button>
            ))}
            <button
              onClick={() => onYearSelect(null)}
              className="px-6 py-2 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all duration-200 text-sm md:text-base"
            >
              View All
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
      </div>
    </div>
  );
};

export default Hero; 