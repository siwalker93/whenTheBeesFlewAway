
var app = angular.module('filmApp', ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/app/views/home.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });
    
});

app.directive('resize', function ($window) {
	return function (scope, element) {
		var w = angular.element($window);
		scope.$watch(function () {
			return { 'h': w.height(), 'w': w.width() };
		}, function (newValue, oldValue) {
			scope.windowHeight = newValue.h;
            scope.windowWidth = newValue.w;
            
            scope.style = function () {
				return { 
                    'height': (newValue.h - 100) + 'px',
                    'width': (newValue.w - 100) + 'px' 
                };
			};
            
		}, true);
	
		w.bind('resize', function () {
			scope.$apply();
		});
	}
})
