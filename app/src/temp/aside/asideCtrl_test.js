/**
 * Created by John on 2016/12/6.
 */
'use strict';
describe('Dreawer.SDKs test ', function(){
    beforeEach(module('myApp'));
    it('asideCtrl should be defined', inject(function($rootScope,$controller) {
        //spec body
        var scope,asideCtrl;
        scope = $rootScope.$new();
        asideCtrl = $controller('asideCtrl',{$scope:scope});
        expect(asideCtrl).toBeDefined();
    }));
});
