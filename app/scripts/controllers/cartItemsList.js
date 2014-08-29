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

      function getTotalNumber(cartItems) {
        return cartItemOperateService.getTotalNumber(cartItems);
      }

      function getTotalMoney(cartItems) {
        return cartItemOperateService.getTotalMoney(cartItems);
      }

      function getTotalNumberAndMoney() {
        $scope.total = getTotalMoney($scope.cartItems);
        $scope.totalNumber = getTotalNumber($scope.cartItems);
      }

       $scope.cartItems = Util.localStorage.getStorageItem('cartItems');

       getTotalNumberAndMoney();

       $scope.changeCartItemNumber = function(cartItem){

          cartItemOperateService.changeCurrentCartItemNumber(cartItem, $scope.cartItems);

          getTotalNumberAndMoney();

          $scope.$parent.cartCount = getTotalNumber($scope.cartItems);
       };

       $scope.addCartItemNumber = function(cartItem){

           cartItemOperateService.addCartItemNumber(cartItem, $scope.cartItems);

           getTotalNumberAndMoney();

           $scope.$parent.cartCount = getTotalNumber($scope.cartItems);

       };

       $scope.reduceCartItemNumber = function(cartItem){

           cartItemOperateService.reduceCartItemNumber(cartItem, $scope.cartItems);

           getTotalNumberAndMoney();

           $scope.$parent.cartCount = getTotalNumber($scope.cartItems);

       };

       $scope.deleteCartItem = function(cartItem){

          $scope.cartItems = cartItemOperateService.deleteCartItem(cartItem, $scope.cartItems);

          getTotalNumberAndMoney();

          $scope.$parent.cartCount = getTotalNumber($scope.cartItems);
       };

  });
