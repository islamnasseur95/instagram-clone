
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDRaa2hs-Hj8xWA8ELgN3EdxU-SglTrKrg",
    authDomain: "instagram-clone-242bc.firebaseapp.com",
    projectId: "instagram-clone-242bc",
    storageBucket: "instagram-clone-242bc.appspot.com",
    messagingSenderId: "385381373552",
    appId: "1:385381373552:web:51889dd98b3452f10fc6b5",
    measurementId: "G-HMBVQSQMJB"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage};

