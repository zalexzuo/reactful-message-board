import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// firebase config object which is use for connecting
// apiKey shouldn't public!
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINHSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

// connect firebase and app
const app = initializeApp(firebaseConfig);

// connect database
export const db = getFirestore(app);
