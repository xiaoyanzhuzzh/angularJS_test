'use strict';
describe('indexCtrl', function () {

  var $scope, $rootScope, itemsService, createController;

  beforeEach(function () {
       module('myYoApp');

       inject(function ($injector) {

           $scope = $injector.get('$rootScope').$new();
           $rootScope = $injector.get('$rootScope');
           itemsService = $injector.get('itemsService');

           var $controller = $injector.get('$controller');

           createController = function () {

             return $controller ('indexCtrl', {
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

  it('should to-parent-cartCount can do',function(){

    spyOn(itemsService, 'get').andReturn(undefined);
    spyOn(itemsService, 'set');
    createController();

    $scope.$digest();
    $rootScope.$broadcast('to-parent-cartCount');
    $scope.$digest();

    expect($scope.cartCount).toBe(1);
    expect(itemsService.get.calls.length).toBe(1);
    expect(itemsService.set.calls.length).toBe(1);
  });


  it('should to-parent-cartCount can do',function(){

    spyOn(itemsService, 'get').andReturn(4);
    spyOn(itemsService, 'set');
    createController();

    $scope.$digest();
    $rootScope.$broadcast('to-parent-cartCount');
    $scope.$digest();

    expect($scope.cartCount).toBe(5);
    expect(itemsService.get.calls.length).toBe(1);
    expect(itemsService.set.calls.length).toBe(1);
  });

  it('should to-parent-homeActive can do',function(){

    createController();

    $scope.$digest();
    $rootScope.$broadcast('to-parent-homeActive');
    $scope.$digest();

    expect($scope.homeActive).toBe(true);
    expect($scope.itemsListActive).toBe(false);
    expect($scope.cartItemsListActive).toBe(false);
    expect($scope.cartPayListActive).toBe(false);
  });

  it('should to-parent-itemsListActive can do',function(){

    createController();

    $scope.$digest();
    $rootScope.$broadcast('to-parent-itemsListActive');
    $scope.$digest();

    expect($scope.homeActive).toBe(false);
    expect($scope.itemsListActive).toBe(true);
    expect($scope.cartItemsListActive).toBe(false);
    expect($scope.cartPayListActive).toBe(false);
  });

  it('should to-parent-cartItemsListActive can do',function(){

    createController();

    $scope.$digest();
    $rootScope.$broadcast('to-parent-cartItemsListActive');
    $scope.$digest();

    expect($scope.homeActive).toBe(false);
    expect($scope.itemsListActive).toBe(false);
    expect($scope.cartItemsListActive).toBe(true);
    expect($scope.cartPayListActive).toBe(false);
  });


  it('should to-parent-cartPayListActive can do',function(){

    createController();

    $scope.$digest();
    $rootScope.$broadcast('to-parent-cartPayListActive');
    $scope.$digest();

    expect($scope.homeActive).toBe(false);
    expect($scope.itemsListActive).toBe(false);
    expect($scope.cartItemsListActive).toBe(false);
    expect($scope.cartPayListActive).toBe(true);
  });
});
