export default socket =>store => next=>action=>{
  // console.log('middleware calling',action);
  if(action.meta && action.meta.remote){
      socket.emit('action',action);
  }
  return next(action);
}
