// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "iphone-gsmarena.firebaseapp.com",
  projectId: "iphone-gsmarena",
  storageBucket: "iphone-gsmarena.appspot.com",
  messagingSenderId: "595389440577",
  appId: "1:595389440577:web:...",
  measurementId: "G-..."
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app; 