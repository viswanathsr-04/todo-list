// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: `${import.meta.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: "todo-list-ec4cb.firebaseapp.com",
    projectId: "todo-list-ec4cb",
    storageBucket: "todo-list-ec4cb.appspot.com",
    messagingSenderId: "1068513819723",
    appId: "1:1068513819723:web:2e52ff6e4f1ff7fe9ce1ce",
    measurementId: "G-K8T8XLQJX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);