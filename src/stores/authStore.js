import { observable, action } from 'mobx';

class AuthStore {
    @observable uid;

    @action setMe = uid => {
      this.uid = uid;
    }
}

const authStore = new AuthStore();

export default authStore;
