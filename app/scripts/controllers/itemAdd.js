'use strict';


angular.module('myYoApp')
    .controller('ItemAddCtrl', function ($scope, categoryService, itemManagementService) {

        $scope.items = Util.localStorage.getStorageItem('items');
        //$scope.categorys = categoryService.getCategorysAndId($scope.items);
        $scope.categorys = Util.localStorage.getStorageItem('categorys');

        $scope.deleteCurrentItem = function (item) {

          $scope.items = itemManagementService.deleteItem($scope.items, item);
        };

        $scope.showItemSignal = false;

        $scope.addButton = function () {

          $scope.showItemSignal = true;

        };

        $scope.cancelButton = function () {

          $scope.showItemSignal = false;
        };

        $scope.addNewItem = function (item, categoryName) {

         item.category = categoryName;
         
         $scope.items.push(item);
         Util.localStorage.setStorageItem('items', $scope.items);
         $scope.showItemSignal = false;
        }
    });
