import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDe-hBvYBwlPZVktf5iid-o3iGSppYstIg",
  authDomain: "bmc-making-ef9e5.firebaseapp.com",
  databaseURL: "https://bmc-making-ef9e5.firebaseio.com",
  projectId: "bmc-making-ef9e5",
  storageBucket: "bmc-making-ef9e5.appspot.com",
  messagingSenderId: "46775083778",
  appId: "1:46775083778:web:95de5d16ca4ce1b586581b",
  measurementId: "G-XEXVJNPSPT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth, db};