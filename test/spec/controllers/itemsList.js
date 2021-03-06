'use strict';
describe('Controller: ItemsListCtrl', function () {

  var $scope, itemsService, createController, addToCartService;

  beforeEach(function () {
    module('myYoApp');

    inject(function ($injector) {

        $scope = $injector.get('$rootScope').$new();
        itemsService = $injector.get('itemsService');
        addToCartService = $injector.get('addToCartService');

        var $controller = $injector.get('$controller');

        createController = function () {
          return $controller ('ItemsListCtrl', {
               $scope: $scope,
               itemsService: itemsService,
               addToCartService: addToCartService,
          });
        };
    });
  });

  describe ('allItems', function () {
      beforeEach(function () {
          var items = [
                 {barcode:'ITEM000000', name: '可口可乐', unit: '瓶', price:3.00, category:'饮品'},
                 {barcode:'ITEM000001', name: '雪碧', unit:'瓶', price:3.00, category:'饮品'}
              ];

          spyOn(itemsService, 'get').andReturn(items);
          createController();

    });

    it ('The length should be 2', function () {
        expect($scope.items.length).toBe(2);
    });

    it ('should has items barcode', function () {
        expect($scope.items[0].barcode).toEqual('ITEM000000');
    });

    it ('should has items name', function () {
         expect($scope.items[1].name).toEqual('雪碧');
    });

    it ('should has items unit', function () {
        expect($scope.items[0].unit).toEqual('瓶');
    });

    it ('should has items price', function () {
        expect($scope.items[0].price).toEqual(3.00);
    });

    it ('should has items category', function () {
         expect($scope.items[1].category).toEqual('饮品');
    });

  });

  describe ('cartItems',function () {

    it ('should load cartItems from localStorage', function () {

      spyOn(itemsService, 'get');

      createController();

      expect(itemsService.get.calls.length).toBe(2);
    });
  });

  describe ('addToCart can make existed cartItem number add by 1', function () {

    var item;

    beforeEach(function () {

      item = [{barcode:'ITEM000000', name: '可口可乐', unit: '瓶', price:3.00, category:'饮品'}];

      spyOn(itemsService, 'get').andReturn(undefined);
      spyOn(addToCartService, 'getCartItems');

      createController();
    });

    it ('function should have been called', function () {

      $scope.addToCart(item[0]);

      expect(itemsService.get.calls.length).toBe(2);
      expect(addToCartService.getCartItems.calls.length).toBe(1);
    });
  });

  describe ('addToCart can add item to cartItem', function () {

    var itemA, itemB;

    beforeEach(function () {

      itemA = {barcode:'ITEM000000', name: '可口可乐', unit: '瓶', price:3.00, category:'饮品'};
      itemB = {barcode:'ITEM000001', name: '雪碧', unit:'瓶', price:3.00, category:'饮品'};

      spyOn(itemsService, 'get').andReturn(

          [{item: {barcode:'ITEM000001', name: '雪碧', unit:'瓶', price:3.00, category:'饮品'},number: 1}]
      );
    });

    it ('function should have been called and can add different to cart', function () {

      spyOn(addToCartService, 'getCartItems');
      createController();
      $scope.addToCart(itemA);

      expect(itemsService.get.calls.length).toBe(2);
      expect(addToCartService.getCartItems.calls.length).toBe(1);
    });

    it ('function should have been called and can make the same cartItem number add by 1', function () {

      spyOn(addToCartService, 'getCartItems').andReturn(

        {item: {barcode:'ITEM000001', name: '雪碧', unit:'瓶', price:3.00, category:'饮品'},number: 1}
      );
      createController();
      $scope.addToCart(itemB);

      expect(addToCartService.getCartItems.calls.length).toBe(1);
      expect(itemsService.get.calls.length).toBe(2);
    });
  });
});
