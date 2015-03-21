'use strict';
app.controller('homeController', ['$scope', function ($scope) {
    $scope.currentTab = 'home';
    
    $scope.changeTab = function(tabName){
        $scope.currentTab = tabName;
    }
    
    $scope.isCurrentTab = function(tabName){
        return $scope.currentTab == tabName;
    }
}]);