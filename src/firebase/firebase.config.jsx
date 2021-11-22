// import firebase from 'firebase';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBU-tAln8UsyxF20CLtUXfON7Z_TtG1uuU",
    authDomain: "assignment-eabaa.firebaseapp.com",
    projectId: "assignment-eabaa",
    storageBucket: "assignment-eabaa.appspot.com",
    messagingSenderId: "1010854193923",
    appId: "1:1010854193923:web:01ba4b9c6e4f0982dd1736",
    measurementId: "G-E7VX8L288Z"
  };

  // Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();