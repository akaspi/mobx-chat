import { observable, action } from 'mobx';
import { loginWithGoogle, logout } from '../api/authAPI';

class AuthStore {
    @observable uid;
    @observable photoURL;

    @action login = () => {
        loginWithGoogle()
            .then(user => {
                this.uid = user.uid;
                this.photoURL = user.photoURL;
            });
    };

    @action signOut = () => {
      logout().then(() => {
          this.uid = null;
          this.photoURL = user.photoURL;
      });
    };
}

const authStore = new AuthStore();

window.authStore = authStore;

export default authStore;
