'use strict';


angular.module('myYoApp')
  .controller('HomeCtrl', function ($scope, itemsService, categoryService) {

    $scope.$emit('to-parent-homeActive');

    $scope.items = itemsService.getItems();
    $scope.categorys = categoryService.getCategorysAndId($scope.items);
  });
