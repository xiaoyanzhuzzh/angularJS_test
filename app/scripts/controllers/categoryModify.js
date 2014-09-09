'use strict';


angular.module('myYoApp')
    .controller('CategoryModifyCtrl', function ($scope, categoryService) {

        $scope.items = Util.localStorage.getStorageItem('items');

        //$scope.categorys = categoryService.getCategorys($scope.items);
        $scope.categorys = Util.localStorage.getStorageItem('categorys');

        $scope.deleteCurrentCategory = function (category) {

          $scope.categorys = categoryService.deleteCategory($scope.categorys, category);
          $scope.items = categoryService.deleteItem($scope.items, category);
        };

        $scope.showModify = false;
        $scope.modifyCurrentCategory = function (category) {

          $scope.showModify = true;

        };

        $scope.changeCategory = function (category) {
          console.log(category);
          for (var i = 0; i < $scope.categorys.length; i++){
            if(category === $scope.categorys[i]){
              $scope.categorys[i] = category;
              Util.localStorage.setStorageItem('categorys', $scope.categorys);
            }
          }
        };

        $scope.cancelModify = function () {

          $scope.showModify = false;
        };
    });
