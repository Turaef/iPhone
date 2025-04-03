import { useState } from 'react'
import { iPhone } from './types'
import IPhoneGallery from './components/IPhoneGallery'
import { iPhoneData } from './data/iPhoneData'
import SimpleIPhoneGallery from './iPhoneGallery'

function App() {
  const [phones] = useState<iPhone[]>(iPhoneData);

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-black dark:text-white">
      <IPhoneGallery phones={phones} />
      <div className="py-10">
        <SimpleIPhoneGallery />
      </div>
    </div>
  )
}

export default App 