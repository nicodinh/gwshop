Items = new Mongo.Collection( 'items' );
Item = new SimpleSchema({
	userId: {
		type: String
	},
	username: {
		type: String
	},
	profession: {
		type: String,
		allowedValues: [
			'Warrior',
			'Ranger',
			'Monk',
			'Necromancer',
			'Mesmer',
			'Elementalist',
			'Assassin',
			'Ritualist',
			'Paragon',
			'Dervish',
			'Multiple',
			'All'
		]
	},
	typeItem: {
		type: String,
		allowedValues: [
			'Weapon',
			'Armor',
			'Item'
		]
	},
	priceType: {
		type: String,
		allowedValues: [
			'Gold',
			'Armbrace',
			'Ecto',
			'Zkeys'
		]
	},
	priceValue: {
		type: Number
	},
	/*
		Weapons
	*/
	inscribable: {
		type: Boolean,
		defaultValue: false,
		allowedValues: [true, false]
	},
	weaponColor: {
		type: String,
		allowedValues: [
			'Gold',
			'Blue',
			'Green',
			'Purple',
			'White'
		]
	},
	weaponType: {
		type: String,
		allowedValues: [
			'Axe',
			'Bow',
			'Dagger',
			'Focus item',
			'Hammer',
			'Scythe',
			'Shield',
			'Spear',
			'Staff',
			'Sword',
			'Wand'
		]
	},
	/*
		Armors
	*/
	armorType: {
		type: String,
		allowedValues: [
		]
	},
	/*
		Items
	*/
	itemType: {
		type: String,
		allowedValues: [
		]
	}
});
Items.attachSchema( Item );