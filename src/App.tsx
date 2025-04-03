import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import PhoneTimeline from './components/PhoneTimeline'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'
import { iPhoneData } from './data/iPhoneData'
import { iPhone } from './types'
import { getCollection, addDocument, updateDocument, deleteDocument } from './firebase/services'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [phones, setPhones] = useState<iPhone[]>(iPhoneData);
  const [isSearching, setIsSearching] = useState(false);

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="container-width">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              iPhone Evolution
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover the journey of iPhone's transformation from its inception to the latest innovations
            </p>
            
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search iPhone models..."
                className="search-bar"
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-primary"
              >
                {isSearching ? (
                  <div className="loading-spinner" />
                ) : (
                  'Search'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container-width">
          <div className="card-grid">
            {[
              {
                title: 'Innovation',
                description: 'Revolutionary features that changed mobile technology',
                icon: '🚀'
              },
              {
                title: 'Design',
                description: 'Elegant and timeless aesthetic evolution',
                icon: '✨'
              },
              {
                title: 'Technology',
                description: 'Cutting-edge advancements in mobile computing',
                icon: '💡'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="card p-6 text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container-width">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-12 gradient-text"
          >
            Evolution Timeline
          </motion.h2>
          <div className="space-y-8">
            {[
              {
                year: '2007',
                title: 'iPhone (1st Generation)',
                description: 'The original iPhone introduced the world to touch-based smartphones'
              },
              {
                year: '2010',
                title: 'iPhone 4',
                description: 'Retina display and revolutionary glass design'
              },
              {
                year: '2017',
                title: 'iPhone X',
                description: 'Face ID and edge-to-edge display'
              },
              {
                year: '2023',
                title: 'iPhone 15 Pro',
                description: 'Titanium design and advanced camera system'
              }
            ].map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass p-6 rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-[#007AFF]">{item.year}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#007AFF] to-[#5856D6] text-white">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Explore More?</h2>
            <p className="text-lg mb-8">
              Dive deeper into the world of iPhone innovation and discover what makes each model unique
            </p>
            <div className="button-group justify-center">
              <button className="btn bg-white text-[#007AFF] hover:bg-gray-100">
                Learn More
              </button>
              <button className="btn border-2 border-white text-white hover:bg-white/10">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default App 