import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCYAWuFD9aXepNkQioH1N_1Ck9rJsr5yEM",
    authDomain: "crwn-db-68c06.firebaseapp.com",
    databaseURL: "https://crwn-db-68c06.firebaseio.com",
    projectId: "crwn-db-68c06",
    storageBucket: "crwn-db-68c06.appspot.com",
    messagingSenderId: "757565748674",
    appId: "1:757565748674:web:658fb4ba7285298d7bd25b",
    measurementId: "G-6GPB7ZC5JS"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;