import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDZytrpEHRw7Jc9Q5xPq2C2DXC1OsEaUQI',
  authDomain: 'tidytown-e7ea7.firebaseapp.com',
  projectId: 'tidytown-e7ea7',
  storageBucket: 'tidytown-e7ea7.appspot.com',
  messagingSenderId: '287106978238',
  appId: '1:287106978238:web:a0c972284466f131cc69ef',
  measurementId: 'G-KWJMWLHZ5W',
}

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db = app.firestore()

export default db
