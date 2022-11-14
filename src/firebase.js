import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDt1yL_p1yx25wfI1mkC5EQeHv2FYGs0rg",
    authDomain: "disneyplus-clone-d0e94.firebaseapp.com",
    projectId: "disneyplus-clone-d0e94",
    storageBucket: "disneyplus-clone-d0e94.appspot.com",
    messagingSenderId: "66726969548",
    appId: "1:66726969548:web:72e3ea3b1f0cc2ac20c269",
    measurementId: "G-J0E1XC0N7R"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;