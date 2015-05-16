'use strict';
app.controller('homeController', ['$scope', function ($scope) {
    //Sets start tab
    $scope.currentTab = 'home';
    
    //ng-src = "{{backgroundImagePaths[currentTab]}}"
    
    $scope.backgroundImage;
    
    //What background image should be shown for each tab
    var backgroundImagePaths = {
                home : { 
                724: "content/img/backgrounds/paper-texture.png",
                940: "content/img/backgrounds/paper-texture.png",
                1170: "content/img/backgrounds/paper-texture.png"
                },
                project : { 
                724: "content/img/backgrounds/project-background-1170.png",
                940: "content/img/backgrounds/project-background-1170.png",
                1170: "content/img/backgrounds/project-background-1170.png"
                },
                film : { 
                724: "content/img/backgrounds/film-background-724.png",
                940: "content/img/backgrounds/film-background-940.png",
                1170: "content/img/backgrounds/film-background-1170.png"
                },
                people : { 
                724: "content/img/backgrounds/people-background-1170.png",
                940: "content/img/backgrounds/people-background-1170.png",
                1170: "content/img/backgrounds/people-edit-1170.png"
                },
                bees : { 
                724: "content/img/backgrounds/paper-texture.png",
                940: "content/img/backgrounds/paper-texture.png",
                1170: "content/img/backgrounds/paper-texture.png"
                },
                pledge : { 
                724: "content/img/backgrounds/paper-texture.png",
                940: "content/img/backgrounds/paper-texture.png",
                1170: "content/img/backgrounds/paper-texture.png"
                }
    }
    
    window.onresize = function() {
  if (window.innerWidth >= 992) { 
            $scope.backgroundImage = backgroundImagePaths[$scope.currentTab][1170];
        }
        else if (window.innerWidth >= 768) {  
            $scope.backgroundImage = backgroundImagePaths[$scope.currentTab][940];
        }
        else if (window.innerWidth < 768) { 
            $scope.backgroundImage = backgroundImagePaths[$scope.currentTab][724];
        }
        $scope.$apply();
    }
    
    
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
        if (window.innerWidth >= 992) { 
            $scope.backgroundImage = backgroundImagePaths[$scope.currentTab][1170];
        }
        else if (window.innerWidth >= 768) {  
            $scope.backgroundImage = backgroundImagePaths[$scope.currentTab][940];
        }
        else if (window.innerWidth < 768) { 
            $scope.backgroundImage = backgroundImagePaths[$scope.currentTab][724];
        }
        
        return {'background-image': 'url("' + $scope.backgroundImage + '")',
                'background-repeat': 'no-repeat'};
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