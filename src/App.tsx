import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import PhoneTimeline from './components/PhoneTimeline'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'
import { iPhoneData } from './data/iPhoneData'
import { iPhone } from './types'
import { getCollection, addDocument, updateDocument, deleteDocument } from './firebase/services'

function App() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [phones, setPhones] = useState<iPhone[]>(iPhoneData);

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

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedYear(null);
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Hero onYearSelect={handleYearSelect} />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <SearchBar onSearch={handleSearch} />
        <PhoneTimeline 
          phones={filteredPhones} 
          years={years}
          onUpdatePhone={updatePhone}
          onDeletePhone={deletePhone}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App 