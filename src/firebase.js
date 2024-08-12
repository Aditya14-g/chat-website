// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYkDSYP5xcFOLwuMoNRu9LH8IljVt9kTQ",
  authDomain: "chat-6ca61.firebaseapp.com",
  projectId: "chat-6ca61",
  storageBucket: "chat-6ca61.appspot.com",
  messagingSenderId: "307286585677",
  appId: "1:307286585677:web:fb2a7ec80b9a96b714c704",
  measurementId: "G-1G89XV42RD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);