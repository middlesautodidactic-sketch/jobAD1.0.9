// src/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAXayBBLVSohNCIsnlWRq6rD0BUbW70MGk",
  authDomain: "events-666d6.firebaseapp.com",
  databaseURL: "https://events-666d6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "events-666d6",
  storageBucket: "events-666d6.firebasestorage.app",
  messagingSenderId: "589078390914",
  appId: "1:589078390914:web:480ce96137ffac835aac9b",
  measurementId: "G-97GD75S814"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { app, analytics, database, ref, get, child };
