import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './assets/scss/styles.scss';
import store from './modules/redux/store';

const rootNode: any = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
