var app = angular.module('cAPP', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/contacts', {
			templateUrl: 'views/contacts.view.html',
			controller: 'ContactsCtrl'
		}).
		when('/contacts/edit/:id', {
			templateUrl: 'views/edit_contacts.view.html',
			controller: 'ContactEditCtrl'
		}).
		when('/contacts/add', {
			templateUrl: 'views/add_contacts.view.html',
			controller: 'ContactCreateCtrl'
		}).
		when('/', {
			templateUrl: 'views/login.view.html'
		}).
		otherwise({redirectTo: '/'});
}]);