import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import {renderRoutes} from 'react-router-config';

import Layout from "./molecules/Layout";
import reducer from '../client/reducers'

const store = createStore(reducer, window.INITIAL_STATE, applyMiddleware(thunk))

ReactDOM.hydrate(
<Provider store={store}>
    <Router>
        <div>{renderRoutes(Layout)}</div>
    </Router>
</Provider>, 
document.querySelector("#root"));
