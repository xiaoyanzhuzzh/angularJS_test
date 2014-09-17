'use strict';

angular.module('myYoApp')
  .controller('CartPayListCtrl', function ($scope, itemsService, cartItemOperateService) {

     $scope.$emit('to-parent-cartPayListActive');

     $scope.cartPayList = itemsService.get('cartItems');
     $scope.total = cartItemOperateService.getTotalMoney($scope.cartPayList );
     $scope.totalNumber = cartItemOperateService.getTotalNumber($scope.cartPayList );

  });
