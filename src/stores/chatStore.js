import { observable, action } from 'mobx';
import { listenToMessages } from '../api/chatAPI';

class Message {
    @observable text;
    @observable uid;
    @observable userName;
    @observable photoURL;
    @observable time;

    constructor(text, uid, userName, photoURL, time) {
        this.text = text;
        this.uid = uid;
        this.userName = userName;
        this.photoURL = photoURL;
        this.time = time;
    }
}

class ChatStore {

    @observable messages;

    constructor() {
        this.messages = [];
        listenToMessages(this.onMessage);
    }

    @action onMessage = ({ text, userName, photoURL, uid, time }) => {
        this.messages.push(new Message(text, uid, userName, photoURL, time));
    };

    @action sendMessage = (uid, userName, photoUrl, text) => {
        sendMessage(uid, userName, photoUrl, text);
    }
}

const chatStore = new ChatStore();
window.chatStore = chatStore;
export default chatStore;