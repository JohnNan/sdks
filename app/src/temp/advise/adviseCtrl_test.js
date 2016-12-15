/**
 * Created by John on 2016/12/6.
 */
'use strict';
describe('Dreawer.SDKs test ', function(){
    beforeEach(module('myApp'));
    it('adviseCtrl should be defined', inject(function($rootScope,$controller) {
        //spec body
        var scope,adviseCtrl;
        scope = $rootScope.$new();
        adviseCtrl = $controller('adviseCtrl',{$scope:scope});
        expect(adviseCtrl).toBeDefined();
    }));
});
