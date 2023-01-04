
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAKsXMiwZrjLsxYCTd468x5dykH-m7nkMc",
  authDomain: "neusmart-9f4f1.firebaseapp.com",
  projectId: "neusmart-9f4f1",
  storageBucket: "neusmart-9f4f1.appspot.com",
  messagingSenderId: "5968108934",
  appId: "1:5968108934:web:33c51ce9939271e42ee007"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)


export default app;