'use strict';


angular.module('myYoApp')
    .controller('CategoryModifyCtrl', function ($scope, categoryService) {

        $scope.items = Util.localStorage.getStorageItem('items');

        $scope.categorys = categoryService.getCategorysAndId($scope.items);
        //$scope.categorys = Util.localStorage.getStorageItem('categorys');

        $scope.deleteCurrentCategory = function (category) {

          $scope.categorys = categoryService.deleteCategory($scope.categorys, category);
          $scope.items = categoryService.deleteItem($scope.items, category);
          console.log($scope.items);
        };

        $scope.modifySignal = false;

        $scope.modifyCurrentCategory = function () {

          $scope.modifySignal = true;
        };

        $scope.changeCurrentCategory = function (category) {

          categoryService.changeCategory(category, $scope.categorys);
        };

        $scope.cancelModify = function () {

          $scope.modifySignal = false;
        };
    });
