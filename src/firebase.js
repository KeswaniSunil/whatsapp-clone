import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBE041JijSx2aQ5fPQibS5RQ_SuHaLK8yE",
    authDomain: "whatsapp-clone-8b730.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-8b730.firebaseio.com",
    projectId: "whatsapp-clone-8b730",
    storageBucket: "whatsapp-clone-8b730.appspot.com",
    messagingSenderId: "573454570674",
    appId: "1:573454570674:web:371d6cd558e754745e65ab",
    measurementId: "G-WDVL3ENT4Z"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore(); 
  const auth=firebase.auth();
  //for google login:-
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;