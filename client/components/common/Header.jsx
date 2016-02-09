Header = React.createClass({
	render() {
		let style = {
			'padding': '2em',
			'height': '5em',
			'color': 'green'
		};
		return (
			<div style={ style }>
				Error 405: { this.props.path } not found.
			</div>
		)
	}
});