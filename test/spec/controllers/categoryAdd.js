describe('CategoryAddCtrl', function () {

  var $scope, createController, categoryService;

  beforeEach(function () {
       module('myYoApp');

       inject(function ($injector) {

           $scope = $injector.get('$rootScope').$new();
           categoryService = $injector.get('categoryService');

           var $controller = $injector.get('$controller');

           createController = function () {

             return $controller ('CategoryAddCtrl', {
                  $scope: $scope
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

  it ('should have showSignal', function () {

    createController();

    expect($scope.showSignal).toEqual(false);
  });

  describe('deleteCurrentCategory function', function () {

    it('should delete current categorys and items', function () {

      var category = {id: 0, name: '雪碧'};
      spyOn(categoryService, 'deleteCategory').andReturn([]);
      spyOn(categoryService, 'deleteItem').andReturn([]);

      createController();
      deleteCurrentCategory(category);

      expect($scope.items.length).toBe(0);
      expect($scope.categorys.length).toEqual(0);
      expect(categoryService.deleteItem.calls.length).toEqual(1);
      expect(categoryService.deleteCategory.calls.length).toBe(1);
    });
  });

  describe('addButton', function () {

    it('should make showSignal true', function () {

      createController();
      addButton();

      expect($scope.showSignal).toBe(true);
    });
  });

  describe('addNewCategory function', function () {

    it('should add new category to categorys', function () {

      var newCategory = '饮品';
      $scope.categorys = [{id: 0, name: '水果'}]

      spyOn(Util.localStorage, 'setStorageItem');

      createController();
      addNewCategory(newCategory);

      expect($scope.categorys.length).toEqual(2);
      expect($scope.categorys[0].id).toEqual(0);
      expect($scope.categorys[0].name).toEqual('水果');
      expect($scope.categorys[1].id).toEqual(1);

      expect(Util.localStorage.setStorageItem.calls.length).toBe(1);
    });
  });

  describe('cancelButton', function () {

    it('should make showSignal false', function () {

      createController();
      cancelButton();

      expect($scope.showSignal).toBe(false);
    });
  });
});
