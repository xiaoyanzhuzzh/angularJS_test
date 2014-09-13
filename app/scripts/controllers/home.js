'use strict';


angular.module('myYoApp')
  .controller('HomeCtrl', function ($scope, categoryService) {

    $scope.items = itemsService.getItems();
    categoryService.getCategorysAndId($scope.items);
  });
