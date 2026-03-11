import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBpJhLob1qfofj_KM5_o4M8D4HRLZmzY4s",
    authDomain: "portfolio-2dfd0.firebaseapp.com",
    projectId: "portfolio-2dfd0",
    storageBucket: "portfolio-2dfd0.firebasestorage.app",
    messagingSenderId: "484499494406",
    appId: "1:484499494406:web:ff8b1ba729f4594e021587"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
