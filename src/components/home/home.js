import _ from 'lodash';
import React from 'react';
import template from './home.rt';
import { observer } from 'mobx-react';

const HomePage = observer(() => template.apply(this));

export default HomePage;
