import {combineReducers} from 'redux';
import {ADD_TODO,COMPLETE_TODO,SET_VISIBILITY_FILTER,TOGGLE_TODO
		,VisibilityFilters
	  } from './action'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state=SHOW_ALL,action){
	switch(action.type){
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
}

function todos(state=[],action){
	switch(action.type){
		case ADD_TODO:
			return [
				...state,
				{
					text:action.text,
					completed:false,
					id:action.id
				}
			];
		case TOGGLE_TODO:
			return state.map((todo,index)=>{
				if(index=== action.id){
					const completed=todo.completed;
					return Object.assign({},todo,{
						completed:!completed
					})
				}else{
					return todo;
				}
			})
		case COMPLETE_TODO:
			return state.map((todo,index)=>{
				if(index=== action.index){
					return Object.assign({},todo,{
						completed:true
					})
				}else{
					return todo;
				}
			})
		default:
			return state;
	}
}

const todoApp = combineReducers({visibilityFilter,todos});

export default todoApp;
