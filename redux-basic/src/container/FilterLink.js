import {connect} from 'react-redux';

import {setVisibilityFilter} from '../action'
import Link from '../components/Link'

const mapStateToProps=(state,ownProps)=>{
	return {
		active:ownProps.filter=== state.visibilityFilter
	}
}

const mapDispatchToProps=(dispatch,ownProps)=>{
	return {
		onClick:()=>{
			dispatch(setVisibilityFilter(ownProps.filter))
		}
	}
}
const FilterLink=connect(mapDispatchToProps,mapStateToProps)(Link)

export default FilterLink