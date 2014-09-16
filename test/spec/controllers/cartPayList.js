'use strict';
describe('CartPayListCtrl', function () {

   var $scope, itemsService, cartItemOperateService, createController;
   beforeEach(function () {

    module('myYoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      cartItemOperateService = $injector.get('cartItemOperateService');
      itemsService = $injector.get('itemsService');

      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller ('CartPayListCtrl', {
          $scope: $scope,
          cartItemOperateService: cartItemOperateService,
          itemsService: itemsService
        });
      };
    });
  });

  describe('cartPayList', function () {
    it('should load cartPayList', function () {

      spyOn(itemsService, 'get');
      createController();

      expect(itemsService.get.calls.length).toBe(1);
    });

    describe('totalMoney', function () {

      beforeEach(function () {

        spyOn(itemsService, 'get');
        spyOn(cartItemOperateService,'getTotalMoney').andReturn(1);
        createController();
      });

      it ('should get totalMoney', function () {

        expect($scope.total).toEqual(1);
        expect(cartItemOperateService.getTotalMoney.calls.length).toBe(1);
      });
    });

    describe('totalNumber', function () {

      beforeEach(function () {

        spyOn(itemsService, 'get');
        spyOn(cartItemOperateService,'getTotalNumber').andReturn(1);
        createController();
      });

      it ('should get totalNumber', function () {

        expect($scope.totalNumber).toEqual(1);
        expect(cartItemOperateService.getTotalNumber.calls.length).toBe(1);
        expect(itemsService.get.calls.length).toBe(1);
      });
    });
  });
});
