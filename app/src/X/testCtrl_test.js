/**
 * Created by John on 2016/12/6.
 */
'use strict';
describe('Dreawer.SDKs test ', function(){
    beforeEach(module('myApp'));
    it('testCtrl should be defined', inject(function($rootScope,$controller) {
        //spec body
        var scope,testCtrl;
        scope = $rootScope.$new();
        testCtrl = $controller('testCtrl',{$scope:scope});
        expect(testCtrl).toBeDefined();
    }));
});
