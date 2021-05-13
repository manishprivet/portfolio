import firebase from "firebase/app";
import "firebase/firestore";
import { config as getConfig } from "firebase-functions";

const FIREBASE_API_KEY = getConfig().config.api_key as string;
const FIREBASE_AUTH_DOMAIN = getConfig().config.auth_domain as string;
const FIREBASE_DATABASE_URL = getConfig().config.database_url as string;
const FIREBASE_PROJECT_ID = getConfig().config.project_id as string;
const FIREBASE_STORAGE_BUCKET = getConfig().config.storage_bucket as string;
const FIREBASE_MESSAGING_SENDER_ID = getConfig().config.messaging_id as string;

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
