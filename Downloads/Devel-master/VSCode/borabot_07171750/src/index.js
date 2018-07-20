import'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/store';
import { loadBoard } from './actions/boardActions';
import '../node_modules/toastr/build/toastr.min.css';


const store = configureStore();
store.dispatch(loadBoard());

render(
    <Provider store={store} >
        <Router history={browserHistory} routes={routes} />
    </Provider>,document.getElementById("root"));

