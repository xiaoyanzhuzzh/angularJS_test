
'use strict';
describe('categoryService', function () {

    var categoryService, localStorageService;

    beforeEach(function () {

        module('myYoApp');

        inject(function ($injector) {

            categoryService = $injector.get('categoryService');
            localStorageService = $injector.get('localStorageService');
        });
    });

    it('should have getCategorys function and return categoryNames', function(){

      var items = [{barcode:'ITEM000001', name: '雪碧', unit:'瓶', price:3.00, category:'饮品'}];
      var categoryNames = categoryService.getCategorys(items);

      expect(categoryNames[0]).toEqual('饮品');
    });

    it('should have getCategorysAndId function and return categorys', function(){

      var items = [{barcode:'ITEM000001', name: '雪碧', unit:'瓶', price:3.00, category:'饮品'}];

      spyOn(categoryService, 'getCategorys').andReturn(['饮品']);
      spyOn(localStorageService,'set');

      var categorys = categoryService.getCategorysAndId(items);

      expect(categorys.length).toBe(1);
      expect(categorys[0].id).toEqual(0);
      expect(categorys[0].name).toEqual('饮品');

      expect(localStorageService.set.calls.length).toBe(1);
      expect(categoryService.getCategorys.calls.length).toBe(1);
    });

    describe('deleteCategory function', function () {

      var categorys, category;

      beforeEach (function () {

        categorys = [{id: 0, name: '饮品'}];
        spyOn(localStorageService,'set');
      });

      it('should have deleteCategory function and return categorys is a empty array', function(){

        category = {id: 0, name: '饮品'};

        var result = categoryService.deleteCategory(category, categorys);

        expect(result.length).toBe(0);
        expect(localStorageService.set.calls.length).toBe(1);
      });

      it('should have deleteCategory function and return categorys is the same array', function(){

        category = {id: 1, name: '水果'};

        var result = categoryService.deleteCategory(category, categorys);

        expect(result.length).toBe(1);
        expect(result[0].name).toEqual('饮品');
        expect(result[0].id).toEqual(0);

        expect(localStorageService.set.calls.length).toBe(0);
      });
    });

    describe('deleteItem function', function () {

      var category, items;

      beforeEach (function () {

        items = [{barcode:'ITEM000001', name: '雪碧', unit:'瓶', price:3.00, category:'饮品'}];
        spyOn(localStorageService,'set');
      });

      it('should have deleteItem function and return items is a empty array', function(){

        category = {id: 1, name: '饮品'};

        var result = categoryService.deleteItem(category, items);

        expect(result.length).toBe(0);
        expect(localStorageService.set.calls.length).toBe(1);
      });

      it('should have deleteItem function and return categorys is the same array', function(){

        category = {id: 0, name: '水果'};

        var result = categoryService.deleteItem(category, items);

        expect(result.length).toBe(1);
        expect(result[0].category).toEqual('饮品');
        expect(result[0].name).toEqual('雪碧');

        expect(localStorageService.set.calls.length).toBe(1);
      });
    });

    describe('changeCategory function', function () {

      var categorys, category;

      beforeEach (function () {

        categorys = [{id: 0, name: '饮品'}];
        spyOn(localStorageService,'set');
      });

      it('should have changeCategory function and return changed categorys', function(){

        category = {id: 0, name: '饮品'};

        var result = categoryService.changeCategory(category, categorys);

        expect(result.length).toBe(1);
        expect(result[0].name).toEqual('饮品');
        expect(result[0].id).toBe(0);
        expect(localStorageService.set.calls.length).toBe(1);
      });

      it('should have changeCategory function and return the same categorys', function(){

        category = {id: 1, name: '水果'};

        var result = categoryService.changeCategory(category, categorys);

        expect(result.length).toBe(1);
        expect(result[0].name).toEqual('饮品');
        expect(result[0].id).toBe(0);
        expect(localStorageService.set.calls.length).toBe(0);
      });
    });


    describe('changeItem function', function () {

      var category, items;

      beforeEach(function () {

        items = [{barcode:'ITEM000001', name: '雪碧', unit:'瓶', price:3.00, category:'饮品'}];
        spyOn(localStorageService,'set');

      });

      it('should have changeItem function and return changed items', function(){

        spyOn(localStorageService,'get').andReturn({id: 0, name:'饮品'});
        category = {id: 0, name: '饮品t'};

        var result = categoryService.changeItem(category, items);

        expect(result.length).toBe(1);
        expect(result[0].category).toEqual('饮品t');

        expect(localStorageService.set.calls.length).toBe(2);
        expect(localStorageService.get.calls.length).toBe(1);
      });

      it('should have changeItem function and return the same items', function(){

        spyOn(localStorageService,'get').andReturn({id: 0, name:'水果'});
        category = {id: 0, name: '水果f'};

        var result = categoryService.changeItem(category, items);

        expect(result.length).toBe(1);
        expect(result[0].category).toEqual('饮品');
        expect(result[0].name).toEqual('雪碧');

        expect(localStorageService.set.calls.length).toBe(1);
        expect(localStorageService.get.calls.length).toBe(1);
      });
   });
});
