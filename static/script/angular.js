var app = angular.module('app', []);
app.controller('monster', function($scope, $http) {
	$scope.imgs = {};
	$scope.imgs.model = null;
    $http.get("http://games123-moraes001.rhcloud.com/api/monster/images").then(function(response){
		console.log(response.data);
		$scope.imgs.name = response.data;
	});
	$scope.skills = [{type: '', baseDamage:0, baseAttribute:'', accuracy:0}];
	$scope.addSkill = function(){
		var newItem = $scope.skills.length +1;
		$scope.skills.push({type: '', baseDamage:0, baseAttribute:'', accuracy:0});
	};
	$scope.removeSkill = function(itemToRemove){
		var index = $scope.skills.indexOf(itemToRemove);
		$scope.skills.splice(index,1);
		if($scope.skills.length == 0){
			var newItem = $scope.skills.length +1;
			$scope.skills.push({type: '', baseDamage:0, baseAttribute:'', accuracy:0});
		}
	};
});