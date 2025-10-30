// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxWzZvuFbyzrwpL3KuYkIiFMZbChg4MgM",
  authDomain: "otploginapp-f6702.firebaseapp.com",
  projectId: "otploginapp-f6702",
  storageBucket: "otploginapp-f6702.firebasestorage.app",
  messagingSenderId: "1053895473597",
  appId: "1:1053895473597:web:8139a7d286880ac97d3ad4",
  measurementId: "G-6EG8W7ZJHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);