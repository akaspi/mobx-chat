import chatStore from './chatStore';
import authStore from './authStore';

const store = {
    chat: chatStore,
    auth: authStore
};

export default store;