'use strict';

angular.module('myYoApp')
    .controller('CategoryAddCtrl', function ($scope, itemsService, categoryService) {

        $scope.items = itemsService.get('items');

        $scope.categorys = itemsService.get('categorys');

        $scope.showSignal = false;

        $scope.addButton = function () {

            $scope.showSignal = true;

        };
        $scope.cancelButton = function () {

          $scope.showSignal = false;
        };

        $scope.deleteCurrentCategory = function (category) {

            $scope.categorys = categoryService.deleteCategory($scope.categorys, category);
            $scope.items = categoryService.deleteItem($scope.items, category);
        };

        $scope.addNewCategory = function (newCategory) {

            var category = {id: 0, name: newCategory};
            category.id = $scope.categorys[$scope.categorys.length - 1].id + 1;

            $scope.categorys.push(category);
            itemsService.set('categorys', $scope.categorys);

            $scope.showSignal = false;
        };
    });
