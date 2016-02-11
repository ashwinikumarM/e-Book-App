NORWESApp = angular.module('NORWESApp', [ 'ngRoute','NORWESApp.services','ngAnimate']);

NORWESApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            // route for the  Launching page
        .when('/', {
                templateUrl : 'partial/content.html',
                controller  : 'searchControllerData',
            })
        .otherwise({
    		redirectTo: '/'
    	});
    	}

]);