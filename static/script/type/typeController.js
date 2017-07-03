angular.module('app').controller('type', function($scope, $http, factoryService) {
	
	$scope.type = factoryService.getType();
	$scope.isUpdate = factoryService.getTypeUpdate();
	$scope.isSave = !$scope.isUpdate;
	var atribute = [{Name:''}];
	$scope.type.baseAtribute = factoryService.getAtribute();
	factoryService.setAtribute(atribute);
	
	$scope.save = function(type){
		if(Array.isArray(type.baseAtribute)){
			type.baseAtribute.forEach(function(atribute){
				if(atribute.Name === ''){
					var index = type.baseAtribute.indexOf(atribute);
					type.baseAtribute.splice(index,1);
				}
			})
		}
		var res = $http.post('http://games123-moraes001.rhcloud.com/api/type', type).then(function (response) {
			if (response.data){
				alert("Type " + type.Name + " saved sucefully.");
			}
		});
		$scope.type = {Name: ''};
	};	
	$scope.reset = function(){
		$scope.type = {Name: ''};
	};
	$scope.update = function(type){
		$http.put('http://games123-moraes001.rhcloud.com/api/type',type).then(function (response) {
			if (response.data){
				alert("Type " + type.Name + " updated sucefully.");
				$scope.type = {Name: ''};
			}
		});
	};
	$scope.addAtribute = function(){
		var newItem = $scope.type.baseAtribute.length +1;
		$scope.type.baseAtribute.push({Name:''});
	};
	$scope.removeAtribure = function(itemToRemove){
		var index = $scope.type.baseAtribute.indexOf(itemToRemove);
		$scope.type.baseAtribute.splice(index,1);
		if($scope.type.baseAtribute.length == 0){
			var newItem = $scope.type.baseAtribute.length +1;
			$scope.type.baseAtribute.push({Name:''});
		}
	};
});
