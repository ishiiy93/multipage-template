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

// Landing page controller: define $scope.number as a number
.controller('HomeController', function($scope){
  $scope.number = 20
})

// About page controller: define $scope.about as a string
.controller('AboutController', function($scope, $http){
  $http.get('/home/user/artist_names.json')
         .then(function(result){
            $scope.projInfo = result.data;                
          });
  $scope.about = "Here's some information about this page."
})

// Content controller: define $scope.url as an image
.controller('ContentController', function($scope){
  $scope.url = "http://conference.unavsa.org/wp-content/uploads/2015/06/SEA-pic.jpg"
})

