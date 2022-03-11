import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import Layout from './components/Layout'

import store from './redux'
import App from './App';
import { BrowserRouter } from 'react-router-dom';



declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': any
    }
  }
}


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

