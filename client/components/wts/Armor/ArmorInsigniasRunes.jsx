const {
	RadioButton,
	RadioButtonGroup
} = MUI;

ArmorInsigniasRunes = React.createClass({
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
				<RadioButtonGroup name='typeArmor'>
					<RadioButton
						value='Insignias'
						label='Insignias'
						style={ styles.radioButton }
					/>
					<RadioButton
						value='Runes'
						label='Runes'
						style={ styles.radioButton }
					/>
				</RadioButtonGroup>
			</div>
		)
	}
});