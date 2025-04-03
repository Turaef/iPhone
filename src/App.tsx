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
import IPhoneGallery from './components/IPhoneGallery'

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <IPhoneGallery />
    </div>
  )
}

export default App 