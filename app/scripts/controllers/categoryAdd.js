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

        $scope.addButton = function () {

            $scope.showSignal = true;

        };

        $scope.addNewCategory = function (newCategory) {

            var category = {id: $scope.categorys.length, name: newCategory};

            $scope.categorys.push(category);
            Util.localStorage.setStorageItem('categorys', $scope.categorys);

            $scope.showSignal = false;
        };

        $scope.cancelButton = function () {

          $scope.showSignal = false;
        };

    });
