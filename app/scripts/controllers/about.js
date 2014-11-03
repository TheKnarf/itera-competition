'use strict';

/**
 * @ngdoc function
 * @name iteraApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the iteraApp
 */
angular.module('iteraApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
