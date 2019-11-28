import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB93WkITyfBYt6T2LbrNVW7bHlty84JiMY",
    authDomain: "ecommerce-react-d53ee.firebaseapp.com",
    databaseURL: "https://ecommerce-react-d53ee.firebaseio.com",
    projectId: "ecommerce-react-d53ee",
    storageBucket: "ecommerce-react-d53ee.appspot.com",
    messagingSenderId: "1081350750264",
    appId: "1:1081350750264:web:6b80421b402ea83ea4e6cd"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;