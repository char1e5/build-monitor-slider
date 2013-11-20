'use strict';

/* Services */

var sliderServices = angular.module('sliderServices', ['ngResource']);

sliderServices.factory('Slide', ['$resource',
  function($resource){
    return $resource('reports/:fileName.json', {}, {
      query: {method:'GET', params:{fileName:'file'}, isArray:true}
    });
  }]);
