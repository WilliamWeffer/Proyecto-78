import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDt3LL0mMOtIFh0uLvagvnus6mVdFXfzjA",
    authDomain: "bici-91393.firebaseapp.com",
    projectId: "bici-91393",
    storageBucket: "bici-91393.appspot.com",
    messagingSenderId: "167311434157",
    appId: "1:167311434157:web:483ddcf8d594aeae120124"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


