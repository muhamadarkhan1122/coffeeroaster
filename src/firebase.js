// ======================================
// src/firebase.js
// ======================================

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB4qg8jUT4BHYw80VDkAqm8hnwI4hWTp30",
  authDomain: "cofferoaster-d3681.firebaseapp.com",
  databaseURL: "https://cofferoaster-d3681-default-rtdb.firebaseio.com",
  projectId: "cofferoaster-d3681",
  storageBucket: "cofferoaster-d3681.firebasestorage.app",
  messagingSenderId: "726913534545",
  appId: "1:726913534545:web:a321235af26962e6a60670",
  measurementId: "G-NJXYD5PKDP"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);