// firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase config object from Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyDla9e3tLkauAEnnAhS69GxHkdMJRXDVeU",
  authDomain: "ehsdebatewebsite.firebaseapp.com",
  projectId: "ehsdebatewebsite",
  storageBucket: "ehsdebatewebsite.firebasestorage.app",
  messagingSenderId: "195763757352",
  appId: "1:195763757352:web:1958ecd1838390887b301d",
  measurementId: "G-J8DJRJLNT2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and set up Google provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };
