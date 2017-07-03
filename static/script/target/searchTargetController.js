angular.module('app').controller('searchTarget', function($scope, $http, factoryService) {
	$scope.target = {};
	$http.get("http://games123-moraes001.rhcloud.com/api/target").then(function(response){
		$scope.target.items = response.data;
	});
	$scope.loadTarget = function(target){
		factoryService.setTarget(target);
		factoryService.setTargetUpdate(true);
	};
	
	$scope.deleteTarget = function(target){
		$http.delete('http://games123-moraes001.rhcloud.com/api/target/'+ target._id).then(function (response) {
			if (response.data){
				alert("Target " + target.Name + " deleted sucefully.");
				var index = $scope.target.items.indexOf(target);
				$scope.target.items.splice(index,1);
			}
		});
	};
	
});
