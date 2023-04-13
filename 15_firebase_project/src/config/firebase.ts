// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl9PGlTAkzN9kleSK5v8DOqDPZB_x9SlU",
  authDomain: "react-course-8002c.firebaseapp.com",
  projectId: "react-course-8002c",
  storageBucket: "react-course-8002c.appspot.com",
  messagingSenderId: "764713483705",
  appId: "1:764713483705:web:c10b86a37ae3f794ba0a68",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);