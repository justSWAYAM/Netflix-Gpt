// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBelZKWFPV4n_gLsN2Hy-OOWm-qGSnt5Ho",
  authDomain: "netflix-gpt-d47b8.firebaseapp.com",
  projectId: "netflix-gpt-d47b8",
  storageBucket: "netflix-gpt-d47b8.appspot.com",
  messagingSenderId: "644760387249",
  appId: "1:644760387249:web:98502b6f64f960be6aec90",
  measurementId: "G-WXRT3DJ63H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);