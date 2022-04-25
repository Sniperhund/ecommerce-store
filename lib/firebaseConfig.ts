import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiVIzyxeElenpLP4NoGeMrGTAOQwPzsvI",
  authDomain: "website-5ccaf.firebaseapp.com",
  projectId: "website-5ccaf",
  storageBucket: "website-5ccaf.appspot.com",
  messagingSenderId: "95462517736",
  appId: "1:95462517736:web:42c29438f54ea98ba9125d",
  measurementId: "G-1E1N7YHVQ0"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);