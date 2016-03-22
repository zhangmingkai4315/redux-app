import {addTodo,completeTodo,setVisibilityFilter,VisibilityFilters} from './action'
import {createStore} from 'redux';
import todoApp from './reducer'
import {Provider} from 'react-redux'
import React from 'react'
import {render} from 'react-dom'
import App from './components/App'


let store=createStore(todoApp);



console.log(store.getState())

// let unsubscribe=store.subscribe(()=>{
// 	console.log(store.getState());
// });

// store.dispatch(addTodo('Learn about actions'));
// store.dispatch(addTodo('Learn about stores'));
// store.dispatch(addTodo('Learn about redux'));
// store.dispatch(addTodo('Learn about react'));

// store.dispatch(completeTodo(0));
// store.dispatch(completeTodo(1));


// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// unsubscribe();

render(

	<Provider store={store}>
		<App/>
	</Provider>

, document.getElementById('app')
)