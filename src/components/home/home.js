import React from 'react';
import template from './home.rt';
import { observer, inject } from 'mobx-react';

import { loginWithGoogle } from '../../api/authAPI';

@observer class HomePage extends React.Component {    
  render() {
    return template.apply(this);
  }
}

export default HomePage;
