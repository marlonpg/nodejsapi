angular.module('app').controller('keyElement', function($scope, $http, factoryService) {
	
	$scope.keyElement = factoryService.getKeyElement();
	$scope.isUpdate = factoryService.getKeyElementUpdate();
	$scope.isSave = !$scope.isUpdate;
	if(!$scope.isUpdate){
		$scope.keyElement = {Name: ''};
		factoryService.setKeyElement($scope.keyElement);
	}

	factoryService.setKeyElementUpdate(false);
	
	$scope.save = function(keyElement){
		var res = $http.post('http://games123-moraes001.rhcloud.com/api/keyElement', keyElement).then(function (response) {
			if (response.data){
				alert("Key Element " + keyElement.Name + " saved sucefully.");
			}
		});
		$scope.keyElement = {Name: ''};
	};	
	$scope.reset = function(){
		$scope.keyElement = {Name: ''};
	};
	$scope.update = function(keyElement){
		$http.put('http://games123-moraes001.rhcloud.com/api/keyElement',keyElement).then(function (response) {
			if (response.data){
				alert("Key Element " + keyElement.Name + " updated sucefully.");
				$scope.keyElement = {Name: ''};
			}
		});
	};
});
