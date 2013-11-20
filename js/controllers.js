'use strict';

/* Controllers */

var sliderControllers = angular.module('sliderControllers', []);

sliderControllers.controller('SlideCtrl', ['$scope', 'Slide',
	function($scope, Slide) {
		$scope.slides = Slide.query();

	$scope.direction = 'left';
	$scope.currentIndex = 0;

	$scope.setCurrentSlideIndex = function (index) {
		$scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
		$scope.currentIndex = index;
	};

	$scope.isCurrentSlideIndex = function (index) {
		return $scope.currentIndex === index;
	};

	$scope.nextSlide = function () {
		$scope.direction = 'left';
		$scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
	};

	$scope.prevSlide = function () {
		$scope.direction = 'right';
		$scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
	};

    var timer = setInterval(function(){
        $scope.currentIndex = (($scope.currentIndex===($scope.slides.length-1) ? 0:$scope.currentIndex+1) % ($scope.slides.length));
        $scope.$apply();
    }, 3000);

}]);
