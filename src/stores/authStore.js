import { observable, action } from 'mobx';
import { loginWithGoogle, logout } from '../api/authAPI';

class AuthStore {
    @observable uid;

    @action login = () => {
      loginWithGoogle().then(uid => this.uid = uid);
    };

    @action signOut = () => {
      logout().then(() => this.uid = null);
    };
}

const authStore = new AuthStore();

window.authStore = authStore;

export default authStore;
