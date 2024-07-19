// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDC67o7TgPMM8Xumlr7ttJ61Dd64uY9gzg",
    authDomain: "foodie-d3c81.firebaseapp.com",
    projectId: "foodie-d3c81",
    storageBucket: "foodie-d3c81.appspot.com",
    messagingSenderId: "927368017024",
    appId: "1:927368017024:web:145cba1d18699aec0ca265",
    measurementId: "G-GE5MLBZJVC"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();