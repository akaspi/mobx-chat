import { observable, action } from 'mobx';
import { loginWithGoogle, getLoggedInUser } from '../api/authAPI';

class AuthStore {
    @observable uid;
    @observable photoURL;
    @observable userName;

    constructor () {
        getLoggedInUser().then(this.onLogin)
    }

    @action onLogin = (user) => {
        if (!user) {
            return;
        }

        this.uid = user.uid;
        this.photoURL = user.photoURL;
        this.userName = user.userName;
    };

    login = () => {
        loginWithGoogle()
            .then(this.onLogin);
    };
}

const authStore = new AuthStore();

window.authStore = authStore;

export default authStore;
