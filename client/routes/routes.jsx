FlowRouter.notFound = {
	action() {
		ReactLayout.render( App, {
			children: <NotFound path={ FlowRouter.current().path } />
		})
	}
};

FlowRouter.route( '/', {
	name: 'home',
	action() {
		ReactLayout.render( App );
	}
});

FlowRouter.route( '/wts', {
	name: 'wts',
	action() {
		ReactLayout.render( App );
	}
});

FlowRouter.route( '/wtb', {
	name: 'wtb',
	action() {
		ReactLayout.render( App );
	}
});

FlowRouter.route( '/shop', {
	name: 'wtb',
	action() {
		ReactLayout.render( App );
	}
});
