describe('CategoryModifyCtrl', function () {

  var $scope, createController, categoryService;

  beforeEach(function () {
    module('myYoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      categoryService = $injector.get('categoryService');

      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller ('CategoryModifyCtrl', {
          $scope: $scope,
          categoryService: categoryService
        });
      };
    });
  });

  it ('should load items from localStorage', function () {

    spyOn(Util.localStorage, 'getStorageItem').andReturn(

      [{barcode:'ITEM000001', name: '雪碧', unit:'瓶', price:3.00, category:'饮品'}]
    );
    createController();

    expect($scope.items.length).toEqual(1);
    expect($scope.items[0].name).toEqual('雪碧');
    expect($scope.items[0].unit).toEqual('瓶');
    expect($scope.items[0].category).toEqual('饮品');

    expect(Util.localStorage.getStorageItem.calls.length).toBe(1);
  });

  it ('should load categorys from localStorage', function () {

    spyOn(Util.localStorage, 'getStorageItem').andReturn(

      [{id: 0, name: '雪碧'}]
    );
    createController();

    expect($scope.categorys.length).toEqual(1);
    expect($scope.categorys[0].name).toEqual('雪碧');
    expect($scope.categorys[0].id).toEqual(0);

    expect(Util.localStorage.getStorageItem.calls.length).toBe(1);
  });

  it ('should have modifySignal', function () {

    createController();

    expect($scope.modifySignal).toEqual(false);
  });

  describe('modifyCurrentCategory', function () {

    it('should make modifySignal true', function () {

      createController();
      modifyCurrentCategory();

      expect($scope.modifySignal).toBe(true);
    });
  });

  describe('cancelModify', function () {

    it('should make modifySignal false', function () {

      createController();
      cancelModify();

      expect($scope.modifySignal).toBe(false);
    });
  });

  describe('deleteCurrentCategory function', function () {

    it('should delete current categorys and items', function () {

      var category = {id: 0, name: '雪碧'};

      spyOn(Util.localStorage, 'getStorageItem');
      spyOn(categoryService, 'deleteCategory').andReturn([]);
      spyOn(categoryService, 'deleteItem').andReturn([]);

      createController();
      deleteCurrentCategory(category);

      expect($scope.items.length).toBe(0);
      expect($scope.categorys.length).toEqual(0);

      expect(Util.localStorage.getStorageItem.calls.length).toBe(1);
      expect(categoryService.deleteItem.calls.length).toEqual(1);
      expect(categoryService.deleteCategory.calls.length).toBe(1);
    });
  });

  describe('changeCurrentCategory function', function () {

    it('should add change category to categorys', function () {

      var category = {id: 0, name: '饮品'};
      spyOn(Util.localStorage, 'getStorageItem');
      spyOn(categoryService, 'changeCategory').andReturn([{id: 0, name: '雪碧'}]);
      spyOn(categoryService, 'changeItem').andReturn(

        [{barcode:'ITEM000001', name: '雪碧', unit:'瓶', price:3.00, category:'饮品'}]
      );

      createController();
      changeCurrentCategory(category);

      expect($scope.categorys.length).toEqual(1);
      expect($scope.items.length).toEqual(1);

      expect(Util.localStorage.getStorageItem.calls.length).toBe(1);
      expect(categoryService.changeCategory.calls.length).toBe(1);
      expect(categoryService.changeItem.calls.length).toBe(1);
    });
  });
});
