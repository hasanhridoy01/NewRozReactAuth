// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzVE3Ftq_iajZjWuDJwAgEMdpF3CnlCfw",
  authDomain: "login-auth-5710e.firebaseapp.com",
  projectId: "login-auth-5710e",
  storageBucket: "login-auth-5710e.appspot.com",
  messagingSenderId: "368510637112",
  appId: "1:368510637112:web:5d583cdce090b5c4fc02cd",
  measurementId: "G-4NK531Y6YZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;