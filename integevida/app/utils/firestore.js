// utils/firestore.js
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD_ZjqS2xSBE8jT5oFXz7Fq2BO-EKS4oho",
  authDomain: "tid42m-47874.firebaseapp.com",
  projectId: "tid42m-47874",
  storageBucket: "tid42m-47874.appspot.com",
  messagingSenderId: "557356196380",
  appId: "1:557356196380:web:38fb4ae2a515a593f0b5d9",
  measurementId: "G-C9BNHD9GVR"
};

// Inicializar Firebase solo si no ha sido inicializado
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
