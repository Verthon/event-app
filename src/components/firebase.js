import firebase from 'firebase';
import {API_FIREBASE} from '../credentials';
require("firebase/firestore");

const {key, auth, db, id, storage, messaging} = API_FIREBASE;
// Initialize Firebase
const config = {
  apiKey: key,
  authDomain: auth,
  databaseURL: db,
  projectId: id,
  storageBucket: storage,
  messagingSenderId: messaging
};
firebase.initializeApp(config);

export default firebase.firestore();