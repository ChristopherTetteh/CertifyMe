import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB-dFjM89Vrce-njnmP7WU1UQgILsmSAZQ",
  authDomain: "certifyme-3e2ac.firebaseapp.com",
  projectId: "certifyme-3e2ac",
  storageBucket: "certifyme-3e2ac.appspot.com",
  messagingSenderId: "495057801224",
  appId: "1:495057801224:web:a328e7e65660efd711c1bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)