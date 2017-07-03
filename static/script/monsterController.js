angular.module('app').controller('monster', function($scope, $http, factoryService, $routeParams) {
	$scope.imgs = {};
	$scope.types = {};
	$scope.targets = {};
	$scope.keyElements = {};
	$scope.baseAtributes = {};
	$scope.imgs.name = $routeParams.images.$$state.value;
	$scope.types = $routeParams.types.$$state.value;
	$scope.targets = $routeParams.targets.$$state.value;
	$scope.keyElements = $routeParams.keyElements.$$state.value;
	$scope.tpl_monster = factoryService.getTpl_monster();
	$scope.imgs.model = null;

	
	var tpl_monster = {Level:0, Hp:0, Attack:0, Defense:0, MagicAttack:0, MagicDefense:0, Speed:0, CriticalChance:0, CriticalDamage:0, Evasion:0, Accuracy:0};
	var Skills = [{keyElement:'', skillName:'', type: [],   BaseAttribute:0, Accuracy:0}];
	$scope.isUpdate = factoryService.getMonsterUpdate();;
	$scope.isSave = !$scope.isUpdate;
	factoryService.setMonsterUpdate(false);
	if(!$scope.isUpdate){
		factoryService.setTpl_monster(tpl_monster);
		factoryService.setSkills(Skills);
	}
	console.log($scope.tpl_monster);
	
	
	$scope.isDisabled = function(baseAttributes){
		var result = true;
		if(Array.isArray(baseAttributes)){
			baseAttributes.forEach(function(baseAttribute) {
				if(result != false && baseAttribute.Name != ''){
					result = false;
				}
			});
		}
		return result;
	}


	$scope.addSkill = function(){
		var newItem = $scope.tpl_monster.Skills.length +1;
		$scope.tpl_monster.Skills.push({keyElement:'', skillName:'',    BaseAttribute:0, Accuracy:0});
	};
	$scope.removeSkill = function(itemToRemove){
		var index = $scope.tpl_monster.Skills.indexOf(itemToRemove);
		$scope.tpl_monster.Skills.splice(index,1);
		if($scope.tpl_monster.Skills.length == 0){
			var newItem = $scope.tpl_monster.Skills.length +1;
			$scope.tpl_monster.Skills.push({keyElement:'', skillName:'',    BaseAttribute:0, Accuracy:0});
		}
	};
	$scope.save = function(tpl_monster){
		var res = $http.post('http://games123-moraes001.rhcloud.com/api/tpl_monster', tpl_monster).then(function (response) {
			if (response.data){
				alert("Monster " + tpl_monster.Name + " saved sucefully.");
			}
		});
		$scope.tpl_monster= {Level:0, Hp:0, Attack:0, Defense:0, MagicAttack:0, MagicDefense:0, Speed:0, CriticalChance:0, CriticalDamage:0, Evasion:0, Accuracy:0};
		$scope.tpl_monster.Skills = [{keyElement:'', skillName:'',    BaseAttribute:0, Accuracy:0}];
	};
	$scope.reset = function(){
		$scope.tpl_monster= {Level:0, Hp:0, Attack:0, Defense:0, MagicAttack:0, MagicDefense:0, Speed:0, CriticalChance:0, CriticalDamage:0, Evasion:0, Accuracy:0};
		$scope.tpl_monster.Skills = [{keyElement:'', skillName:'', type: Skills.type,   BaseAttribute:0, Accuracy:0}];
	};
	$scope.update = function(tpl_monster){
		$http.put('http://games123-moraes001.rhcloud.com/api/tpl_monster',tpl_monster).then(function (response) {
			if (response.data){
				alert("Monster " + tpl_monster.Name + " updated sucefully.");
			}
		});
	};
});