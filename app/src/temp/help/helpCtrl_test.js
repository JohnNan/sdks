/**
 * Created by John on 2016/12/6.
 */
'use strict';
describe('Dreawer.SDKs test ', function(){
    beforeEach(module('myApp'));
    it('helpCtrl should be defined', inject(function($rootScope,$controller) {
        //spec body
        var scope,helpCtrl;
        scope = $rootScope.$new();
        helpCtrl = $controller('helpCtrl',{$scope:scope});
        expect(helpCtrl).toBeDefined();
    }));
});
