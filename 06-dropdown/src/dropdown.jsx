var React = require('react');
var Button = require('./button');
//var List = require('./list');

module.exports = React.createClass({
	handleClick: function() {
			alert('clicked from dropdown!');
		},

	render: function() {
		items = this.props.items.map(function(item) {
			return <li>{item}</li>
		});

		return <div className="dropdown">
					<Button whenClicked={this.handleClick} 
					className="btn-default" 
					title={this.props.title} 
					subTitleClassName="caret" />
					<ul>{items}</ul>
					</div>
	}
});