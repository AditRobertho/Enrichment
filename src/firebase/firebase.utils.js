// import firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
// import 'firebase/firestore';
import 'firebase/compat/firestore';
// import 'firebase/auth';
import 'firebase/compat/auth';

const config = {

    apiKey: "AIzaSyDPcmHCyxUlyKQo2Zpb26V2XB6UlAtKAZU",
  
    authDomain: "database-enrichment.firebaseapp.com",
  
    projectId: "database-enrichment",
  
    storageBucket: "database-enrichment.appspot.com",
  
    messagingSenderId: "68230546874",
  
    appId: "1:68230546874:web:0f012946c9f972575ec983",
  
    measurementId: "G-JE33WSE7Z7"
  
  };
  

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;