'use strict';


angular.module('myYoApp')
    .controller('addCartCountCtrl', function ($scope, itemsService) {


        $scope.cartCount = itemsService.get('cartCount');

        $scope.addCartCount = function(){

            if(!$scope.cartCount){

                $scope.cartCount = 0;
            }

            itemsService.set('cartCount', ++$scope.cartCount);
        };

    });
