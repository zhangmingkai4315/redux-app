import Server from 'socket.io'
export default function startServer(store){
	const io=new Server().attach(8090);

	// Adds a change listener. It will be called any time an action is
	// dispatched, and some part of the state tree may potentially
	// have changed. You may then call getState() to read the current
	// state tree inside the callback.

	//绑定事件发生器 一旦状态改变则通知所有的客户端
	store.subscribe(()=>{
		io.emit('state',store.getState().toJS());
	});

	io.on('connection',(socket)=>{
		socket.emit('state',store.getState().toJS());
		socket.on('action',store.dispatch.bind(store));
	});
}
