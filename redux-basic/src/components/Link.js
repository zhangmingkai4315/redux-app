import React , {PropTypes} from 'react';

const Link = ({active,children,onClick})=>{
	if(active){
		return <span>{children}</span>
	}else{
		return (
			<a href="#"
			   onClick={e=>{
			   	e.preventDefault();
			   	onClick()
			   }}>{children}</a>
		)
	}
}

Link.propTypes={
	onClick:PropTypes.func.isRequired,
	children:PropTypes.node.isRequired,
	active:PropTypes.bool.isRequired,
}

export default Link;