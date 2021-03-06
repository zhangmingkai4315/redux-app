import React from 'react/addons'
import ReactDOM from 'react-dom'
import {Voting} from '../src/components/Voting';
import {List,Map} from 'immutable';

import {expect} from 'chai';
const {renderIntoDocument,scryRenderedDOMComponentsWithTag,Simulate}
	  =React.addons.TestUtils;

describe("Voting components test",()=>{
	it('render a pair of button',()=>{
		const component=renderIntoDocument(
			<Voting pair={['Trainspotting','28 days later']}/>
		);
		const buttons=scryRenderedDOMComponentsWithTag(component,'button');
		expect(buttons.length).to.equal(2);
		expect(buttons[0].textContent).to.equal('Trainspotting');
		expect(buttons[1].textContent).to.equal('28 days later');
	});

	it("invokes callback when a button is clicked",()=>{
 		var votedWith='';
   		const vote = (entry) => votedWith = entry;
   		const voteMe=vote();
		const component=renderIntoDocument(
			<Voting pair={['Trainspotting','28 days later']} vote={vote}/>
		);
		const buttons=scryRenderedDOMComponentsWithTag(component,'button');
		Simulate.click(buttons[0]);
		expect(votedWith).to.equal('Trainspotting');
	});

	it('disable buttons when user has voted',()=>{
		const component=renderIntoDocument(
			<Voting pair={['Trainspotting','28 days later']}
					hasVoted="Trainspotting"/>
		);
		const buttons=scryRenderedDOMComponentsWithTag(component,'button');
		expect(buttons.length).to.equal(2);
		expect(buttons[0].hasAttributes('disabled')).to.equal(true);
		expect(buttons[1].hasAttributes('disabled')).to.equal(true);
	});

	it('adds label to the voted entry',()=>{
		const component=renderIntoDocument(
			<Voting pair={["Trainspotting","28 days later"]}
					hasVoted="Trainspotting"/>
		);
		const buttons=scryRenderedDOMComponentsWithTag(component,'button');
		expect(buttons[0].textContent).to.contain('Voted');
	});

	it('remove buttons when winner has been given',()=>{
		const component=renderIntoDocument(
			<Voting pair={['Trainspotting','28 days later']}
					winner="Trainspotting"/>
		);
		const buttons=scryRenderedDOMComponentsWithTag(component,'button');
		expect(buttons.length).to.equal(0);

		const winner =ReactDOM.findDOMNode(component.refs.winner);
		expect(winner).to.be.ok;
		expect(winner.textContent).to.contain('Trainspotting');
	});

	it('render as a pure component',()=>{
		const pair=['Trainspotting','28 Days Later'];
		const component=renderIntoDocument(<Voting pair={pair}/>);
		let firstButton=scryRenderedDOMComponentsWithTag(component,'button')[0];
		expect(firstButton.textContent).to.equal('Trainspotting');
		pair[0]='Sunshine';
		component.setProps({pair:pair});
		firstButton=scryRenderedDOMComponentsWithTag(component,'button')[0];
		expect(firstButton.textContent).to.equal('Trainspotting');
	});

	it('does update DOM when props changed',()=>{
		const pair=List.of('Trainspotting','28 Days Later');
		const component=renderIntoDocument(<Voting pair={pair}/>);
		let firstButton=scryRenderedDOMComponentsWithTag(component,'button')[0];
		expect(firstButton.textContent).to.equal('Trainspotting');
		// pair[0]='Sunshine';
		const newPair=pair.set(0,'Sunshine');
		component.setProps({pair:newPair});
		firstButton=scryRenderedDOMComponentsWithTag(component,'button')[0];
		expect(firstButton.textContent).to.equal('Sunshine');
	});

});
