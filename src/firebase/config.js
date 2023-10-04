import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA_SN-J2HqV72er9Ia36hgvmuytVEJXwOE",
    authDomain: "solent-student-social-app.firebaseapp.com",
    projectId: "solent-student-social-app",
    storageBucket: "solent-student-social-app.appspot.com",
    messagingSenderId: "493447253524",
    appId: "1:493447253524:web:ea740aa04ba35d25366101"
};

// init firebase

firebase.initializeApp(firebaseConfig);

// init services

const appFirestore = firebase.firestore();
const emailAuth = firebase.auth();


export { appFirestore, emailAuth };