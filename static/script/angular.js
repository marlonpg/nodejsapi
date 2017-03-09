var app = angular.module('app', []);
app.controller('monster', function($scope, $http, factoryService) {
	$scope.imgs = {};
	$scope.tpl_monster = factoryService.getTpl_monster();
	$scope.imgs.model = null;
    $http.get("http://games123-moraes001.rhcloud.com/api/monster/images").then(function(response){
		$scope.imgs.name = response.data;
	});
	var tpl_monster = {};
	var skills = [{type: '', baseDamage:0, baseAttribute:'', accuracy:0}];
	$scope.isUpdate = factoryService.getUpdate();;
	$scope.isSave = !$scope.isUpdate;
	factoryService.setUpdate(false);
	$scope.tpl_monster.skills = factoryService.getSkills();
	
	factoryService.setTpl_monster(tpl_monster);
	factoryService.setSkills(skills);
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
		var res = $http.post('http://games123-moraes001.rhcloud.com/api/tpl_monster', tpl_monster);
		$scope.tpl_monster={};
		$scope.tpl_monster.skills = [{type: '', baseDamage:0, baseAttribute:'', accuracy:0}];
	};
	$scope.reset = function(){
		$scope.tpl_monster={};
		$scope.tpl_monster.skills = [{type: '', baseDamage:0, baseAttribute:'', accuracy:0}];
	};
	$scope.update = function(tpl_monster){
		$http.put('http://games123-moraes001.rhcloud.com/api/tpl_monster',tpl_monster);
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
		factoryService.setSkills(tpl_monster.skills);
		factoryService.setTpl_monster(tpl_monster);
		factoryService.setUpdate(true);
	};
	$scope.deleteMonster = function(tpl_monster){
		$http.delete('http://games123-moraes001.rhcloud.com/api/tpl_monster/'+ tpl_monster._id).then(function (response) {
			if (response.data){
				var index = $scope.tpl_monster.items.indexOf(tpl_monster);
				$scope.tpl_monster.items.splice(index,1);
			}
		});
	};
	
});
app.factory('factoryService',function(){

	var tpl_monster = {};
	var update = false;
	var skills = [{type: '', baseDamage:0, baseAttribute:'', accuracy:0}];
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
