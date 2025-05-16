// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCqR-IsGKQX9iVuSeHO5axXeA7nyL2TqM",
  authDomain: "user-management-48aac.firebaseapp.com",
  projectId: "user-management-48aac",
  storageBucket: "user-management-48aac.firebasestorage.app",
  messagingSenderId: "702510538649",
  appId: "1:702510538649:web:be5b6ede40e29dd4cb7d08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
