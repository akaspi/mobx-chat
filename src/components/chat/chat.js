import React from 'react';
import template from './chat.rt';
import { observer } from 'mobx-react';

import store from '../../stores/store';

@observer class Chat extends React.Component {

  onKeyPress(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        store.chat.sendMessage(store.auth.uid, store.auth.userName, store.auth.photoURL, e.target.value);
        e.target.value = '';
      }
  }

  render() {
    return template.apply(this);
  }
}

export default Chat;
