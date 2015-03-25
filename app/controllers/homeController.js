'use strict';
app.controller('homeController', ['$scope', function ($scope) {
    //Sets start tab
    $scope.currentTab = 'home';
    
    //ng-src = "{{backgroundImagePaths[currentTab]}}"
    
    //What background image should be shown for each tab
    var backgroundImagePaths = {};
    backgroundImagePaths["home"] = "content/img/backgrounds/paper-texture.png";
    backgroundImagePaths["project"] = "content/img/backgrounds/project-background-1170.png";
    backgroundImagePaths["film"] = "content/img/backgrounds/paper-texture.png";
    backgroundImagePaths["people"] = "content/img/backgrounds/paper-texture.png";
    backgroundImagePaths["bees"] = "content/img/backgrounds/paper-texture.png";
    backgroundImagePaths["pledge"] = "content/img/backgrounds/paper-texture.png";
    
    
    $scope.changeTab = function(tabName){
        $scope.currentTab = tabName;
    }
    
    $scope.isCurrentTab = function(tabName){
        return $scope.currentTab == tabName;
    }
    
    $scope.currentTabCapital = function(){
        return $scope.currentTab.charAt(0).toUpperCase() + $scope.currentTab.slice(1)
    }
    
    $scope.getBackgroundImage = function(){
        var imagePath = backgroundImagePaths[$scope.currentTab];
        return {'background-image': 'url("' + imagePath + '")',
                'background-rep': 'no-repeat'};
    }
}]);

$(window).on('load', function(){
    checkDataToggle();
});

$(window).on('resize', function(event){
    checkDataToggle();
});

function checkDataToggle(){
    var windowWidth = $(window).width();
    if(windowWidth < 992){
        $(".navbox").attr('data-toggle', 'collapse');
    }
    else{
        $(".navbox").removeAttr('data-toggle');
    }
}