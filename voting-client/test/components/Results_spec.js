import React from 'react/addons';
import ReactDOM from 'react-dom';
import {List,Map} from 'immutable';
import Results from '../../src/components/Results';

import {expect} from 'chai';


const {renderIntoDocument,Simulate,scryRenderedDOMComponentsWithClass}=React.addons.TestUtils;
  describe('Results',()=>{
    it('renders entries with vote counts or zero',()=>{
       const pair=List.of('Trainspotting','28 days later');
       const tally=Map({'Trainspotting':5});
       const component=renderIntoDocument(<Results pair={pair} tally={tally}/>);
       const entries= scryRenderedDOMComponentsWithClass(component,'entry');
       const [train,days]=entries.map(e=>e.textContent);
       expect(entries.length).to.equal(2);
       expect(train).to.contain('Trainspotting');
       expect(days).to.contain('28 days later');
       expect(train).to.contain('5');
       expect(days).to.contain('0');


    });

    it('invokes the next callback when the next button is clicked',()=>{
      let nextInvoke=false;
      const next=()=>nextInvoke=true;
      const pair=List.of('Trainspotting','28 days later');
      const tally=Map({});
      const component=renderIntoDocument(<Results pair={pair} tally={tally} next={next}/>)
      Simulate.click(React.findDOMNode(component.refs.next));
      expect(nextInvoke).to.equal(true);
    });
  // describe('Results')

   it('renders the winner when there is one',()=>{
     const component=renderIntoDocument(<Results pair={['Trainspotting','28 days later']}
      tally={Map()} winner='Trainspotting'/>);
     const winner = React.findDOMNode(component.refs.winner);
     expect(winner).to.be.ok;
     expect(winner.textContent).to.contain('Trainspotting');
   })
})
