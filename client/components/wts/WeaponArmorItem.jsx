const {
	RadioButton,
	RadioButtonGroup
} = MUI;

WeaponArmorItem = React.createClass({
	render() {
		const styles = {
			div: {
				marginBottom: 16
			},
			radioButton: {
				marginBottom: 16
			}
		};
		return (
			<div style={ styles.div }>
				<RadioButtonGroup name='typeItem'>
					<RadioButton
						value='Weapon'
						label='Weapon'
						style={ styles.radioButton }
					/>
					<RadioButton
						value='Armor'
						label='Armor'
						style={ styles.radioButton }
					/>
					<RadioButton
						value='Item'
						label='Item'
						style={ styles.radioButton }
					/>
				</RadioButtonGroup>
			</div>
		)
	}
});