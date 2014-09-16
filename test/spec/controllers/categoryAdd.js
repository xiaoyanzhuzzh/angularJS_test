'use strict';
describe('CategoryAddCtrl', function () {

  var $scope, createController, categoryService, itemsService;

  beforeEach(function () {
       module('myYoApp');

       inject(function ($injector) {

           $scope = $injector.get('$rootScope').$new();
           categoryService = $injector.get('categoryService');
           itemsService = $injector.get('itemsService');

           var $controller = $injector.get('$controller');

           createController = function () {

             return $controller ('CategoryAddCtrl', {
                  $scope: $scope,
                  categoryService: categoryService,
                  itemsService: itemsService
             });
           };
       });
  });

  it ('should load items from localStorage', function () {

    spyOn(itemsService, 'get');
    createController();

    expect(itemsService.get.calls.length).toBe(2);
  });

  it ('should load categorys from localStorage', function () {

    spyOn(itemsService, 'get');
    createController();

    expect(itemsService.get.calls.length).toBe(2);
  });

  it ('should have showSignal', function () {

    createController();

    expect($scope.showSignal).toEqual(false);
  });

  describe('addButton', function () {

    it('should make showSignal true', function () {

      createController();
      $scope.addButton();

      expect($scope.showSignal).toBe(true);
    });
  });

  describe('cancelButton', function () {

    it('should make showSignal false', function () {

      createController();
      $scope.cancelButton();

      expect($scope.showSignal).toBe(false);
    });
  });

  describe('deleteCurrentCategory function', function () {

    it('should delete current categorys and items', function () {

      var category = {id: 0, name: '雪碧'};
      spyOn(categoryService, 'deleteCategory').andReturn([]);
      spyOn(categoryService, 'deleteItem').andReturn([]);

      createController();
      $scope.deleteCurrentCategory(category);

      expect($scope.items.length).toBe(0);
      expect($scope.categorys.length).toEqual(0);
      expect(categoryService.deleteItem.calls.length).toEqual(1);
      expect(categoryService.deleteCategory.calls.length).toBe(1);
    });
  });

  describe('addNewCategory function', function () {

    it('should add new category to categorys', function () {

      var newCategory = '饮品';

      spyOn(itemsService, 'set');
      spyOn(itemsService, 'get').andReturn([{id: 0, name: '雪碧'}]);

      createController();
      $scope.addNewCategory(newCategory);

      expect(itemsService.set.calls.length).toBe(1);
    });
  });
});
