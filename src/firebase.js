import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1hbzTh728YYtWvLVAqDCmjQRXXEMehq0",
  authDomain: "discord-2-clone.firebaseapp.com",
  projectId: "discord-2-clone",
  storageBucket: "discord-2-clone.appspot.com",
  messagingSenderId: "851951203178",
  appId: "1:851951203178:web:a21559b3bc8d2c0d7d6b13"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };