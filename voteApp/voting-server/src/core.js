
import {List,Map} from 'immutable'
// 函数将返回一对键为entries，值为newEntries的Map结构 

export const INITIAL_STATE=Map()
export function setEntries(states,newEntries){
	return states.set("entries",List(newEntries));
}	
export function next(states){
	const entries=states.get('entries').concat(getWinner(states.get('vote')));
	if(entries.size==1){
		return states.remove('vote').remove('entries').set('winner',entries.first());
	}else{
		return states.merge({
			vote:Map({pair:entries.take(2)}),
			entries:entries.skip(2)
		});
	}	
}

export function vote(states,entry){
	return states.updateIn(['tally',entry],0,tally=>tally+1)
}

export function getWinner(vote){
	if(!vote) return [];
	const [a,b]=vote.get('pair');
	const aVotes=vote.getIn(['tally',a],0);
	const bVotes=vote.getIn(['tally',b],0);
	if(aVotes>bVotes){
		return [a];
	}
	else if(aVotes<bVotes){
		return [b];
	}else{
		return [a,b];
	}
}