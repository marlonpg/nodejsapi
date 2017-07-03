angular.module('app').controller('target', function($scope, $http, factoryService) {
	
	$scope.target = factoryService.getTarget();
	$scope.isUpdate = factoryService.getTargetUpdate();
	$scope.isSave = !$scope.isUpdate;
	if(!$scope.isUpdate){
		$scope.target = {Name: ''};
		factoryService.setTarget($scope.target);
	}


	factoryService.setTargetUpdate(false);
	
	$scope.save = function(target){
		console.log(target);
		var res = $http.post('http://games123-moraes001.rhcloud.com/api/target', target).then(function (response) {
			if (response.data){
				alert("Target " + target.Name + " saved sucefully.");
			}
		});
		$scope.target = {Name: ''};
	};	
	$scope.reset = function(){
		$scope.target = {Name: ''};
	};
	$scope.update = function(target){
		$http.put('http://games123-moraes001.rhcloud.com/api/target',target).then(function (response) {
			if (response.data){
				alert("target " + type.Name + " updated sucefully.");
				$scope.target = {Name: ''};
			}
		});
	};
});
