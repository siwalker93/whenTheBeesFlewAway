'use strict';
app.controller('indexController', ['$scope', function ($scope) {
	$('.small_display_splash.h1').css('height', $( window ).innerHeight());

	$scope.popupHeight = $window.innerHeight;
	console.log($scope.popupHeight);
  
}]);

$( window ).scroll(function() {
  $(".title_cards").slideUp(500);
});