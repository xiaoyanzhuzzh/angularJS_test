'use strict';

/**
 * @ngdoc function
 * @name myYoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myYoApp
 */
angular.module('myYoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
