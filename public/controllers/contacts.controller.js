angular.module("cAPP")

.controller('ContactsCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
	$http.get('/contacts').success(function(data){
		$scope.contacts = data;
	});

	$scope.removeContact = function(data) {
		$http.delete('/contacts/'+data._id).success(function(data){
			console.log('Contact deleted');
		});
		$location.path('/contacts');
	}
}])

.controller('ContactCreateCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
	$http.get('/contacts').success(function(data){
		$scope.contact = data;
	});

	$scope.addContact = function(){
		var data = {
			login: 		$scope.login,
			password: 	$scope.password,
			name: 		$scope.name,
			email: 		$scope.email,
			address: 	$scope.address,
			telephone: 	$scope.telephone,
		}

		$http.post('/contacts', data).success(function(data, status){
			console.log(status);
		});
		
		$location.path('/contacts');
	}
}])

.controller('ContactEditCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
	$http.get('/contacts/' + $routeParams.id).success(function(data){
		$scope.contact = data;
	});

	$scope.updateContact = function(){
		var data = {
			id: 		$routeParams.id,
			login: 		$scope.contact.login,
			password: 	$scope.contact.password,
			name: 		$scope.contact.name,
			email: 		$scope.contact.email,
			address: 	$scope.contact.address,
			telephone: 	$scope.contact.telephone,
		}

		$http.put('/contacts', data).success(function(data, status){
			console.log(status);
		});
		
		$location.path('/contacts');
	}
}]);