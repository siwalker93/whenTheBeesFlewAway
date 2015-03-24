
var app = angular.module('filmApp', ['ngRoute', 'ngAnimate']);

app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/app/views/home.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });
    
});

