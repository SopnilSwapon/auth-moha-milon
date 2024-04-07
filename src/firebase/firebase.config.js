// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALG_VrRSl01Sj-dPLwc1yKnbD3TwBfbIw",
  authDomain: "auth-moha-milon-9ad3f.firebaseapp.com",
  projectId: "auth-moha-milon-9ad3f",
  storageBucket: "auth-moha-milon-9ad3f.appspot.com",
  messagingSenderId: "413417958568",
  appId: "1:413417958568:web:ab630861a9c5dde46b669d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;