'use strict';


angular.module('myYoApp')
    .controller('ItemsListCtrl', function ($scope, itemsService, addToCartService) {

      $scope.$emit('to-parent-itemsListActive');

      $scope.items = itemsService.get('items');

      $scope.cartItems = itemsService.get('cartItems');

      $scope.addToCart = function(item) {

        $scope.$emit('to-parent-cartCount');

        if (!$scope.cartItems) {
          $scope.cartItems = [];
        }
        addToCartService.getCartItems(item, $scope.cartItems);
      };
  });
