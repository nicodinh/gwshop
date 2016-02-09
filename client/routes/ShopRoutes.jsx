ShopRoutes = FlowRouter.group({
	prefix: '/shop',
	name: 'shop'
});

ShopRoutes.route( '/', {
	name: 'shop details',
	action() {
		ReactLayout.render( App, {
			children: <Header />
		})
	}
});

ShopRoutes.route( '/:username', {
	name: 'shop details',
	action() {
		ReactLayout.render( App, {
			children: <Header />
		})
	}
});