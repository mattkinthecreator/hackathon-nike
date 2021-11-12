import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBuwJCJptFKhAWL1zEPsaFUOMrp_PgKDcw',
  authDomain: 'nike-project-ac024.firebaseapp.com',
  projectId: 'nike-project-ac024',
  storageBucket: 'nike-project-ac024.appspot.com',
  messagingSenderId: '487311598612',
  appId: '1:487311598612:web:331b3198789d4fa28c7301',
}

const fire = firebase.initializeApp(firebaseConfig)

export default fire
