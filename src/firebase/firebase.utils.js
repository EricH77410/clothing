import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCzE66qyGcHHjljbqJ5rVeN87HLZJaX-VI",
  authDomain: "crown-36dbc.firebaseapp.com",
  databaseURL: "https://crown-36dbc.firebaseio.com",
  projectId: "crown-36dbc",
  storageBucket: "crown-36dbc.appspot.com",
  messagingSenderId: "220116711219",
  appId: "1:220116711219:web:15a75d916c3330c0a43046"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account '})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase