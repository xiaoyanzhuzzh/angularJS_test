describe('ItemModifyCtrl', function () {

  var $scope, createController, categoryService, itemManagementService;

  beforeEach(function () {
    module('myYoApp');

    inject(function ($injector) {

      $scope = $injector.get('$rootScope').$new();
      categoryService = $injector.get('categoryService');
      itemManagementService = $injector.get('itemManagementService');

      var $controller = $injector.get('$controller');

      createController = function () {

        return $controller ('ItemModifyCtrl', {
          $scope: $scope,
          categoryService: categoryService,
          itemManagementService: itemManagementService
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

  it ('should have showItemSignal', function () {

    createController();

    expect($scope.showItemSignal).toEqual(false);
  });

  describe('modifyButton', function () {

    it('should make showItemSignal true', function () {

      var changeItem = {barcode:'ITEM000001', name: '雪碧', unit:'瓶', price:3.00, category:'饮品'};
      spyOn(Util.localStorage, 'setStorageItem');

      createController();
      modifyButton(changeItem);

      expect($scope.showItemSignal).toBe(true);
      expect(Util.localStorage.setStorageItem.calls.length).toBe(1);
    });
  });

  describe('cancelButton', function () {

    it('should make showItemSignal false', function () {

      createController();
      cancelButton();

      expect($scope.showItemSignal).toBe(false);
    });
  });

  describe('deleteCurrentItem function', function () {

    it('should delete current item', function () {

      var item = {barcode:'ITEM000001', name: '雪碧', unit:'瓶', price:3.00, category:'饮品'};

      spyOn(itemManagementService, 'deleteItem').andReturn([]);
      spyOn(Util.localStorage, 'getStorageItem');

      createController();
      deleteCurrentItem(item);

      expect($scope.items.length).toBe(0);
      expect($scope.categorys.length).toEqual(0);

      expect(itemManagementService.deleteItem.calls.length).toEqual(1);
      expect(Util.localStorage.getStorageItem.calls.length).toBe(1);
    });
  });

  describe('modifyCurrentItem function', function () {

    it('should add change category to categorys', function () {

      var newItem = {name: '雪碧', unit:'瓶', price:3.00};

      spyOn(Util.localStorage, 'getStorageItem');
      spyOn((itemManagementService, 'modifyItem').andReturn(
        [{barcode:'ITEM000001', name: '雪碧', unit:'瓶', price:3.00, category:'饮品'}]
      );

      createController();
      modifyCurrentItem(newItem);

      expect($scope.items.length).toEqual(1);
      expect($scope.items[0].category).toEqual('饮品');

      expect(itemManagementService.modifyItem.calls.length).toBe(1);
      expect(Util.localStorage.setStorageItem.calls.length).toBe(1);
    });
  });
});
