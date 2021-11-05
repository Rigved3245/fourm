import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 
    apiKey: "AIzaSyCVvS7s__SH3SjvZUogJI_R-hJb_bOtzWA",
    authDomain: "forum-4264b.firebaseapp.com",
    projectId: "forum-4264b",
    storageBucket: "forum-4264b.appspot.com",
    messagingSenderId: "116365569529",
    appId: "1:116365569529:web:1a4ad0c2717c08262e2128"

};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

