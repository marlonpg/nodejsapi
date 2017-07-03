angular.module('app').controller('searchType', function($scope, $http, factoryService) {
	$scope.type = {};
	$http.get("http://games123-moraes001.rhcloud.com/api/type").then(function(response){
		$scope.type.items = response.data;
	});
	$scope.loadType = function(type){
		factoryService.setAtribute(type.baseAtribute);
		factoryService.setType(type);
		factoryService.setTypeUpdate(true);
	};
	
	$scope.deleteType = function(type){
		$http.delete('http://games123-moraes001.rhcloud.com/api/type/'+ type._id).then(function (response) {
			if (response.data){
				alert("Type " + type.Name + " deleted sucefully.");
				var index = $scope.type.items.indexOf(type);
				$scope.type.items.splice(index,1);
			}
		});
	};
	
});
