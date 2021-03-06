'use strict';

angular.module('myYoApp')
  .controller('CartItemsListCtrl', function ($scope, itemsService, cartItemOperateService) {

  function getTotalNumber(cartItems) {
    return cartItemOperateService.getTotalNumber(cartItems);
  }

  function getTotalMoney(cartItems) {
    return cartItemOperateService.getTotalMoney(cartItems);
  }

  function updateTotalAndTotalNumber() {
    $scope.total = getTotalMoney($scope.cartItems);
    $scope.totalNumber = getTotalNumber($scope.cartItems);
  }

  function updateData() {
    updateTotalAndTotalNumber();
    $scope.$parent.cartCount = getTotalNumber($scope.cartItems);
  }

  $scope.$emit('to-parent-cartItemsListActive');
  $scope.cartItems = itemsService.get('cartItems');

  updateTotalAndTotalNumber();

  $scope.changeCartItemNumber = function(cartItem){
    cartItemOperateService.changeCurrentCartItemNumber(cartItem, $scope.cartItems);
    updateData();
  };

  $scope.addCartItemNumber = function(cartItem){
    cartItemOperateService.addCartItemNumber(cartItem, $scope.cartItems);
    updateData();
  };

  $scope.reduceCartItemNumber = function(cartItem){
    cartItemOperateService.reduceCartItemNumber(cartItem, $scope.cartItems);
    updateData();
  };

  $scope.deleteCartItem = function(cartItem){
    $scope.cartItems = cartItemOperateService.deleteCartItem(cartItem, $scope.cartItems);
    updateData();
  };
});
