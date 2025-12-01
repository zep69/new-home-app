// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAE9vmEVLUqptzi5G7dZnoQiPsUSeMWFl8",
  authDomain: "home-app-8d3e6.firebaseapp.com",
  projectId: "home-app-8d3e6",
  storageBucket: "home-app-8d3e6.firebasestorage.app",
  messagingSenderId: "49460059260",
  appId: "1:49460059260:web:92000d18db7b8e819cbdf9",
  measurementId: "G-1YHHS2MF5J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


export{ analytics, auth, db }
