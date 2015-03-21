
var app = angular.module('filmApp', ['ngRoute']);

app.directive("scroll", function ($window) {
    return function(scope, $element, attrs) {
        angular.element($window).bind("scroll", function() {
           
            scope.boolChangeClass = true;

            scope.$apply();
        });
    };
});


app.directive('scrollOnClick', function() {
  return {
    restrict: 'A',
    link: function(scope, $elm) {
      $elm.on('click', function() {
        $("body").animate({scrollTop: $elm.offset().top}, "slow");
      });
    }
  }
});

app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/app/views/home.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });
    
});

