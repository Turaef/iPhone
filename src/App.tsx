import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import PhoneTimeline from './components/PhoneTimeline'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'
import { iPhoneData } from './data/iPhoneData'
import { iPhone } from './types'
import { getCollection, addDocument, updateDocument, deleteDocument } from './firebase/services'
import { motion, AnimatePresence } from 'framer-motion'
import IPhoneModels from './components/IPhoneModels'

function App() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [phones, setPhones] = useState<iPhone[]>(iPhoneData);
  const [isSearching, setIsSearching] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initialize Firebase data
  useEffect(() => {
    fetchData();
    // Upload initial data if needed
    uploadInitialData();
  }, []);

  const years = [...new Set(phones.map((phone: iPhone) => phone.year))].sort();

  const handleYearSelect = (year: string | null) => {
    setSelectedYear(year);
    setSearchQuery('');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    // Simulate search
    setTimeout(() => setIsSearching(false), 1500);
  };

  // Fetch data from Firebase
  const fetchData = async () => {
    try {
      const data = await getCollection('iphones');
      if (data.length > 0) {
        setPhones(data as iPhone[]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Upload initial data to Firebase if collection is empty
  const uploadInitialData = async () => {
    try {
      const existingData = await getCollection('iphones');
      if (existingData.length === 0) {
        // Upload each iPhone to Firebase
        for (const phone of iPhoneData) {
          await addDocument('iphones', phone);
        }
        console.log('Initial data uploaded successfully');
      }
    } catch (error) {
      console.error('Error uploading initial data:', error);
    }
  };

  // Example function to update a phone
  const updatePhone = async (phoneId: string, updatedData: Partial<iPhone>) => {
    try {
      await updateDocument('iphones', phoneId, updatedData);
      await fetchData(); // Refresh the data
    } catch (error) {
      console.error('Error updating phone:', error);
    }
  };

  // Example function to delete a phone
  const deletePhone = async (phoneId: string) => {
    try {
      await deleteDocument('iphones', phoneId);
      await fetchData(); // Refresh the data
    } catch (error) {
      console.error('Error deleting phone:', error);
    }
  };

  let filteredPhones = phones;

  // Filter by year if selected
  if (selectedYear) {
    filteredPhones = filteredPhones.filter((phone: iPhone) => phone.year === selectedYear);
  }

  // Filter by search query if provided
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredPhones = filteredPhones.filter((phone: iPhone) => 
      phone.name.toLowerCase().includes(query) ||
      phone.processor.toLowerCase().includes(query) ||
      phone.display.toLowerCase().includes(query) ||
      phone.camera.toLowerCase().includes(query)
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src="/apple-logo.svg" alt="Apple Logo" className="h-8 w-8" />
              <span className="ml-2 text-xl font-semibold">iPhone Evolution</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#models" className="text-gray-700 hover:text-gray-900">Models</a>
              <a href="#specs" className="text-gray-700 hover:text-gray-900">Specifications</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#models" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Models</a>
            <a href="#specs" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Specifications</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">About</a>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            The Evolution of iPhone
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            From the original iPhone to the latest iPhone 15 Pro Max, explore the journey of innovation and technology.
          </motion.p>
        </div>
      </section>

      {/* iPhone Models Section */}
      <IPhoneModels />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About</h3>
              <p className="text-gray-400">
                Explore the complete history of iPhone, from its revolutionary debut to the latest innovations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#models" className="text-gray-400 hover:text-white">Models</a></li>
                <li><a href="#specs" className="text-gray-400 hover:text-white">Specifications</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Have questions? Reach out to us at:<br />
                <a href="mailto:contact@iphone-evolution.com" className="hover:text-white">
                  contact@iphone-evolution.com
                </a>
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 iPhone Evolution. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App 