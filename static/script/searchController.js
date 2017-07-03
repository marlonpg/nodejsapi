angular.module('app').controller('search', function($scope, $http, factoryService) {
	$scope.tpl_monster = {};
	$http.get("http://games123-moraes001.rhcloud.com/api/tpl_monster").then(function(response){
		$scope.tpl_monster.items = response.data;
	});
	$scope.loadRegister = function(tpl_monster){
		factoryService.setSkills(tpl_monster.Skills);
		factoryService.setTpl_monster(tpl_monster);
		factoryService.setMonsterUpdate(true);
	};
	$scope.deleteMonster = function(tpl_monster){
		$http.delete('http://games123-moraes001.rhcloud.com/api/tpl_monster/'+ tpl_monster._id).then(function (response) {
			if (response.data){
				alert("Monster " + tpl_monster.Name + " deleted sucefully.");
				var index = $scope.tpl_monster.items.indexOf(tpl_monster);
				$scope.tpl_monster.items.splice(index,1);
			}
		});
	};
	
});
