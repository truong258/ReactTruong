// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBH_RS29HnWAYxAm3q2tQ55UgZhoxLVS2k",
  authDomain: "chat-b7fb3.firebaseapp.com",
  projectId: "chat-b7fb3",
  storageBucket: "chat-b7fb3.appspot.com",
  messagingSenderId: "493235975190",
  appId: "1:493235975190:web:c4f316f9ec1557e935b137",
  measurementId: "G-B2EHZKKB94",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
