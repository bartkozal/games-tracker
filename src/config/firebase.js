import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export const auth = firebase.auth();
