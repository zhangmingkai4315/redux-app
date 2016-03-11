
import {List,Map} from 'immutable'
// 函数将返回一对键为entries，值为newEntries的Map结构 
export function setEntries(states,newEntries){
	return states.set("entries",List(newEntries));
}	
export function next(states){
	const entries=states.get("entries")
	return states.merge({
		vote:Map({pair:entries.take(2)}),
		entries:entries.skip(2)
	})
}

export function vote(states,entry){
	return states.updateIn(['vote','tally',entry],0,tally=>tally+1)
}
