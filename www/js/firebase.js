// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeCyV7j7CEGwpbs2d1Pt9oonClU4pf2Zw",
    authDomain: "historyapp-d9a45.firebaseapp.com",
    projectId: "historyapp-d9a45",
    storageBucket: "historyapp-d9a45.appspot.com",
    messagingSenderId: "805729295626",
    appId: "1:805729295626:web:b551b58e2d0244518daef3",
    measurementId: "G-416KGZ52XM"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
