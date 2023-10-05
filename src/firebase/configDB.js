import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyA_SN-J2HqV72er9Ia36hgvmuytVEJXwOE",
    authDomain: "solent-student-social-app.firebaseapp.com",
    projectId: "solent-student-social-app",
    storageBucket: "solent-student-social-app.appspot.com",
    messagingSenderId: "493447253524",
    appId: "1:493447253524:web:ea740aa04ba35d25366101"
};

// init firebase

const app = initializeApp(firebaseConfig);

// init services


const db = getFirestore(app);


export { db };