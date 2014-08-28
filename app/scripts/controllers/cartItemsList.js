'use strict';

/**
 * @ngdoc function
 * @name myYoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myYoApp
 */
angular.module('myYoApp')
  .controller('CartItemsListCtrl', function ($scope, cartItemOperateService) {
       $scope.cartItems = Util.localStorage.getStorageItem('cartItems');

       $scope.total = cartItemOperateService.getTotalMoney($scope.cartItems);

       $scope.totalNumber = cartItemOperateService.getTotalNumber($scope.cartItems);

       $scope.changeCartItemcart = function(cartItem){

          cartItemOperateService.changeCurrentCartItemNumber(cartItem, $scope.cartItems);
          $scope.total = cartItemOperateService.getTotalMoney($scope.cartItems);
          $scope.totalNumber = cartItemOperateService.getTotalNumber($scope.cartItems);
          $scope.$parent.cartCount = cartItemOperateService.getTotalNumber($scope.cartItems);
       };

       $scope.addCartItemNumber = function(cartItem){

           cartItemOperateService.addCartItemNumber(cartItem, $scope.cartItems);
           $scope.total = cartItemOperateService.getTotalMoney($scope.cartItems);
           $scope.totalNumber = cartItemOperateService.getTotalNumber($scope.cartItems);
           $scope.$parent.cartCount = cartItemOperateService.getTotalNumber($scope.cartItems);

       };

       $scope.reduceCartItemNumber = function(cartItem){

           cartItemOperateService.reduceCartItemNumber(cartItem, $scope.cartItems);
           $scope.total = cartItemOperateService.getTotalMoney($scope.cartItems);
           $scope.totalNumber = cartItemOperateService.getTotalNumber($scope.cartItems);
           $scope.$parent.cartCount = cartItemOperateService.getTotalNumber($scope.cartItems);

       };

       $scope.deleteCartItem = function(cartItem){

          $scope.cartItems = cartItemOperateService.deleteCartItem(cartItem, $scope.cartItems);
          $scope.total = cartItemOperateService.getTotalMoney($scope.cartItems);
          $scope.totalNumber = cartItemOperateService.getTotalNumber($scope.cartItems);
          $scope.$parent.cartCount = cartItemOperateService.getTotalNumber($scope.cartItems);
       };

  });
