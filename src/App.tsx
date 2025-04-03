import { useState } from 'react'
import { iPhone } from './types'
import IPhoneGallery from './components/IPhoneGallery'
import { iPhoneData } from './data/iPhoneData'
import SimpleIPhoneGallery from './iPhoneGallery'

function App() {
  const [phones] = useState<iPhone[]>(iPhoneData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 dark:from-neutral-900 dark:to-neutral-800 text-black dark:text-white">
      <IPhoneGallery phones={phones} />
      <div className="py-10">
        <SimpleIPhoneGallery />
      </div>
    </div>
  )
}

export default App 