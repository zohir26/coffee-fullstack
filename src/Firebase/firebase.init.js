


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqp72gf_VW2WCUh_dKPOkO-c60iOldDRk",
  authDomain: "coffee-espresso-bcade.firebaseapp.com",
  projectId: "coffee-espresso-bcade",
  storageBucket: "coffee-espresso-bcade.firebasestorage.app",
  messagingSenderId: "740428238917",
  appId: "1:740428238917:web:11ec9056f05078f946d32c",
  measurementId: "G-XLPF0F8WZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
