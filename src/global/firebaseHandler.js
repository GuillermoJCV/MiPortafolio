import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig ={
    apiKey: "AIzaSyByCciZcnEDoFDszfVfY_Ydz71jOsNTJDM",
    authDomain: "reactwithvite.firebaseapp.com",
    databaseURL: "https://reactwithvite-default-rtdb.firebaseio.com",
    projectId: "reactwithvite",
    storageBucket: "reactwithvite.appspot.com",
    messagingSenderId: "672517286883",
    appId: "1:672517286883:web:4a539973e14ebecdc0ced6"
}

const app = firebase.initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)