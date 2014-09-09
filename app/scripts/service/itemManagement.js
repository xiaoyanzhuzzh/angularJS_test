'use strict';
angular.module('myYoApp')
  .service('itemManagementService', function(){

        this.deleteItem = function (items, item) {
          for (var i = 0; i < items.length; i++){

            if(item.name === items[i].name){

              items = _.without(items, items[i]);
              Util.localStorage.setStorageItem('items', items);
            }
          }
          return Util.localStorage.getStorageItem('items');
        };

  });
