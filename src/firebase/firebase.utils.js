import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config={
    apiKey: "AIzaSyDH6eMxFigvI2IFXiPZvLKrFQvrBWB2GYs",
    authDomain: "e-commerce-website-99c0d.firebaseapp.com",
    projectId: "e-commerce-website-99c0d",
    storageBucket: "e-commerce-website-99c0d.appspot.com",
    messagingSenderId: "591016392635",
    appId: "1:591016392635:web:0f63e7dbd10bda93a4f69e",
    measurementId: "G-M6XRBWZ75D"
  }

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  var provider=new firebase.auth.GoogleAuthProvider();

  export const signinwithgoogle=()=> auth.signInWithPopup(provider);

  export default firebase;