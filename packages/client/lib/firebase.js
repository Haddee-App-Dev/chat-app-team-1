import * as Firebase from "firebase/app";
import { initializeAuth } from 'firebase/auth';
import { getReactNativePersistence } from 'firebase/auth/react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { FIREBASE_API_KEY } from '@env';

// Import the functions you need from the SDKs you need
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log(FIREBASE_API_KEY);

const firebase = Firebase;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: "chatapp-1e218.firebaseapp.com",
    projectId: "chatapp-1e218",
    storageBucket: "chatapp-1e218.appspot.com",
    messagingSenderId: "425924426982",
    appId: "1:425924426982:web:4b206a8a368e761b460f27",
    measurementId: "G-83DM7VRWXB"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });

export { app, auth };

