angular.module('app').config(function($routeProvider) {
	$routeProvider
        .when("/", {
            templateUrl : "./search.html",
            controller: 'search'
        })
        .when("/search", {
            templateUrl : "./search.html",
            controller: 'search'
        })
        .when("/monsterData", {
            templateUrl : "./monsterData.html",
            controller: 'monster',
            resolve: { 
                images: function($route, $http){
                     $route.current.params.images = $http.get("http://games123-moraes001.rhcloud.com/api/monster/images").then(function(response){
		                return response.data;
	                });
                },
                types: function($route, $http){
                     $route.current.params.types = $http.get("http://games123-moraes001.rhcloud.com/api/type").then(function(response){
		                return response.data;
	                });
                },
                targets: function($route, $http){
                     $route.current.params.targets = $http.get("http://games123-moraes001.rhcloud.com/api/target").then(function(response){
		                return response.data;
	                });
                },
                keyElements: function($route, $http){
                     $route.current.params.keyElements = $http.get("http://games123-moraes001.rhcloud.com/api/keyElement").then(function(response){
		                return response.data;
	                });
                }
            }
        })
        .when("/searchType", {
            templateUrl : "./type/searchType.html",
            controller: 'searchType'
        })
        .when("/typeRegister", {
            templateUrl : "./type/typeRegister.html",
            controller: 'type'
        })
        .when("/searchKeyElement", {
            templateUrl : "./keyElement/searchKeyElement.html",
            controller: 'searchKeyElement'
        })
        .when("/keyElementRegister", {
            templateUrl : "./keyElement/keyElementRegister.html",
            controller: 'keyElement'
        })
        .when("/searchTarget", {
            templateUrl : "./target/searchTarget.html",
            controller: 'searchTarget'
        })
        .when("/targetRegister", {
            templateUrl : "./target/targetRegister.html",
            controller: 'target'
        });
});
