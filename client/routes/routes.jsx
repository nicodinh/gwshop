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
