import {connect} from 'react-redux';
import {toggleTodo} from '../action';

import TodoList from '../components/TodoList';

const getVisibleTodos=(todos,filter)=>{
	switch (filter) {
		case 'SHOW_ALL':
			// statements_1
			return todos
			break;
		case 'SHOW_COMPLETED':
			return todos.filter(t=>t.completed);
			break;
		case 'SHOW_ACTIVE':
			return todos.filter(t=>!t.completed);
			break;
		default:
			return todos;
			// statements_def
			break;
	}
}

const mapStateToProps=(state)=>{
	return {
		todos:getVisibleTodos(state.todos,state.visibilityFilter)
	}
}


const mapDispatchToProps=(dispatch)=>{
	return {
		onTodoClick:(id)=>{
			dispatch(toggleTodo(id))
		}
	}
}

const VisibleTodoList=connect(mapStateToProps,mapDispatchToProps)(TodoList)
export default VisibleTodoList;

