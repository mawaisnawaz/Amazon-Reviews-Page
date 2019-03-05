import React from 'react';

//use for routing in react
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//use for redux in react 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './assets/css/font-awesome.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//reducers for react
import reviews from './store/reducers/reviews';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    reviews: reviews,
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render( app, document.getElementById( 'root' ) );
registerServiceWorker();
