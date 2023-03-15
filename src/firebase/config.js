import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNbQm_Fc_Yoko3sPdP1USjfZ0tsVJEGoQ",
    authDomain: "olx-clone-6b983.firebaseapp.com",
    projectId: "olx-clone-6b983",
    storageBucket: "olx-clone-6b983.appspot.com",
    messagingSenderId: "683397628236",
    appId: "1:683397628236:web:55a7c21822dedfba36cfe9",
    measurementId: "G-X7XZ5MSNHB"
};

export default firebase.initializeApp(firebaseConfig)