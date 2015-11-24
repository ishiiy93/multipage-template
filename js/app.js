var myApp = angular.module('myApp', ['ui.router'])
// Config route provider
.config(function($stateProvider) {
    $stateProvider
  .state('home', {
    url:'/',
    templateUrl: 'templates/home.html',
    controller: 'HomeController',
  })
  .state('content', {
    url:'/content',
    templateUrl: 'templates/content.html',
    controller: 'ContentController',
  })
  .state('about', {
    url:'/about',
    templateUrl: 'templates/aboutMe.html',
    controller: 'AboutController',
  })
})

// Home page controller
.controller('HomeController', function($scope){
  $scope.number = 20
})

// About Me page controller
.controller('AboutController', function($scope, $http){
  $http.get('data/aboutMe.json')
         .then(function(result){
            $scope.aboutText = result.data;                
          });
})

// Project page controller
.controller('ContentController', function($scope, $http){
  $http.get('data/projectInfo.json')
         .then(function(result){
            $scope.projInfo = result.data;                
          });
})

