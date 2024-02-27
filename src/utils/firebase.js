// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVcDnYT9IuUSyPNPQva3ILLHXfsptnUng",
  authDomain: "netflixgpt-7c43a.firebaseapp.com",
  projectId: "netflixgpt-7c43a",
  storageBucket: "netflixgpt-7c43a.appspot.com",
  messagingSenderId: "105775046626",
  appId: "1:105775046626:web:c91ec98d160c1aaba023bb",
  measurementId: "G-8ZKHR7CPCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
