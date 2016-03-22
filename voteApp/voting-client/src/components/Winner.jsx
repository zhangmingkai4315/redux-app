import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
export default React.createClass({
	mixins:[PureRenderMixin],//对于不可变数据结构可以使用该插件加速web render
	render:function(){
		return (<div className="winner">Winner is {this.props.winner}</div>);
	}
});
