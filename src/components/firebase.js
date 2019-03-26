import React from 'react';
import firebase from 'firebase';
import {API_FIREBASE} from '../credentials';
// Required for side-effects
require("firebase/firestore");

export const FirebaseContext = React.createContext(null);

// Initialize Firebase
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: "event-app-90ab5",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};


firebase.initializeApp(config);


export default firebase.firestore();