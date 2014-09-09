'use strict';


angular.module('myYoApp')
    .controller('CategoryAddCtrl', function ($scope, categoryService) {

        $scope.items = Util.localStorage.getStorageItem('items');

        $scope.categorys = categoryService.getCategorys($scope.items);

        $scope.deleteCurrentCategory = function (item) {

          $scope.categorys = categoryService.deleteCategory($scope.categorys, category);
          $scope.items = categoryService.deleteItem($scope.items, category);
        };
    });
