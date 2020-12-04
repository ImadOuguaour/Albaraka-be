import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-table-6/react-table.css'
import './'
import "babel-polyfill";
import mySaga from "./saga";
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import 'material-table/dist/material-table.js'


import reducers from './reducers';
import { Provider } from 'react-redux';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga)

// pass our store into our Provider
ReactDOM.render(
    // Provider pass data into our App
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
