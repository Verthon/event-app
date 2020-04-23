import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Required for side-effects
import { DEV_CONFIG } from './db_config'
require("firebase/firestore");

// const devConfig = {
//   apiKey: process.env.REACT_APP_DEV_API_KEY,
//   authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
//   projectId: "event-app-90ab5",
//   storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
// };

// const prodConfig = {
//   apiKey: process.env.REACT_APP_PROD_API_KEY,
//   authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
//   projectId: "eventoo-production",
//   storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
// }

app.initializeApp(DEV_CONFIG)
export const db = app.firestore()
export const auth = app.auth()
//export const firebaseStorage = app.storage()
export const googleProvider = new app.auth.GoogleAuthProvider()
export const facebookProvider = new app.auth.FacebookAuthProvider()
export const twitterProvider = new app.auth.TwitterAuthProvider()
export const doSignInWithGoogle = () => auth.signInWithRedirect(googleProvider)
export const redirectResultGoogle = () => auth.getRedirectResult()
export const doSignWithGoogleCredentials = (credential: any) => auth.signInWithCredential(credential)
export const doSignInWithFacebook = () => auth.signInWithPopup(facebookProvider)
export const redirectResultFacebook = () => auth.getRedirectResult()
export const doSignWithFacebookCredentials = (credential: any) => auth.signInWithCredential(credential)
export const doSignOut = () => auth.signOut()
export const storage = app.storage;