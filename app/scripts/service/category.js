

angular.module('myYoApp')
  .service('categoryService', function(){

        this.getCategorys = function (items) {

          var categoryNames = [];

          for (var i = 0; i < items.length; i++) {

            if (!_.contains(categoryNames, items[i].category)) {

              categoryNames.push(items[i].category);
              Util.localStorage.setStorageItem('categoryNames', categoryNames);
            }
          }
          return Util.localStorage.getStorageItem('categoryNames');
        };

        this.getCategorysAndId = function (items) {

          var categoryNames = this.getCategorys(items);
          var categorys = [];

          for (var i = 0; i < categoryNames.length; i++) {

            categorys.push({id: i, name: categoryNames[i]});
            Util.localStorage.setStorageItem('categorys', categorys);
          }
          return Util.localStorage.getStorageItem('categorys');
        };


        this.deleteCategory = function (categorys, category) {
          for (var i = 0; i < categorys.length; i++){

            if(category.id === categorys[i].id){

              categorys = _.without(categorys, categorys[i]);
              Util.localStorage.setStorageItem('categorys', categorys);
            }
          }
          return Util.localStorage.getStorageItem('categorys');
        };

        this.deleteItem = function (items,category) {

          for(var i = 0; i < items.length; i++){

            if(items[i].category === category.name){

              items = _.without(items, items[i]);
              i--;
            }
          }
          Util.localStorage.setStorageItem('items', items);
          return Util.localStorage.getStorageItem('items');
        };

        this.changeCurrentCategory = function (categorys, categorys) {

          for (var i = 0; i < categorys.length; i++){

            if(category.name === categorys[i].name){

              categorys[i].name = category.name;
              Util.localStorage.setStorageItem('categorys', categorys);
            }
          }
        };
  });
