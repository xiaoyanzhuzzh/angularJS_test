'use strict';


angular.module('myYoApp')
  .controller('ItemModifyCtrl', function ($scope, categoryService, itemManagementService) {

    $scope.items = Util.localStorage.getStorageItem('items');

    //$scope.categorys = categoryService.getCategorysAndId($scope.items);
    $scope.categorys = Util.localStorage.getStorageItem('categorys');

    $scope.deleteCurrentItem = function (item) {

      $scope.items = itemManagementService.deleteItem($scope.items, item);
    };

    $scope.showItemSignal = false;

    $scope.modifyButton = function () {

      $scope.showItemSignal = true;

    };

    $scope.modifyItem = function (item) {

      console.log(items);
      $scope.items.push(item);
    };

    $scope.cancelButton = function () {

      $scope.showItemSignal = false;
    };


  });
