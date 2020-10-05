import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBY5DQQikGXXZnpZSXt9RUMMinHOZNjpao",
  authDomain: "bmc-making-51904.firebaseapp.com",
  databaseURL: "https://bmc-making-51904.firebaseio.com",
  projectId: "bmc-making-51904",
  storageBucket: "bmc-making-51904.appspot.com",
  messagingSenderId: "127622089510",
  appId: "1:127622089510:web:742180a050bd819609cfe7",
  measurementId: "G-F6PM9E0XPQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth, db};