ShopRoutes = FlowRouter.group({
	prefix: '/wtb',
	name: 'shop'
});

ShopRoutes.route( '/', {
	name: 'shop details',
	action() {
		ReactLayout.render( App, {
			//children: <Header />
		})
	}
});