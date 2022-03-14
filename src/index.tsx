import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient } from 'react-query'

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

const client = new QueryClient()


ReactDOM.render(
  <QueryClientProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>,
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>,
  document.getElementById('root')
);

