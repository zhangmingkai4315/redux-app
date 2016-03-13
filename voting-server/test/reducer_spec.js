import {Map, fromJS} from 'immutable';
import {expect} from 'chai'

import reducer from '../src/reducer.js'

describe('reducer function call test',()=>{
	
	it('handle undefined state',()=>{
		const action={type:'SET_ENTRIES',entries:['Trainspotting']};
		const nextState=reducer(undefined,action);
		expect(nextState).to.equal(fromJS({
			entries:['Trainspotting']
		}));
	})


	it('handle SET_ENTRIES',()=>{
		const initialState=Map();
		const action={type:'SET_ENTRIES',entries:['Trainspotting']};
		const nextState=reducer(initialState,action);
		expect(nextState).to.equal(fromJS({
			entries:['Trainspotting']
		}));
	});

	it('handle NEXT',()=>{
		const initialState=fromJS({
			entries:['Trainspotting','28 days later']
		});
		const action={type:'NEXT'};
		const nextState=reducer(initialState,action);
		expect(nextState).to.equal(fromJS({
			vote:{
				pair:['Trainspotting','28 days later']
			},
			entries:[]
		}));
	});


	it('handle VOTE',()=>{
		const initialState=fromJS({
			vote:{
				pair:['Trainspotting','28 days later']
			},
			entries:[]
		});
		const action={type:'VOTE',entry:'Trainspotting'};
		const nextState=reducer(initialState,action);
		expect(nextState).to.equal(fromJS({
			vote:{
				pair:['Trainspotting','28 days later'],
				tally:{
					Trainspotting:1
				}
			},
			entries:[]
		}));
	});

	it(' can be used with reduce',()=>{
		const actions=[
			{type:'SET_ENTRIES',entries:['Trainspotting','28 days later']},
			{type:'NEXT'},
			{type:'VOTE',entry:'Trainspotting'},
			{type:'VOTE',entry:'Trainspotting'},
			{type:'VOTE',entry:'28 days later'},
			{type:'VOTE',entry:'Trainspotting'},
			{type:'NEXT'}
		];
		const finalState=actions.reduce(reducer,Map())
		expect(finalState).to.equal(fromJS({
			winner:'Trainspotting'
		}));
	});
})