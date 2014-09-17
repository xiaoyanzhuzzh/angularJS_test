'use strict';
describe('itemsService', function () {

    var itemsService,localStorageService;

    beforeEach(function () {

        module('myYoApp');

        inject(function ($injector) {

            itemsService = $injector.get('itemsService');
            localStorageService = $injector.get('localStorageService');
        });
    });

    it ('should load all the same items', function(){

      var items = itemsService.getItems();

      expect(items.length).toBe(6);
      expect(items[0].barcode).toEqual('ITEM000000');
      expect(items[1].name).toEqual('雪碧');
      expect(items[2].category).toEqual('水果');
    });

    it ('should have get function', function(){


      spyOn(localStorageService, 'get');
      itemsService.get('items');

      expect(localStorageService.get.calls.length).toBe(1);
    });

    it ('should load all the same items', function(){

      var cartCount = 9;
      spyOn(localStorageService, 'set');
      itemsService.set('cartCount', cartCount);

      expect(localStorageService.set.calls.length).toBe(1);
    });
});
