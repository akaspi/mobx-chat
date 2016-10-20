import firebase from '../firebase';
import { stopListeningToMessages } from './chatAPI';

// export function fetchLoggedInUser() {
//   return new Promise((resolve, reject) => {
//     firebase.auth().getRedirectResult()
//       .then(result => {
//         if (result.user) {
//           resolve(result.user.uid);
//         } else {
//           const onAuthStateChange = user => {
//             firebase.auth().removeAuthTokenListener(onAuthStateChange);
//             resolve(user && user.uid);
//           };
//           firebase.auth().onAuthStateChanged(onAuthStateChange);
//         }
//       })
//       .catch(reject);
//   })
// }

const getChatUser = (user) => {
  return {
    uid: user.uid,
    photoURL: user.photoURL,
    userName: user.displayName
  }
};

export function loginWithGoogle() {
  return new Promise((resolve, reject) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      resolve(getChatUser(result.user));
    }).catch(reject);
  })
}

export function getLoggedInUser() {
  return new Promise((resolve, reject) => {
    const onAuthStateChange = user => {
      firebase.auth().removeAuthTokenListener(onAuthStateChange);
      resolve(getChatUser(user));
    };
    firebase.auth().onAuthStateChanged(onAuthStateChange);
  });
}

export function logout() {
  stopListeningToMessages();

  return firebase.auth().signOut();
}