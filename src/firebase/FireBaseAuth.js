// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAyUiGdeNV_v6nYSbLpFEMADFCZuIQtd0",
  authDomain: "eshop-ad02f.firebaseapp.com",
  projectId: "eshop-ad02f",
  storageBucket: "eshop-ad02f.appspot.com",
  messagingSenderId: "405734625101",
  appId: "1:405734625101:web:e1e26a7e038f0770d53104"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
const db=getFirestore(app);


export {app,auth,db};