import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyALmGFKlJA_sX1ulX6ZLFmOpYsDUy03bZM",
  authDomain: "clone-16a49.firebaseapp.com",
  databaseURL: "https://clone-16a49.firebaseio.com",
  projectId: "clone-16a49",
  storageBucket: "clone-16a49.appspot.com",
  messagingSenderId: "901907250623",
  appId: "1:901907250623:web:b61e9206a0489e4010350a",
  measurementId: "G-GQSDC4VX1N"
      
});
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth, db};
  