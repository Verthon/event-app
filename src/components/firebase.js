import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBMbVRGr8oYXNDbPFb4wS0YT8OJTzwkWoQ",
  authDomain: "event-app-90ab5.firebaseapp.com",
  databaseURL: "https://event-app-90ab5.firebaseio.com",
  projectId: "event-app-90ab5",
  storageBucket: "event-app-90ab5.appspot.com",
  messagingSenderId: "523175825147"
};
firebase.initializeApp(config);

export default firebase;