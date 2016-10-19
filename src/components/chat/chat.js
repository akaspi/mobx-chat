import React from 'react';
import template from './chat.rt';
import { observer } from 'mobx-react';

import chatStore from '../../stores/chatStore';
import authStore from '../../stores/authStore';

@observer class Chat extends React.Component {

  onKeyPress(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        chatStore.sendMessage(authStore.uid, authStore.photoURL, e.target.value);
        e.target.value = '';
      }
  }

  render() {
    return template.apply(this);
  }
}

export default Chat;
