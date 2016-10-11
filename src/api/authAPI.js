import firebase from '../firebase';
import authStore from '../stores/authStore';

export function fetchLoggedInUser() {
  firebase.auth().getRedirectResult()
    .then(result => {
      if (result.user) {
        authStore.setMe(result.user.uid);
      } else {
        const onAuthStateChange = user => {
          firebase.auth().removeAuthTokenListener(onAuthStateChange);
          authStore.setMe(user.uid);
        };
        firebase.auth().onAuthStateChanged(onAuthStateChange);
      }
    })
    .catch(reject);
}

export function loginWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    authStore.setMe(result.user.uid);
  }).catch(function(error) {
    console.log(error);
  });
}

export function logout() {
  firebase.auth().signOut()
    .then(() => authStore.setMe(null));
}
