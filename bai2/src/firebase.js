// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBH_RS29HnWAYxAm3q2tQ55UgZhoxLVS2k",
  authDomain: "chat-b7fb3.firebaseapp.com",
  projectId: "chat-b7fb3",
  storageBucket: "chat-b7fb3.appspot.com",
  messagingSenderId: "493235975190",
  appId: "1:493235975190:web:c4f316f9ec1557e935b137",
  measurementId: "G-B2EHZKKB94",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAznDZridOiiLH_ILGuxVENmHHci4lssgs",
//   authDomain: "chat-af002.firebaseapp.com",
//   projectId: "chat-af002",
//   storageBucket: "chat-af002.appspot.com",
//   messagingSenderId: "822780956359",
//   appId: "1:822780956359:web:bc18d16bec1a2b6497b8e2",
//   measurementId: "G-KPWNYDESJY"
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
