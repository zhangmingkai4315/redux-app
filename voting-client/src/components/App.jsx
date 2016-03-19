import React from 'react';
import {Map,List} from 'immutable';
const pair=List.of('Trainspotting','28 days later');
const tally=Map({
  'Trainspotting':5,
  '28 days later':4
});
export default React.createClass({
  render:function(){
    return React.cloneElement(this.props.children,{pair:pair,tally:tally});
  }
})
