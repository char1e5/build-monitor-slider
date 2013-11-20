'use strict';

/* App Module */

var sliderApp= angular.module('sliderApp', [
  'ngRoute',
  'sliderControllers',
  'sliderServices'
]);

sliderApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/slides', {
          templateUrl: 'views/slides.html',
          controller: 'SlideCtrl'
      }).
      otherwise({
          redirectTo: '/slides'
      });
}]);
