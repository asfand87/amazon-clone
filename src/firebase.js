import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAQe3Q6nFIP8NNeAx7rOa0pd85HjEtjurU",
        authDomain: "clone-51a23.firebaseapp.com",
        databaseURL: "https://clone-51a23.firebaseio.com",
        projectId: "clone-51a23",
        storageBucket: "clone-51a23.appspot.com",
        messagingSenderId: "45427912436",
        appId: "1:45427912436:web:b397888e3aac3287ffb8a1",
        measurementId: "G-ZJ05SMXHKH"
      
});
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth, db};
  