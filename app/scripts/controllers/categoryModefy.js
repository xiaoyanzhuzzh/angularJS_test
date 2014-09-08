'use strict';


angular.module('myYoApp')
    .controller('CategoryModefyCtrl', function ($scope, itemsService) {

        $scope.items = itemsService.getItems();

        $scope.deleteCurrentCategory = function (item) {

          for (var i = 0; i < $scope.items.length; i++){

            if(item.category === $scope.items[i].category){

              $scope.items = _.without($scope.items, $scope.items[i]);
              Util.localStorage.setStorageItem('items', $scope.items);
            }
          }
        };
    });
