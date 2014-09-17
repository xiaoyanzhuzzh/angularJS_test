'use strict';

angular.module('myYoApp')
    .controller('ItemAddCtrl', function ($scope, itemsService, itemManagementService) {

        $scope.items = itemsService.get('items');

        $scope.categorys = itemsService.get('categorys');

        $scope.showItemSignal = false;

        $scope.addButton = function () {

          $scope.showItemSignal = true;
        };

        $scope.cancelButton = function () {

          $scope.showItemSignal = false;
        };

        $scope.deleteCurrentItem = function (item) {

          $scope.items = itemManagementService.deleteItem($scope.items, item);
        };

        $scope.addNewItem = function (item, categoryName) {

         item.category = categoryName;

         $scope.items.push(item);

         itemsService.set('items', $scope.items);

         $scope.showItemSignal = false;
        }
    });
