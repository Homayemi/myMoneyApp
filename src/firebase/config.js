import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCoY9lFSxCRgzGGquYbZFfegcDSoYqI4TY",
    authDomain: "mymoney-5322a.firebaseapp.com",
    projectId: "mymoney-5322a",
    storageBucket: "mymoney-5322a.appspot.com",
    messagingSenderId: "754322933122",
    appId: "1:754322933122:web:b63d21bdf8f3e00b833b9b"
  }

  // init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }