'use strict';


angular.module('myYoApp')
    .controller('CategoryAddCtrl', function ($scope, categoryService) {

        $scope.items = Util.localStorage.getStorageItem('items');

        $scope.categorys = Util.localStorage.getStorageItem('categorys');

        $scope.deleteCurrentCategory = function (category) {

          $scope.categorys = categoryService.deleteCategory($scope.categorys, category);
          $scope.items = categoryService.deleteItem($scope.items, category);
        };

        $scope.showSignal = false;

        $scope.addCategory = function () {

          $scope.showSignal = true;

        };

        $scope.addButton = function (newCategory) {

          $scope.categorys.push(newCategory);
          Util.localStorage.setStorageItem('categorys', $scope.categorys);

          $scope.showSignal = false;
        };
    });
