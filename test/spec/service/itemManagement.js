'use strict';
describe('itemManagementService', function () {

    var itemManagementService, localStorageService, items;

    beforeEach(function () {

        module('myYoApp');

        inject(function ($injector) {

            itemManagementService = $injector.get('itemManagementService');
            localStorageService = $injector.get('localStorageService');
        });

        items = [{barcode:'ITEM000001', name: '雪碧', unit:'瓶', price:3.00, category:'饮品'}];
    });

    describe('deleteItem function', function () {

      it ('should have deleteItem function and return a empty array', function(){

        var item = {barcode:'ITEM000001', name: '雪碧', unit:'瓶', price:3.00, category:'饮品'};
        spyOn(localStorageService,'set');

        var result = itemManagementService.deleteItem(items, item);

        expect(result.length).toBe(0);
        expect(localStorageService.set.calls.length).toBe(1);
      });

      it ('should have deleteItem function and return items array', function(){

        var item = {barcode:'ITEM000000', name: '可口可乐', unit:'瓶', price:3.00, category:'饮品'};
        spyOn(localStorageService,'set');

        var result = itemManagementService.deleteItem(items, item);

        expect(result.length).toBe(1);
        expect(result[0].name).toEqual('雪碧');
        expect(result[0].category).toEqual('饮品');

        expect(localStorageService.set.calls.length).toBe(0);
      });
    });

    describe('modifyItem function', function () {

      var newItem;

      beforeEach(function () {

        newItem = {barcode:'ITEM000000', name: '雪碧', unit:'瓶', price:3.00, category:'饮品'};
      });

      it ('should have deleteItem function and return a new array', function(){

        var items = [{barcode:'ITEM000000', name: '可口可乐', unit:'瓶', price:3.00, category:'饮品'}];

        spyOn(localStorageService,'get').andReturn(
          {barcode:'ITEM000000', name: '可口可乐', unit:'瓶', price:3.00, category:'饮品'}
        );
        spyOn(localStorageService,'set');

        var result = itemManagementService.modifyItem(newItem, items);

        expect(result.length).toBe(1);
        expect(result[0].name).toEqual('雪碧');
        expect(result[0].category).toEqual('饮品');
        expect(localStorageService.set.calls.length).toBe(1);
      });

      it ('should have modifyItem function and return the same array', function(){

        var items = [{barcode:'ITEM000000', name: '雪碧', unit:'瓶', price:3.00, category:'饮品'}];

        spyOn(localStorageService,'get').andReturn(
          {barcode:'ITEM000000', name: '可口可乐', unit:'瓶', price:3.00, category:'饮品'}
        );
        spyOn(localStorageService,'set');

        var result = itemManagementService.modifyItem(newItem, items);

        expect(result.length).toBe(1);
        expect(result[0].name).toEqual('雪碧');
        expect(result[0].category).toEqual('饮品');
        expect(localStorageService.set.calls.length).toBe(1);
      });
    });
});
