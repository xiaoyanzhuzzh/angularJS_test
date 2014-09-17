'use strict';


angular.module('myYoApp')
    .controller('indexCtrl', function ($scope, itemsService) {

        $scope.cartCount = itemsService.get('cartCount');

        $scope.$on('to-parent-cartCount', function () {

          if(!$scope.cartCount){

              $scope.cartCount = 0;
          }
          itemsService.set('cartCount', ++$scope.cartCount);
        });

        $scope.$on('to-parent-homeActive', function () {
          $scope.homeActive = true;
          $scope.itemsListActive = false;
          $scope.cartItemsListActive = false;
          $scope.cartPayListActive = false;
      });

      $scope.$on('to-parent-itemsListActive', function () {
          $scope.homeActive = false;
          $scope.itemsListActive = true;
          $scope.cartItemsListActive = false;
          $scope.cartPayListActive = false;
      });

      $scope.$on('to-parent-cartItemsListActive', function () {
          $scope.homeActive = false;
          $scope.itemsListActive = false;
          $scope.cartItemsListActive = true;
          $scope.cartPayListActive = false;
      });

      $scope.$on('to-parent-cartPayListActive', function () {
          $scope.homeActive = false;
          $scope.itemsListActive = false;
          $scope.cartItemsListActive = false;
          $scope.cartPayListActive = true;
      });
});
