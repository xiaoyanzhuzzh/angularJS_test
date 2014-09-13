xdescribe('CategoryAddCtrl', function () {

  var $scope, createController, categoryService;

  beforeEach(function () {
       module('myYoApp');

       inject(function ($injector) {

           $scope = $injector.get('$rootScope').$new();
           categoryService = $injector.get('categoryService');

           var $controller = $injector.get('$controller');

           createController = function () {

             return $controller ('CategoryAddCtrl', {
                  $scope: $scope,
                  categoryService: categoryService
             });
           };
       });
  });

  it ('should load items from localStorage', function () {

    spyOn(Util.localStorage, 'getStorageItem');

    $scope.items = [{barcode:'ITEM000001', name: '雪碧', unit:'瓶', price:3.00, category:'饮品'}]

    createController();

    expect($scope.items.length).toEqual(1);
    expect($scope.items[0].name).toEqual('雪碧');
    expect($scope.items[0].unit).toEqual('瓶');
    expect($scope.items[0].category).toEqual('饮品');

    expect(Util.localStorage.getStorageItem.calls.length).toBe(2);
  });

  it ('should load categorys from localStorage', function () {

    spyOn(Util.localStorage, 'getStorageItem');

    $scope.categorys =   [{id: 0, name: '雪碧'}];
    createController();

    expect($scope.categorys.length).toEqual(1);
    expect($scope.categorys[0].name).toEqual('雪碧');
    expect($scope.categorys[0].id).toEqual(0);

    expect(Util.localStorage.getStorageItem.calls.length).toBe(2);
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
      $scope.categorys = [{id: 0, name: '水果'}];

      spyOn(Util.localStorage, 'setStorageItem');

      createController();
      $scope.addNewCategory(newCategory);

      expect($scope.categorys.length).toEqual(2);
      expect($scope.categorys[0].id).toEqual(0);
      expect($scope.categorys[0].name).toEqual('水果');
      expect($scope.categorys[1].id).toEqual(1);
      expect($scope.showSignal).toBe(false);

      expect(Util.localStorage.setStorageItem.calls.length).toBe(1);
    });
  });
});
