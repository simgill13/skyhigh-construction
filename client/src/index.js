

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';

import store from './store';
import App from './components/app';
import Login from './components/login';




document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
        <Provider store={store}>
        	<Router history={hashHistory}>
        		<Route path="/" component={App} />
        		<Route path="/Login" component={Login} />
        		
            </Router>
        </Provider>,
        document.getElementById('root')
    )
);
