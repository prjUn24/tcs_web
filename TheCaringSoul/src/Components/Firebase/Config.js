
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAIDvhgKPJ2n1ImnkZZaKAbeMPJ2nRYqzc",
  authDomain: "caringsouls-62376.firebaseapp.com",
  projectId: "caringsouls-62376",
  storageBucket: "caringsouls-62376.firebasestorage.app",
  messagingSenderId: "801398051846",
  appId: "1:801398051846:web:8c222c5a1526aaa85a9f87",
  measurementId: "G-PSEV2H8V04"
};


export const app = initializeApp(firebaseConfig);
