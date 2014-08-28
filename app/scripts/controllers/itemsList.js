'use strict';


angular.module('myYoApp')
    .controller('ItemsListCtrl', function ($scope, itemsService, addToCartService) {

        $scope.items = itemsService.getItems();

        $scope.addToCart = function(item) {

          //$scope.$parent.addCartCount();

          var cartItems = Util.localStorage.getStorageItem('cartItems');

          if (!cartItems) {
             cartItems = [];
          }

          var cartItem = addToCartService.isExistInCart(item.barcode, cartItems);

          if (cartItem) {
             cartItem.number += 1;
          }
          else{
             cartItems.push({item: item, number: 1});
          }

          Util.localStorage.setStorageItem('cartItems', cartItems);

        };
  });
