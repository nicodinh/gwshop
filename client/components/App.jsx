App = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			user: Meteor.user()
		};
	},
	render() {
		return (
			<div>
				<AccountsUIWrapper />
				{ this.props.children }
			</div>
		)
	}
});
