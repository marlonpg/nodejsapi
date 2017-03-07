var app = angular.module('app', []);
app.controller('monster', function($scope, $http) {
	$scope.imgs = {};
	$scope.tpl_monster = {};
	$scope.imgs.model = null;
    $http.get("http://games123-moraes001.rhcloud.com/api/monster/images").then(function(response){
		$scope.imgs.name = response.data;
	});
	$scope.tpl_monster.skills = [{type: '', baseDamage:0, baseAttribute:'', accuracy:0}];
	$scope.addSkill = function(){
		var newItem = $scope.tpl_monster.skills.length +1;
		$scope.tpl_monster.skills.push({type: '', baseDamage:0, baseAttribute:'', accuracy:0});
	};
	$scope.removeSkill = function(itemToRemove){
		var index = $scope.tpl_monster.skills.indexOf(itemToRemove);
		$scope.tpl_monster.skills.splice(index,1);
		if($scope.tpl_monster.skills.length == 0){
			var newItem = $scope.tpl_monster.skills.length +1;
			$scope.tpl_monster.skills.push({type: '', baseDamage:0, baseAttribute:'', accuracy:0});
		}
	};
	$scope.save = function(tpl_monster){
		tpl_monster.SpriteName = tpl_monster.SpriteName.substring(0, tpl_monster.SpriteName.length-4);
		var res = $http.post('http://games123-moraes001.rhcloud.com/api/tpl_monster', tpl_monster);
		$scope.tpl_monster={};
		$scope.tpl_monster.skills = [{type: '', baseDamage:0, baseAttribute:'', accuracy:0}];
	};
	$scope.reset = function(){
		$scope.tpl_monster={};
		$scope.tpl_monster.skills = [{type: '', baseDamage:0, baseAttribute:'', accuracy:0}];
	};
});