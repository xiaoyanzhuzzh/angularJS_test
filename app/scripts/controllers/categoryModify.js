'use strict';

angular.module('myYoApp')
    .controller('CategoryModifyCtrl', function ($scope, itemsService, categoryService) {

        $scope.items = itemsService.get('items');

        $scope.categorys = itemsService.get('categorys');

        $scope.modifySignal = false;

        $scope.modifyCurrentCategory = function (changingCategory) {

          $scope.modifySignal = true;
          itemsService.set('changingCategory', changingCategory);
        };

        $scope.cancelModify = function () {

          $scope.modifySignal = false;
        };

        $scope.deleteCurrentCategory = function (category) {

          $scope.categorys = categoryService.deleteCategory(category, $scope.categorys);
          $scope.items = categoryService.deleteItem(category, $scope.items);
        };

        $scope.changeCurrentCategory = function (category) {

          $scope.categorys = categoryService.changeCategory(category, $scope.categorys);

          $scope.items = categoryService.changeItem(category, $scope.items);
        };


    });
