'use strict';


angular.module('myYoApp')
    .controller('ItemAddCtrl', function ($scope, itemManagementService) {

        $scope.items = Util.localStorage.getStorageItem('items');

        $scope.deleteCurrentItem = function (item) {

          $scope.items = itemManagementService.deleteItem($scope.items, item);
        };

        $scope.showItemSignal = false;

        $scope.addItemButton = function () {

          $scope.showItemSignal = true;

        };

        $scope.cancelButton = function () {

          $scope.showItemSignal = false;
        };

        $scope.addNewItemButton = function (item) {

         $scope.items.push(item);
        }
    });
