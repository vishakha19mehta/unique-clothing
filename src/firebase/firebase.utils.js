import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCRcGdZOW4QTOlG_EDax0VmyoFhoBGyo4M",
    authDomain: "unique-db-1087f.firebaseapp.com",
    databaseURL: "https://unique-db-1087f.firebaseio.com",
    projectId: "unique-db-1087f",
    storageBucket: "unique-db-1087f.appspot.com",
    messagingSenderId: "827501805283",
    appId: "1:827501805283:web:85fb2e9ab9cc89f12bcfd6",
    measurementId: "G-F72XTFFTDN"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

