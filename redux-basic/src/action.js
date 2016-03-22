export const ADD_TODO='ADD_TODO';
export const COMPLETE_TODO='COMPLETE_TODO';
export const SET_VISIBILITY_FILTER='SET_VISIBILITY_FILTER';
export const TOGGLE_TODO='TOGGLE_TODO';

let nextTodoId=0;

export const VisibilityFilters={
	SHOW_ALL:'SHOW_ALL',
	SHOW_COMPLETED:'SHOW_COMPLETED',
	SHOW_ACTIVE:'SHOW_ACTIVE',
};


export function addTodo(text){
	return {
		id:nextTodoId++,
		type:ADD_TODO,
		text,
		
	}
};

export function completeTodo(index){
	return{
		type:COMPLETE_TODO,
		index,
	}
};

export const toggleTodo=(id)=>{
	// console.log('toggle:'+id);
	return {
		type:TOGGLE_TODO,
		id,
	}
}

export function setVisibilityFilter(filter){
	return {
		type:SET_VISIBILITY_FILTER,
		filter
	}
};

