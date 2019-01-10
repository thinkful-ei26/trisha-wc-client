import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import WhatsCooking from './components/WhatsCooking';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <WhatsCooking />
  </Provider>,
  document.getElementById('root')
);