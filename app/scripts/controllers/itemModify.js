'use strict';


angular.module('myYoApp')
  .controller('ItemModifyCtrl', function ($scope, itemManagementService) {

    $scope.items = Util.localStorage.getStorageItem('items');

    $scope.deleteCurrentItem = function (item) {

      $scope.items = itemManagementService.deleteItem($scope.items, item);
    };

    $scope.showItemSignal = false;

    $scope.modifyCurrentItem = function () {

      $scope.showItemSignal = true;

    };

    $scope.cancelButton = function () {

      $scope.showItemSignal = false;
    };

    $scope.modifyItemButton = function (item) {

      $scope.items.push(item);
    }
  });
