angular.module('shop', ['ngRoute'])
var mainController = function($scope, $http) {
	var itemsArray = [];
	$http.get('/api/me').then(function(returnData) {
			$scope.user = returnData.data;
	});
	var refresh = function(id) {
		var data = {};
		$http.get('/api/items/get', data).success(function(response) {
			$scope.items = response;
			$scope.item = "";
		});

	};
	refresh();
	
	$scope.addItem = function() {
		var request = {
			name: $scope.item.name,
			quantity: $scope.item.quantity,
			userSubmitted: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.items = response;
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.delete = function(id) {
		$http.delete('/api/items/delete/' + id).success(function(response) {
			refresh();
		})
		
	}

	
};









angular.module('shop')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/html/items.html',
				controller : 'mainController'
			})
			.when('/items', {
				templateUrl: '/html/items.html',
				controller : 'mainController'
			})
			.when('/fruit', {
				templateUrl: '/html/fruit.html',
				controller : 'mainController'
			})
			.when('/veggies', {
				templateUrl: '/html/veggies.html',
				controller : 'mainController'
			})
			.when('/meat', {
				templateUrl: '/html/meat.html',
				controller : 'mainController'
			})
			.when('/poultry', {
				templateUrl: '/html/poultry.html',
				controller : 'mainController'
			})
			.when('/drinks', {
				templateUrl: '/html/drinks.html',
				controller : 'mainController'
			})
	}])
angular.module('shop')
	.controller('mainController', mainController);