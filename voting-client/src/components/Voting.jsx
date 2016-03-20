import React from 'react';
import Winner from './Winner';
import Vote from './Vote';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as actionCreators from '../action_creators'

console.log(actionCreators);
function mapStateToProps(state){
	return {
		pair:state.getIn(['vote','pair']),
		winner:state.get('winner'),
		hasVoted:state.get('hasVoted')
	};
}
export const Voting=React.createClass({
	mixins:[PureRenderMixin],
	render:function(){
		return (<div>
					{this.props.winner?
						<Winner ref="winner" winner={this.props.winner}/>:
						<Vote {...this.props}/>
					}
				</div>
	)}
});


export const VotingContainer=connect(mapStateToProps,actionCreators)(Voting);
