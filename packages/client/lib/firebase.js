import * as Firebase from "firebase/app";
import { getAuth } from 'firebase/auth';

// Import the functions you need from the SDKs you need
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebase = Firebase;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6vm9tBLp_wisgCgC-O1KX2ypIwENT6-o",
    authDomain: "chatapp-1e218.firebaseapp.com",
    projectId: "chatapp-1e218",
    storageBucket: "chatapp-1e218.appspot.com",
    messagingSenderId: "425924426982",
    appId: "1:425924426982:web:4b206a8a368e761b460f27",
    measurementId: "G-83DM7VRWXB"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

