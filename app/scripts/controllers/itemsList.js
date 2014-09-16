'use strict';


angular.module('myYoApp')
    .controller('ItemsListCtrl', function ($scope, itemsService, addToCartService) {

        $scope.items = itemsService.get('items');

        $scope.cartItems = itemsService.get('cartItems');

        $scope.addToCart = function(item) {

          // $scope.$parent.addCartCount();

          if (!$scope.cartItems) {
            $scope.cartItems = [];
          }
          addToCartService.getCartItems(item, $scope.cartItems);
        };
  });
