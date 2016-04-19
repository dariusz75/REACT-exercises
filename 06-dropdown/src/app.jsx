var React = require('react');
var Dropdown = require('./dropdown');

var options = {
	title: 'Choose a dessert',
	items: [
		'Apple Pie',
		'Peach Pie',
		'Coconut Cream Pie'
	]
};


	var parentElement = document.querySelector('.target');

	var element = React.createElement(Dropdown, options);

	React.render(element, parentElement);