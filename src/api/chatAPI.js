import firebase from '../firebase';

// export function createChat(name, onMessage) {
//   const chatsRef = firebase.database().ref('chats');
//   const newChatRef = chatsRef.push();
//
//   newChatRef.set({ name });
//
//   newChatRef.ref('messages').on('value', snapshot => onMessage(snapshot.val()));
// }
//
// export function removeChat(chatId) {
//   const chatRef = firebase.database().ref(`chats/${chatId}`);
//   chatRef.off('value');
//   chatRef.remove();
// }

let onMessageReceived;

export function sendMessage(uid, userName, photoURL, text) {
  const chatRef = firebase.database().ref('chat');
  const messageRef = chatRef.push();

  messageRef.set({ uid, userName, photoURL, text, time: Date.now() });
}

export function listenToMessages(onMessage) {
  const chatRef = firebase.database().ref('chat');

  onMessageReceived = snapshot => onMessage(snapshot.val());

  chatRef.on('child_added', onMessageReceived);
}

export function stopListeningToMessages() {
  const chatRef = firebase.database().ref('chat');

  chatRef.off('child_added', onMessageReceived);
}