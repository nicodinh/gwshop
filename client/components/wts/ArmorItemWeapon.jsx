const {
	Avatar,
	List,
	ListItem,
	RadioButton,
	RadioButtonGroup
} = MUI;

ArmorItemWeapon = React.createClass({
	handleClick( event ) {
		console.log( event.currentTarget.id );
	},
	render() {
		const styles = {
			div: {
				borderStyle: 'groove'
			}
		};
		return (
			<div style={ styles.div }>
				<List subheader='Gear and equipment'>
					<ListItem
						leftAvatar={ <Avatar src='/assets/game-icons/armor-64.png' /> }
						primaryText='Armor'
						secondaryText='Insignias & runes'
						onTouchTap={ this.handleClick }
						id='Armor'
					/>
					<ListItem
						leftAvatar={ <Avatar src='/assets/game-icons/beer-64.png' /> }
						primaryText='Item'
						secondaryText='Consumables, crafting materials, Miniatures'
						onTouchTap={ this.handleClick }
						id='Item'
					/>
					<ListItem
						leftAvatar={ <Avatar src='/assets/game-icons/sword-64.png' /> }
						primaryText='Weapon'
						secondaryText='Gold, green... Inscriptions'
						onTouchTap={ this.handleClick }
						id='Weapon'
					/>
				</List>
			</div>
		)
	}
});