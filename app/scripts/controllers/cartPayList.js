'use strict';

/**
 * @ngdoc function
 * @name myYoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myYoApp
 */
angular.module('myYoApp')
  .controller('CartPayListCtrl', function ($scope, cartItemOperateService) {

     $scope.cartPayList = Util.localStorage.getStorageItem('cartItems');
     $scope.total = cartItemOperateService.getTotalMoney($scope.cartPayList );
     $scope.totalNumber = cartItemOperateService.getTotalNumber($scope.cartPayList );

  });
