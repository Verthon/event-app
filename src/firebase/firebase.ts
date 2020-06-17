import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Required for side-effects
// import { DEV_CONFIG } from './db_config'
require("firebase/firestore");

let config = null

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  config = {
    apiKey: process.env.REACT_APP_DEV_FIRESTORE_API_KEY,
    authDomain: process.env.REACT_APP_DEV_FIRESTORE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_DEV_FIRESTORE_PROJECT_ID,
    databaseURL: process.env.REACT_APP_DEV_FIRESTORE_DATABASE_URL,
    appId: process.env.REACT_APP_DEV_FIRESTORE_APP_ID
  }
} else {
  config = {
    apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
    authDomain: process.env.REACT_APP_FIRESTORE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIRESTORE_PROJECT_ID,
    databaseURL: process.env.REACT_APP_FIRESTORE_DATABASE_URL,
    appId: process.env.REACT_APP_FIRESTORE_APP_ID
  }
}

app.initializeApp(config)
export const db = app.firestore()
export const auth = app.auth()
//export const firebaseStorage = app.storage()
export const googleProvider = new app.auth.GoogleAuthProvider()
export const facebookProvider = new app.auth.FacebookAuthProvider()
export const twitterProvider = new app.auth.TwitterAuthProvider()
export const doSignInWithGoogle = () => auth.signInWithRedirect(googleProvider)
export const redirectResultGoogle = () => auth.getRedirectResult()
export const doSignWithGoogleCredentials = (credential) => auth.signInWithCredential(credential)
export const doSignInWithFacebook = () => auth.signInWithPopup(facebookProvider)
export const redirectResultFacebook = () => auth.getRedirectResult()
export const doSignWithFacebookCredentials = (credential) => auth.signInWithCredential(credential)
export const doSignOut = () => auth.signOut()
export const storage = app.storage;