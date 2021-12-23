import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';

firebase.initializeApp({
	apiKey: 'AIzaSyCv2XH5_SY3BXNrRj8cNkSRNvpYB-4Su_E',
	authDomain: 'kelly-modules.firebaseapp.com',
	projectId: 'kelly-modules',
	storageBucket: 'kelly-modules.appspot.com',
	messagingSenderId: '960680725795',
	appId: '1:960680725795:web:238805b1b2738a3e301096',
	measurementId: 'G-4DJ5EH5CFP',
});

firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
