// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8siU624CbtKYSv5bCEzuRRYHfaOlLGUU",
  authDomain: "vintage-lab-auth.firebaseapp.com",
  projectId: "vintage-lab-auth",
  storageBucket: "vintage-lab-auth.appspot.com",
  messagingSenderId: "628642651247",
  appId: "1:628642651247:web:65b804fe3edc04582b419a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);