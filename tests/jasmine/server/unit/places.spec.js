describe('Places', function() {
  'use strict';

  beforeEach(function() {
    MeteorStubs.install();
    mock(global, 'Places');
  });

  afterEach(function() {
    MeteorStubs.uninstall();
  });

  describe('service', function() {
    it('should list places in ascending order by title', function() {
      var result = {};
      spyOn(Places, 'find').and.returnValue(result);

      expect(PlacesService.list()).toBe(result);
      expect(Places.find.calls.argsFor(0)).toEqual([{}, {sort: {title: 1}}]);
    });
  });
});