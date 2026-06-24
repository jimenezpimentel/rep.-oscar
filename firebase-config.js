// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKuyXONF5HtL3SsDKT0jcal-66XM36dT8",
  authDomain: "revista-digital-2edd3.firebaseapp.com",
  projectId: "revista-digital-2edd3",
  storageBucket: "revista-digital-2edd3.firebasestorage.app",
  messagingSenderId: "807479006879",
  appId: "1:807479006879:web:83914820c44fe3b344b4aa",
  measurementId: "G-J3TBDHCDCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);