Router.configure({
	notFoundTemplate: 'buy',
	layoutTemplate: 'layout'
});
Router.route('/', function () {
	this.layout('layout');
	this.render('buy', {});
});
Router.route('/sell', function () {
	this.layout('layout');
	this.render('sell', {});
});
Router.route('/signin', function () {
	this.layout('layout');
	this.render('signin', {});
});
Router.route('/signup', function () {
	this.layout('layout');
	this.render('signup', {});
});