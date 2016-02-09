const {
	Avatar,
	List,
	ListItem,
	RadioButton,
	RadioButtonGroup,
	FontIcon
} = MUI;

ProfessionsRadioBoxList = React.createClass({
	render() {
		const styles = {
			xxx: {
				marginBottom: 16
			},
			xxxx: {
				marginBottom: 16
			}
		};
		return (
			<List subheader='Professions'>
				<ListItem
					primaryText='Multiple'
					leftAvatar={<Avatar src='/assets/Any-tango-icon-48.png' />}
					rightIcon={<i className='material-icons'>&#xE836;</i>}
				/>
				<ListItem
					primaryText='Assassin'
					leftAvatar={<Avatar src='/assets/Assassin-tango-icon-48.png' />}
					rightIcon={<i className='material-icons'>&#xE836;</i>}
				/>
				<ListItem
					primaryText='Dervish'
					leftAvatar={<Avatar src='/assets/Dervish-tango-icon-48.png' />}
					rightIcon={<i className='material-icons'>&#xE836;</i>}
				/>
				<ListItem
					primaryText='Elementalist'
					leftAvatar={<Avatar src='/assets/Elementalist-tango-icon-48.png' />}
					rightIcon={<i className='material-icons'>&#xE836;</i>}
				/>
				<ListItem
					primaryText='Mesmer'
					leftAvatar={<Avatar src='/assets/Mesmer-tango-icon-48.png' />}
					rightIcon={<i className='material-icons'>&#xE836;</i>}
				/>
				<ListItem
					primaryText='Monk'
					leftAvatar={<Avatar src='/assets/Monk-tango-icon-48.png' />}
					rightIcon={<i className='material-icons'>&#xE836;</i>}
				/>
				<ListItem
					primaryText='Necromancer'
					leftAvatar={<Avatar src='/assets/Necromancer-tango-icon-48.png' />}
					rightIcon={<i className='material-icons'>&#xE836;</i>}
				/>
				<ListItem
					primaryText='Paragon'
					leftAvatar={<Avatar src='/assets/Paragon-tango-icon-48.png' />}
					rightIcon={<i className='material-icons'>&#xE836;</i>}
				/>
				<ListItem
					primaryText='Ranger'
					leftAvatar={<Avatar src='/assets/Ranger-tango-icon-48.png' />}
					rightIcon={<i className='material-icons'>&#xE836;</i>}
				/>
				<ListItem
					primaryText='Ritualist'
					leftAvatar={<Avatar src='/assets/Ritualist-tango-icon-48.png' />}
					rightIcon={<i className='material-icons'>&#xE836;</i>}
				/>
				<ListItem
					primaryText='Warrior'
					leftAvatar={<Avatar src='/assets/Warrior-tango-icon-48.png' />}
					rightIcon={<i className='material-icons'>&#xE836;</i>}
				/>
			</List>
		)
	}
});