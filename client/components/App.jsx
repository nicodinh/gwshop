injectTapEventPlugin();

const {
	Styles,
	//IconMenu,
	//IconButton,
	//FontIcon,
	//NavigationExpandMoreIcon,
	//MenuItem,
	//DropDownMenu,
	FlatButton,
	Toolbar,
	ToolbarGroup,
	ToolbarSeparator,
	ToolbarTitle
} = MUI;

const {
	ThemeManager,
	LightRawTheme
} = Styles;

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
				<Toolbar>
					<ToolbarGroup firstChild={ false } float='left'>
						<FlatButton
							label='&nbsp;&nbsp;&nbsp;WTB'
							linkButton={ true }
							href='/wtb'
						/>
						<ToolbarSeparator />
						<FlatButton
							label='&nbsp;&nbsp;&nbsp;WTS'
							linkButton={ true }
							href='/wts'
						/>
						<ToolbarSeparator />
					</ToolbarGroup>
					<ToolbarGroup firstChild={ false } float='right'>
						<ToolbarTitle text='GWShop.lol - "Selling items forever"' />
					</ToolbarGroup>
				</Toolbar>
				{ this.props.children }
			</div>
		)
	}
});
