import _ from 'lodash';
import React from 'react';
import template from './home.rt';
import { observer } from 'mobx-react';

import chatStore from '../../stores/chatStore';
import authStore from '../../stores/authStore';

@observer class HomePage extends React.Component {
  constructor(props) {
    super(props);
    _.bindAll(this);
  }

  onKeyPress(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        chatStore.sendMessage(authStore.uid, e.target.value);
        e.target.value = '';
      }
  }

  render() {
    return template.apply(this);
  }
}

export default HomePage;
