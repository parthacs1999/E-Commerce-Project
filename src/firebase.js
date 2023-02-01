
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDu5ZddwF2XppS9f0mOToYT5FYicG1eWnk",
    authDomain: "react-auth-65dde.firebaseapp.com",
    projectId: "react-auth-65dde",
    storageBucket: "react-auth-65dde.appspot.com",
    messagingSenderId: "370302045552",
    appId: "1:370302045552:web:0a3a015c2b5f05f6e513b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;