

angular.module('myYoApp')
  .service('categoryService', function(){

        this.getCategorys = function (items) {

          var categorys = [];

          for (var i = 0; i < items.length; i++) {

            if (!_.contains(categorys, items[i].category)) {

              categorys.push(items[i].category);
              Util.localStorage.setStorageItem('categorys', categorys);
            }
          }
          return Util.localStorage.getStorageItem('categorys');
        };

        this.deleteCategory = function (categorys, category) {
          for (var i = 0; i < categorys.length; i++){

            if(category === categorys[i]){

              categorys = _.without(categorys, categorys[i]);
              Util.localStorage.setStorageItem('categorys', categorys);
            }
          }
          return Util.localStorage.getStorageItem('categorys');
        };

        this.deleteItem = function (items,category) {
          for(var i = 0; i < items.length; i++){
            if(items[i].category === category){
              items = _.without(items, items[i]);
            }
          }
          Util.localStorage.setStorageItem('items', items);
          return Util.localStorage.getStorageItem('items');
        };
  });
