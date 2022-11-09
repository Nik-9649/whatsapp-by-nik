// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiZO9mINtfn5LEVDlhrdj4c0De3Gq2URo",
  authDomain: "whatsapp-by-nik.firebaseapp.com",
  projectId: "whatsapp-by-nik",
  storageBucket: "whatsapp-by-nik.appspot.com",
  messagingSenderId: "1087749845284",
  appId: "1:1087749845284:web:69d8b344679827f358c3b1",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { app, db, storage, auth, provider };
