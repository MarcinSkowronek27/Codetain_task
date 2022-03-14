import React from 'react';
import { StrictMode } from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import store from './redux/store';

const rootElement = document.getElementById('app');
ReactDOM.render(
<Provider store={store}>
  <StrictMode>
  <App />
  </StrictMode>
  </Provider>, rootElement);

