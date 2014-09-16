'use strict';
describe('CartItemsListCtrl', function () {
  var $scope, createController, cartItemOperateService, itemsService;
   beforeEach(function () {

     module('myYoApp');

     inject(function ($injector) {

       $scope = $injector.get('$rootScope').$new();
       cartItemOperateService = $injector.get('cartItemOperateService');
       itemsService = $injector.get('itemsService');

       var $controller = $injector.get('$controller');

       createController = function () {

         return $controller ('CartItemsListCtrl', {
           $scope: $scope,
           cartItemOperateService: cartItemOperateService,
           itemsService: itemsService
         });
       };
     });
   });

  describe('cartItems function', function () {

    it('should load cartItems', function () {

      spyOn(itemsService, 'get');
      createController();

      expect(itemsService.get.calls.length).toBe(1);
    });
  });

  describe('total', function () {

    it('should load total money', function () {

      spyOn(itemsService, 'get');
      spyOn(cartItemOperateService,'getTotalMoney').andReturn(3);
      createController();

      expect($scope.total).toBe(3);
      expect(itemsService.get.calls.length).toBe(1);
    });
  });

  describe('totalNumber', function () {

    it('should load total number', function () {

      spyOn(itemsService, 'get');
      spyOn(cartItemOperateService,'getTotalNumber').andReturn(1);
      createController();

      expect($scope.totalNumber).toBe(1);
      expect(itemsService.get.calls.length).toBe(1);
    });
  });

  describe('changeCartItemNumber', function () {
    var cartItem;

    beforeEach(function () {

      cartItem = {item: {barcode:'ITEM000000', name: '可口可乐', unit: '瓶', price:3.00, category:'饮品'}, number: 2};
      spyOn(cartItemOperateService, 'getTotalMoney');
      spyOn(cartItemOperateService, 'getTotalNumber');
      spyOn(cartItemOperateService, 'changeCurrentCartItemNumber');
      createController();
    });

    it('can change the cartItem number', function () {

      $scope.changeCartItemNumber(cartItem);

      expect(cartItemOperateService.getTotalMoney.calls.length).toBe(2);
      expect(cartItemOperateService.getTotalNumber.calls.length).toBe(3);
      expect(cartItemOperateService.changeCurrentCartItemNumber.calls.length).toBe(1);
    });
  });

  describe('addCartItemNumber', function () {
    var cartItem;

    beforeEach(function () {

      cartItem = {item: {barcode:'ITEM000000', name: '可口可乐', unit: '瓶', price:3.00, category:'饮品'}, number: 2};
      spyOn(cartItemOperateService, 'getTotalMoney');
      spyOn(cartItemOperateService, 'getTotalNumber');
      spyOn(cartItemOperateService, 'addCartItemNumber');
      createController();
    });

    it('can change the cartItem number', function () {

      $scope.addCartItemNumber(cartItem);

      expect(cartItemOperateService.getTotalMoney.calls.length).toBe(2);
      expect(cartItemOperateService.getTotalNumber.calls.length).toBe(3);
      expect(cartItemOperateService.addCartItemNumber.calls.length).toBe(1);

    });

  });

  describe('reduceCartItemNumber', function () {
    var cartItem;

    beforeEach(function () {

      cartItem = {item: {barcode:'ITEM000000', name: '可口可乐', unit: '瓶', price:3.00, category:'饮品'}, number: 2};
      spyOn(cartItemOperateService, 'getTotalMoney');
      spyOn(cartItemOperateService, 'getTotalNumber');
      spyOn(cartItemOperateService, 'reduceCartItemNumber');
      createController();
    });

    it('can change the cartItem number', function () {

      $scope.reduceCartItemNumber(cartItem);

      expect(cartItemOperateService.getTotalMoney.calls.length).toBe(2);
      expect(cartItemOperateService.getTotalNumber.calls.length).toBe(3);
      expect(cartItemOperateService.reduceCartItemNumber.calls.length).toBe(1);

    });

  });

  describe('deleteCartItem', function () {
    var cartItem;

    beforeEach(function () {

      cartItem = {item: {barcode:'ITEM000000', name: '可口可乐', unit: '瓶', price:3.00, category:'饮品'}, number: 2};
      spyOn(cartItemOperateService, 'getTotalMoney');
      spyOn(cartItemOperateService, 'getTotalNumber');
      spyOn(cartItemOperateService, 'deleteCartItem');
      createController();
    });

    it('can change the cartItem number', function () {

      $scope.deleteCartItem(cartItem);

      expect(cartItemOperateService.getTotalMoney.calls.length).toBe(2);
      expect(cartItemOperateService.getTotalNumber.calls.length).toBe(3);
      expect(cartItemOperateService.deleteCartItem.calls.length).toBe(1);
    });
  });
});
