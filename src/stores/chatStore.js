import { observable, action, autorun } from 'mobx';
import { sendMessage, listenToMessages } from '../api/chatAPI';

class Message {
    @observable text;
    @observable uid;
    @observable photoURL;
    @observable time;

    constructor(text, uid, photoURL, time) {
        this.text = text;
        this.uid = uid;
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

    @action onMessage = ({ text, photoURL, uid, time }) => {
        this.messages.push(new Message(text, uid, photoURL, time));
    };

    @action sendMessage = (uid, photoUrl, text) => {
        sendMessage(uid, photoUrl, text);
    }
}

const chatStore = new ChatStore();
window.chatStore = chatStore;
export default chatStore;