angular.module('app').controller('searchKeyElement', function($scope, $http, factoryService) {
	$scope.keyElement = {};
	$http.get("http://games123-moraes001.rhcloud.com/api/keyElement").then(function(response){
		$scope.keyElement.items = response.data;
	});
	$scope.loadKeyElement = function(keyElement){
		factoryService.setKeyElement(keyElement);
		factoryService.setKeyElementUpdate(true);
	};
	
	$scope.deleteKeyElement = function(keyElement){
		$http.delete('http://games123-moraes001.rhcloud.com/api/keyElement/'+ keyElement._id).then(function (response) {
			if (response.data){
				alert("Key Element " + keyElement.Name + " deleted sucefully.");
				var index = $scope.keyElement.items.indexOf(keyElement);
				$scope.keyElement.items.splice(index,1);
			}
		});
	};
	
});
