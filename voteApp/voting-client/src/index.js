import React from 'react';
import ReactDOM from 'react-dom';
import {VotingContainer} from './components/Voting';
import {ResultContainer} from './components/Results';
import Router,{Route} from 'react-router'
import App from './components/App'
// import * from "module";
import {setState} from './action_creators';
import io from 'socket.io-client';
import reducer from './reducer';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import remoteActionMiddleware from './remote_action_middleware';

const socket=io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state',state=>
	store.dispatch(setState(state))
);
const createStoreWithMiddleware=applyMiddleware(remoteActionMiddleware(socket))(createStore);

const store=createStoreWithMiddleware(reducer);

const pair=['Trainspotting','28 Days Later'];

const routes=<Route component={App}>
								<Route path='/' component={VotingContainer} />
								<Route path='/results' component={ResultContainer} />
							</Route>;

ReactDOM.render(<Provider store={store}>
									<Router>{routes}</Router>
								</Provider>,
				document.getElementById('app'));
