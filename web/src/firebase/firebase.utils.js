import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBxI0azxfYEMl_KyEeC7ydkKSQ-vyP2u_s",
  authDomain: "ecommerce-db-dfe34.firebaseapp.com",
  databaseURL: "https://ecommerce-db-dfe34.firebaseio.com",
  projectId: "ecommerce-db-dfe34",
  storageBucket: "ecommerce-db-dfe34.appspot.com",
  messagingSenderId: "619538454143",
  appId: "1:619538454143:web:4cc952c04cdfc06a6e114a"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
