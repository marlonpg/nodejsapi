angular.module('app').controller('main', function($scope, $http, factoryService) {
	$scope.pages =
    [{ name: './search.html', url: './search.html'},
     { name: './monsterData.html', url: './monsterData.html'},
	 { name: './searchType.html', url: './type/searchType.html'},
	 { name: './typeRegister.html', url: './type/typeRegister.html'},
	 { name: './searchKeyElement.html', url: './keyElement/searchKeyElement.html'},
	 { name: './keyElementRegister.html', url: './keyElement/keyElementRegister.html'},
	 { name: './searchTarget.html', url: './target/searchTarget.html'},
	 { name: './targetRegister.html', url: './target/targetRegister.html'}];
	$scope.page = $scope.pages[0];
	$scope.changePage = function(page){
		$scope.page = $scope.pages[page];
	};
});
