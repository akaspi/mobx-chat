import { observable, action, autorun } from 'mobx';
import { sendMessage, listenToMessages } from '../api/chatAPI';

class Message {
    @observable text;
    @observable uid;
    @observable time;

    constructor(text, uid, time) {
        this.text = text;
        this.uid = uid;
        this.time = time;
    }
}

class ChatStore {

    @observable messages;

    constructor() {
        this.messages = [];
        listenToMessages(this.onMessage);
    }

    @action onMessage = ({ text, uid, time }) => {
        this.messages.push(new Message(text, uid, time));
    };

    @action sendMessage = (uid, text) => {
        sendMessage(uid, text);
    }
}

const chatStore = new ChatStore();

export default chatStore;