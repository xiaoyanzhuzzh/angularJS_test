'use strict';
describe('addToCartService', function () {

    var addToCartService, localStorageService;

    beforeEach(function () {

        module('myYoApp');

        inject(function ($injector) {

            addToCartService = $injector.get('addToCartService');
            localStorageService = $injector.get('localStorageService');
        });
    });

    it ('should have isExistInCart function and return undefined because category.length is 0', function(){

      var barcode = 'ITEM000000';
      var cartItems = [];
      var result = addToCartService.isExistInCart(barcode, cartItems);

      expect(result).toBe(undefined);
    });

    it ('should have isExistInCart function and return undefined because the barcodes id not equal', function(){

      var barcode = 'ITEM000000';
      var item = {barcode:'ITEM000001', name: '雪碧', unit:'瓶', price:3.00, category:'饮品'};
      var cartItems = [{item: item, number: 1}];
      var result = addToCartService.isExistInCart(barcode, cartItems);

      expect(result).toBe(undefined);
    });

    it ('should have isExistInCart function and return cartItem', function(){

      var barcode = 'ITEM000001';
      var item = {barcode:'ITEM000001', name: '雪碧', unit:'瓶', price:3.00, category:'饮品'};
      var cartItems = [{item: item, number: 1}];
      var result = addToCartService.isExistInCart(barcode, cartItems);

      expect(result).toEqual(cartItems[0]);
    });

    describe('getCartItems', function (){

       it ('should load cartItems to localStorage', function () {

         var item = {barcode:'ITEM000001', name: '雪碧', unit:'瓶', price:3.00, category:'饮品'};
         var cartItems = [{item: item, number: 1}];
         spyOn(addToCartService, 'isExistInCart').andReturn(undefined);
         spyOn(localStorageService, 'set');
         addToCartService.getCartItems(item, cartItems);

         expect(addToCartService.isExistInCart.calls.length).toBe(1);
       });

       it ('should load cartItems to localStorage', function () {

         var item = {barcode:'ITEM000001', name: '雪碧', unit:'瓶', price:3.00, category:'饮品'};
         var cartItems = {item: item, number: 1};

         spyOn(addToCartService, 'isExistInCart').and.returnValue(cartItems);
         spyOn(localStorageService, 'set');

         addToCartService.getCartItems(item, cartItems);

         expect(addToCartService.isExistInCart.calls.count()).toBe(1);
       });
    });
});
