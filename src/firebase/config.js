// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVegew2pHQ90EjpFYJr3EpWZIHVzKrUFA",
  authDomain: "nonforsit-5530c.firebaseapp.com",
  projectId: "nonforsit-5530c",
  storageBucket: "nonforsit-5530c.appspot.com",
  messagingSenderId: "521335370734",
  appId: "1:521335370734:web:da40802039076fda0dd4ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)