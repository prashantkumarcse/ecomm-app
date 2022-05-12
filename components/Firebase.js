import firebase from 'firebase/app'
require('firebase/auth')
import 'firebase/firestore';
import {GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDGbf_YbEolVhZ_nlKHsq6xUqCT6lTNodM",
    authDomain: "ecommerceapp-bc420.firebaseapp.com",
    databaseURL: "https://ecommerceapp-bc420-default-rtdb.firebaseio.com",
    projectId: "ecommerceapp-bc420",
    storageBucket: "ecommerceapp-bc420.appspot.com",
    messagingSenderId: "539255560580",
    appId: "1:539255560580:web:9c757fe85a6f05f0a565d1",
    measurementId: "G-XW5DGPNLCV"
  };
  var firebaseApp = null;
  if (!firebase.apps.length) {
    firebaseApp = firebase.initializeApp(firebaseConfig);
 }else {
   firebaseApp = firebase.app(); // if already initialized, use that one
 }
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  var provider = new firebase.auth.GoogleAuthProvider();
  
  export {db, auth, provider};