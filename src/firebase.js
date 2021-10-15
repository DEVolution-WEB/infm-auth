import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
	apiKey: "AIzaSyCpEvpxo8VHfs81oqDkLdGpKePR7niLF_o",
  	authDomain: "infm-773d8.firebaseapp.com",
  	projectId: "infm-773d8",
  	storageBucket: "infm-773d8.appspot.com",
  	messagingSenderId: "36573213521",
  	appId: "1:36573213521:web:a71cd5ab57d6a0e12cd970",
  	measurementId: "G-K9X8D7GMEX"
});

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const db = app.firestore();

export const auth = app.auth();
export { app, googleProvider, facebookProvider, db };
