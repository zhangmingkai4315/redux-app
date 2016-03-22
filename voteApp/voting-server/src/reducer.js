import {setEntries,vote,next,INITIAL_STATE} from './core.js'

export default function reducer(state=INITIAL_STATE,action){
	// 按照action类型确定调用函数
	switch (action.type) {
		case 'SET_ENTRIES':
			return setEntries(state,action.entries)
			break;
		case 'VOTE':
			return state.update('vote',voteState=>vote(voteState,action.entry));
			break;
		case 'NEXT':
			return next(state);
			break;
		default:
			return state
	}
	// return state
}