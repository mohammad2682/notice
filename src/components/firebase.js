import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase with your project credentials
const firebaseConfig = {
  apiKey: "AIzaSyCzrtBqpcsx37h7os8bQ9-u5McFJHoHBR4",
  authDomain: "notice-99082.firebaseapp.com",
  projectId: "notice-99082",
  storageBucket: "notice-99082.appspot.com",
  messagingSenderId: "428488427055",
  appId: "1:428488427055:web:059e27981823a56ce028da"
};

firebase.initializeApp(firebaseConfig);

// Create a reference to your Firebase database
const databaseRef = firebase.database().ref();

export default firebase;
export { databaseRef };