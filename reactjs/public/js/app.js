import React from 'react';
import ReactDom from 'react-dom';
//var React = require('react');
var ReactDom = require('react-dom');


var Hello = React.createClass({
	render:function(){
		return React.createElement("h3",null,"Hello react")
	}
});

ReactDom.render(React.createElement(Hello),document.getElementById('react'));