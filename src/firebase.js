import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDFcq9pdFsqJZ2P1EPC0AdAVgIePkcj_58",
  authDomain: "mobx-chat.firebaseapp.com",
  databaseURL: "https://mobx-chat.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "882187299679"
};

firebase.initializeApp(config);
window.db = firebase.database();
export default firebase;
