import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAZnRmfq0Ctt9DDV46w5mDYdTrn4ej8dw",
  authDomain: "e-commerce-reactjs-c1a59.firebaseapp.com",
  projectId: "e-commerce-reactjs-c1a59",
  storageBucket: "e-commerce-reactjs-c1a59.appspot.com",
  messagingSenderId: "653028765906",
  appId: "1:653028765906:web:3b60e685b25f14673d7d0b",
  measurementId: "G-ZERL0EWE3P"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

