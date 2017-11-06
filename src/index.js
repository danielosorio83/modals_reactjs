import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
export const store = createStoreWithMiddleware(reducers);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
