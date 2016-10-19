import firebase from '../firebase';

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

export function loginWithGoogle() {
  return new Promise((resolve, reject) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      resolve(result.user.uid);
    }).catch(reject);
  })
}

export function logout() {
  return firebase.auth().signOut();    
}
