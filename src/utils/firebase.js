// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDWsscBk7ZpNu4u5RaQwV8szlq-nTNTn4",
  authDomain: "netflixgpt-4e7c4.firebaseapp.com",
  projectId: "netflixgpt-4e7c4",
  storageBucket: "netflixgpt-4e7c4.appspot.com",
  messagingSenderId: "12957655537",
  appId: "1:12957655537:web:232f1aec727acb7d792450",
  measurementId: "G-1L8X5XE550",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
