import {List,Map, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';

describe('reducer function test',()=>{
  it('handles SET_STATE',()=>{
    const initialState=Map();
    const action={
      type:'SET_STATE',
      state:Map({
        vote:Map({
          pair:List.of('Trainspotting','28 days later'),
          tally:Map({Trainspotting:1})
        })
      })
    };

    const nextState=reducer(initialState,action);
    expect(nextState).to.equal(fromJS({
      vote:{
        pair:['Trainspotting','28 days later'],
        tally:{Trainspotting:1}
      }
    }));
  });

  it('handles SET_STATE,with plain javascript data structure',()=>{
    const initialState=Map();
    const action={
      type:'SET_STATE',
      state:{
        vote:{
          pair:['Trainspotting','28 days later'],
          tally:{Trainspotting:1}
        }
      }
    };
    const nextState=reducer(initialState,action);
    expect(nextState).to.equal(fromJS({
      vote:{
        pair:['Trainspotting','28 days later'],
        tally:{Trainspotting:1}
      }
    }));
  });

  it('handles SET_STATE,without initialState',()=>{
    const initialState=undefined;
    const action={
      type:'SET_STATE',
      state:{
        vote:{
          pair:['Trainspotting','28 days later'],
          tally:{Trainspotting:1}
        }
      }
    };
    const nextState=reducer(initialState,action);
    expect(nextState).to.equal(fromJS({
      vote:{
        pair:['Trainspotting','28 days later'],
        tally:{Trainspotting:1}
      }
    }));
  });


})
