'use strict';
describe('addCartCountCtrl', function () {

  var $scope, itemsService, createController;

  beforeEach(function () {
       module('myYoApp');

       inject(function ($injector) {

           $scope = $injector.get('$rootScope').$new();
           itemsService = $injector.get('itemsService');

           var $controller = $injector.get('$controller');

           createController = function () {

             return $controller ('addCartCountCtrl', {
                  $scope: $scope,
                  itemsService: itemsService
             });
           };
       });
  });

  it ('should load cartCount from localStorage', function () {

    spyOn(itemsService, 'get').andReturn(31);
    createController();

    expect($scope.cartCount).toEqual(31);
    expect(itemsService.get.calls.length).toBe(1);
  });

  describe('addCartCount',function () {

    beforeEach(function () {

      spyOn(itemsService, 'set');
    });

    it ('should make cartCount add by 1', function () {
      spyOn(itemsService, 'get').andReturn(31);
      createController();
      $scope.addCartCount();

      expect($scope.cartCount).toEqual(32);
      expect(itemsService.get.calls.length).toBe(1);
      expect(itemsService.set.calls.length).toBe(1);
    });

    it ('should make cartItems be 0', function () {

      spyOn(itemsService, 'get').andReturn(undefined);
      createController();
      $scope.addCartCount();

      expect($scope.cartCount).toEqual(1);
      expect(itemsService.get.calls.length).toBe(1);
      expect(itemsService.set.calls.length).toBe(1);
    });
  });
});
