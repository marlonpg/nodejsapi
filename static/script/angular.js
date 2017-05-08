var app = angular.module('app', []);
app.controller('monster', function($scope, $http, factoryService) {
	$scope.imgs = {};
	$scope.tpl_monster = factoryService.getTpl_monster();
	$scope.imgs.model = null;
    $http.get("http://games123-moraes001.rhcloud.com/api/monster/images").then(function(response){
		$scope.imgs.name = response.data;
	});
	var tpl_monster = {Level:0, Hp:0, Attack:0, Defense:0, MagicAttack:0, MagicDefense:0, Speed:0, CriticalChance:0, CriticalDamage:0, Evasion:0, Accuracy:0};
	var Skills = [{keyElement:'', skillName:'',    BaseAttribute:0, Accuracy:0}];
	$scope.isUpdate = factoryService.getUpdate();;
	$scope.isSave = !$scope.isUpdate;
	factoryService.setUpdate(false);
	$scope.tpl_monster.Skills = factoryService.getSkills();
	
	factoryService.setTpl_monster(tpl_monster);
	factoryService.setSkills(Skills);
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
		$scope.tpl_monster.Skills = [{keyElement:'', skillName:'',    BaseAttribute:0, Accuracy:0}];
	};
	$scope.update = function(tpl_monster){
		$http.put('http://games123-moraes001.rhcloud.com/api/tpl_monster',tpl_monster).then(function (response) {
			if (response.data){
				alert("Monster " + tpl_monster.Name + " updated sucefully.");
			}
		});
	};
});
app.controller('main', function($scope, $http, factoryService) {
	$scope.pages =
    [{ name: './search.html', url: './search.html'},
     { name: './monsterData.html', url: './monsterData.html'}];
	$scope.page = $scope.pages[0];
	$scope.changePage = function(page){
		$scope.page = $scope.pages[page];
	};
});
app.controller('search', function($scope, $http, factoryService) {
	$scope.tpl_monster = {};
	$http.get("http://games123-moraes001.rhcloud.com/api/tpl_monster").then(function(response){
		$scope.tpl_monster.items = response.data;
	});
	$scope.loadRegister = function(tpl_monster){
		factoryService.setSkills(tpl_monster.Skills);
		factoryService.setTpl_monster(tpl_monster);
		factoryService.setUpdate(true);
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
app.factory('factoryService',function(){

	var tpl_monster = {Level:0, Hp:0, Attack:0, Defense:0, MagicAttack:0, MagicDefense:0, Speed:0, CriticalChance:0, CriticalDamage:0, Evasion:0, Accuracy:0};
	var update = false;
	var skills = [{keyElement:'', skillName:'',    BaseAttribute:0, Accuracy:0}];
    return{
        setTpl_monster:function(str){
            tpl_monster = str;
        },

        getTpl_monster:function(){
            return tpl_monster;
        },
		
		setSkills:function(str){
            skills = str;
        },

        getSkills:function(){
            return skills;
        },
		
		setUpdate: function(up){
			update = up;
		},
		
		getUpdate: function(){
			return update;
		}
    }


});

app.directive('ngConfirmClick', [
        function(){
            return {
                link: function (scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Are you sure?";
                    var clickAction = attr.confirmedClick;
                    element.bind('click',function (event) {
                        if ( window.confirm(msg) ) {
                            scope.$eval(clickAction)
                        }
                    });
                }
            };
    }])
