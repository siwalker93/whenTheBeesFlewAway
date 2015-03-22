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
    
    var headerImagePaths = {};
    headerImagePaths["home"] = "content/img/headers/project-header-1170.png";
    headerImagePaths["project"] = "content/img/headers/project-header-1170.png";
    headerImagePaths["film"] = "content/img/headers/project-header-1170.png";
    headerImagePaths["people"] = "content/img/headers/project-header-1170.png";
    headerImagePaths["bees"] = "content/img/headers/project-header-1170.png";
    headerImagePaths["pledge"] = "content/img/headers/project-header-1170.png";
    
    
    
    $scope.changeTab = function(tabName){
        $scope.currentTab = tabName;
    }
    
    $scope.isCurrentTab = function(tabName){
        return $scope.currentTab == tabName;
    }
    
    $scope.getBackgroundImage = function(){
        var imagePath = backgroundImagePaths[$scope.currentTab];
        return {'background-image': 'url("' + imagePath + '")',
                'background-rep': 'no-repeat'};
    }
}]);
