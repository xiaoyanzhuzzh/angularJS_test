'use strict';


angular.module('myYoApp')
  .controller('ItemModifyCtrl', function ($scope, itemsService, categoryService, itemManagementService) {

    $scope.items = itemsService.get('items');

    $scope.categorys = itemsService.get('categorys');

    $scope.showItemSignal = false;

    $scope.modifyButton = function (changingItem) {

      $scope.showItemSignal = true;
      itemsService.set('changingItem', changingItem);
    };

    $scope.cancelButton = function () {

      $scope.showItemSignal = false;
    };

    $scope.deleteCurrentItem = function (item) {

      $scope.items = itemManagementService.deleteItem($scope.items, item);
    };

    $scope.modifyCurrentItem = function (newItem) {

      $scope.items = itemManagementService.modifyItem(newItem, $scope.items);
    };

  });
