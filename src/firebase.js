import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAVRbYgKxSVDIOsrfj9elBUjUAXlZfxwn4",
  authDomain: "istiak-todo.firebaseapp.com",
  databaseURL: "https://istiak-todo.firebaseio.com",
  projectId: "istiak-todo",
  storageBucket: "istiak-todo.appspot.com",
  messagingSenderId: "405365333736",
  appId: "1:405365333736:web:9ec204332b68a62a67f35d",
  measurementId: "G-4Z41Z0KE7S",
});

const db = firebaseApp.firestore();

export default db;
