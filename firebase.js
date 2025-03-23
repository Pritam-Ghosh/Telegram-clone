// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"; // Import Firestore functions
import { getStorage,ref, uploadBytes, getDownloadURL } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgsq8n8NCvua5pAg0KQE888IfnktcHOD8",
  authDomain: "telegram-clone-827ef.firebaseapp.com",
  projectId: "telegram-clone-827ef",
  storageBucket: "telegram-clone-827ef.firebasestorage.app",
  messagingSenderId: "347322577166",
  appId: "1:347322577166:web:6ac4a3ececf04664f7e75f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app); // Initialize Firestore
const storage = getStorage(app); // Initialize Storage

export {auth,provider,db, doc, setDoc, getDoc, storage, ref, uploadBytes, getDownloadURL} // Export the auth and provider objects