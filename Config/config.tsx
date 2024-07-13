// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZoljqa4qMz3KDnKDOM9hXzzvdIJhp-8M",
  authDomain: "evaluacion-12345.firebaseapp.com",
  projectId: "evaluacion-12345",
  storageBucket: "evaluacion-12345.appspot.com",
  messagingSenderId: "559506235637",
  appId: "1:559506235637:web:4ec9c07a308895754925bc",
  measurementId: "G-2PK8MRWMLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);