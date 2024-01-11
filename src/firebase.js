import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDbMETDqbKFvtbYLk7BAg7S5PPprzz45ac",
  authDomain: "clone-d6cd7.firebaseapp.com",
  databaseURL: "https://clone-d6cd7-default-rtdb.firebaseio.com",
  projectId: "clone-d6cd7",
  storageBucket: "clone-d6cd7.appspot.com",
  messagingSenderId: "337099543853",
  appId: "1:337099543853:web:8149f24a93881ed13c2fa4",
  measurementId: "G-JLXDCER2H9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };