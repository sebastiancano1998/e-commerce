// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: "AIzaSyBLXtDqnrTC8GYLJ-IjHK_lCzQnOvlROu0",
  authDomain: "react-e-commerce-bcba0.firebaseapp.com",
  projectId: "react-e-commerce-bcba0",
  storageBucket: "react-e-commerce-bcba0.appspot.com",
  messagingSenderId: "298336097928",
  appId: "1:298336097928:web:235efadcb1060f5792f13d"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

//Initialize realtime database
export const database = getFirestore(app)


