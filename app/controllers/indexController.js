'use strict';
app.controller('indexController', ['$scope', function ($scope) {

    
}]);

$( window ).scroll(function() {
  console.log('Event Fired');

  $(".title_cards").slideUp(500);
});