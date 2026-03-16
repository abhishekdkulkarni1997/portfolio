import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0AW_OBMjbG4isGLizqT0vhFb8Yu5Q3zo",
  authDomain: "portfolio-26709.firebaseapp.com",
  projectId: "portfolio-26709",
  storageBucket: "portfolio-26709.firebasestorage.app",
  messagingSenderId: "535742441601",
  appId: "1:535742441601:web:9b18b7db2a394410180580"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);




