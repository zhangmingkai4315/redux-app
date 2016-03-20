import React from 'react';
import ReactDOM from 'react-dom';
import {VotingContainer} from './components/Voting';
import {ResultContainer} from './components/Results';
import Router,{Route} from 'react-router'
import App from './components/App'
// import * from "module";
import reducer from './reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


const store=createStore(reducer);
store.dispatch({
	type:'SET_STATE',
	state:{
		vote:{
			pair:[
				'Sunshine',
				'28 days later'
			],
			tally:{Sunshine:2}
		}
	}
});



const pair=['Trainspotting','28 Days Later'];

const routes=<Route component={App}>
								<Route path='/' component={VotingContainer} />
								<Route path='/results' component={ResultContainer} />
							</Route>;

ReactDOM.render(<Provider store={store}>
									<Router>{routes}</Router>
								</Provider>,
				document.getElementById('app'));
