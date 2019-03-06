import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import WhatsCooking from './components/WhatsCooking';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <WhatsCooking />
    </Provider>
  </Router>,
  document.getElementById('root')
);