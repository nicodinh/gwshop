Items = new Mongo.Collection( 'items' );
Item = new SimpleSchema({
	userId: {
		type: String
	},
	username: {
		type: String
	},
	userInGameName: {
		type: String
	},
	createdAt: {
		type: Date
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
	/*
		Price
	*/
	priceType: {
		type: String,
		allowedValues: [
			'Gold',
			'Armbrace',
			'Ecto',
			'Zkeys',
			'Free',
			'Make me an offer'
		]
	},
	priceValue: {
		type: Number,
		defaultValue: 0
	},
	itemNumber: {
		type: Number,
		defaultValue: 1
	},
	offer: {
		type: [Object],
		optional: true
	},
	'offer.$.userId': {
		type: String,
		optional: true
	},
	'offer.$.username': {
		type: String,
		optional: true
	},
	'offer.$.userInGameName': {
		type: String,
		optional: true
	},
	'offer.$.priceType': {
		type: String,
		allowedValues: [
			'Gold',
			'Armbrace',
			'Ecto',
			'Zkeys'
		],
		optional: true
	},
	'offer.$.priceValue': {
		type: Number,
		optional: true
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
	inscriptions: {
		type: String,
		allowedValues: [
			"Strength and Honor",
			"Guided by Fate",
			"Dance with Death",
			"Too Much Information",
			"To the Pain!",
			"Brawn over Brains",
			"Vengeance is Mine",
			"Don't Fear the Reaper",
			"I have the power!",
			"Hale and Hearty",
			"Have Faith",
			"Don't call it a comeback!",
			"I am Sorrow.",
			"Seize the Day",
			"Don't Think Twice",
			"Let the Memory Live Again",
			"Aptitude not Attitude",
			"Not the face!",
			"Leaf on the Wind",
			"Like a Rolling Stone",
			"Sleep Now in the Fire",
			"Riders on the Storm",
			"Through Thick and Thin",
			"The Riddle of Steel",
			"Sheltered by Faith",
			"Run For Your Life!",
			"Nothing to Fear",
			"Luck of the Draw",
			"Fear Cuts Deeper",
			"I Can See Clearly Now",
			"Swift as the Wind",
			"Soundness of Mind",
			"Strength of Body",
			"Cast Out the Unclean",
			"Pure of Heart",
			"Only the Strong Survive",
			"Hail to the King",
			"Faith is My Shield",
			"Might Makes Right",
			"Knowing is Half the Battle.",
			"Man for All Seasons",
			"Survival of the Fittest",
			"Ignorance is Bliss",
			"Life is Pain",
			"Down But Not Out",
			"Be Just and Fear Not",
			"Live for Today",
			"Master of My Domain",
			"Serenity Now",
			"Forget Me Not",
			"Measure for Measure",
			"Show me the money!"
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
