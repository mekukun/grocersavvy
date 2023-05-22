// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Constants from "expo-constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: Constants.manifest?.extra?.FIREBASE_APIKEY,
  authDomain: Constants.manifest?.extra?.FIREBASE_AUTHDOM,
  projectId: Constants.manifest?.extra?.FIREBASE_PROJECTID,
  storageBucket: Constants.manifest?.extra?.FIREBASE_STORAGEBUC,
  messagingSenderId: Constants.manifest?.extra?.FIREBASE_MESSENDERID,
  appId: Constants.manifest?.extra?.FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
