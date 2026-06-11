import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBHc5-MNfu8EUZYTJVwCfN32_SvSKzRHRc",
  authDomain: "restaurant-01-ee661.firebaseapp.com",
  projectId: "restaurant-01-ee661",
  storageBucket: "restaurant-01-ee661.firebasestorage.app",
  messagingSenderId: "574586593730",
  appId: "1:574586593730:web:e5c3ccb4663f1f39aef65b",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app, "default");
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();