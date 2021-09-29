import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { Provider } from 'react-redux'
import reducer from './store/reducer';
import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;


const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))
  


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();