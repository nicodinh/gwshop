ShopRoutes = FlowRouter.group({
	prefix: '/wts',
	name: 'shop'
});

ShopRoutes.route( '/', {
	name: 'shop details',
	action() {
		ReactLayout.render( App, {
			children: <ArmorItemWeapon />
		})
	}
});

/*
ShopRoutes.route( '/:username', {
	name: 'shop details',
	action() {
		ReactLayout.render( App, {
			//children: <Header />
		})
	}
});
*/