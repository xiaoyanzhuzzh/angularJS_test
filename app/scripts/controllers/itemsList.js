'use strict';


angular.module('myYoApp')
    .controller('ItemsListCtrl', function ($scope, itemsService, addToCartService) {

        $scope.items = itemsService.getItems();

        $scope.cartItems = Util.localStorage.getStorageItem('cartItems');

        $scope.addToCart = function(item) {

          // $scope.$parent.addCartCount();

          if (!$scope.cartItemscartItems) {
            $scope.cartItems = [];
          }

          var cartItem = addToCartService.isExistInCart(item.barcode, $scope.cartItems);

          if (cartItem) {
            cartItem.number += 1;
          }
          else{
            $scope.cartItems.push({item: item, number: 1});
          }

          Util.localStorage.setStorageItem('cartItems', $scope.cartItemscartItems);

        };
  });
