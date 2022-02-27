import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDNkWy8-9fJ_kySsgfWI_xttLyq53g0wBo",
  authDomain: "faceclone-7108a.firebaseapp.com",
  projectId: "faceclone-7108a",
  storageBucket: "faceclone-7108a.appspot.com",
  messagingSenderId: "12655981992",
  appId: "1:12655981992:web:bc71217c976b8030dbd99d",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;