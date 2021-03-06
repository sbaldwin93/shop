(function() {
angular.module('shop', ['ngRoute'])
angular.module('shop')
	.controller('mainController', ['$scope', '$http', function($scope, $http) {
	var itemsArray = [];
	$http.get('/api/me').then(function(returnData) {
		$scope.user = returnData.data;
	});
	var refresh = function(id) {
		var data = {}
		$http.get('/api/items/get/' + $scope.userId, data).success(function(response) {
			$scope.itemsArray = response;
			$scope.item = "";
			$scope.count = $scope.itemsArray.length.toString();
		});
	};
	refresh();
	$scope.addProduce = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			quantity: $scope.item.quantity,
			type: 'produce',
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addMeat = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			quantity: $scope.item.quantity,
			type: 'meat',
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addDairy = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			quantity: $scope.item.quantity,
			type: 'dairy',
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.addOther = function() {
		$scope.itemsArray = [];
		var request = {
			name: $scope.item.name,
			quantity: $scope.item.quantity,
			type: 'other',
			userId: $scope.user._id
		}
		$http.post('/api/items/post', request).success(function(response) {
			$scope.itemsArray.push(response);
			refresh()
		}).error(function(error) {
			console.log(error);
		});
	};
	$scope.delete = function(id) {
		$http.delete('/api/items/delete/' + id).success(function(response) {
			refresh();
		});	
	};
}]);
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
		.when('/produce', {
			templateUrl: '/html/produce.html',
			controller : 'mainController'
		})
		.when('/meat', {
			templateUrl: '/html/meat.html',
			controller : 'mainController'
		})
		.when('/dairy', {
			templateUrl: '/html/dairy.html',
			controller : 'mainController'
		})
		.when('/other', {
			templateUrl: '/html/other.html',
			controller : 'mainController'
		})		
	}]);
}());






