NotFound = React.createClass({
	render() {
		let style = {
			'padding': '2em',
			'height': '5em',
			'color': 'red'
		};
		return (
			<div style={ style }>
				Error 404: { this.props.path } not found.
			</div>
		)
	}
});
