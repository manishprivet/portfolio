import firebase from "firebase/app";
import "firebase/firestore";

const FIREBASE_API_KEY = "AIzaSyAjK9HyAAsWzctR2JpXL-2H9-6Alj5EamM";
const FIREBASE_AUTH_DOMAIN = "portfolio-3af99.firebaseapp.com";
const FIREBASE_DATABASE_URL = "https://portfolio-3af99.firebaseio.com";
const FIREBASE_PROJECT_ID = "portfolio-3af99";
const FIREBASE_STORAGE_BUCKET = "portfolio-3af99.appspot.com";
const FIREBASE_MESSAGING_SENDER_ID = "99757100461";

// Initialize Firebase
const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

const db = firebase.firestore();

export { db };
