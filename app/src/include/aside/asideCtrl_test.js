/**
 * Created by John on 2016/12/6.
 */
'use strict';
describe('Dreawer.SDKs test ', function(){
    beforeEach(module('myApp'));
    it('footerCtrl should be defined', inject(function($rootScope,$controller) {
        //spec body
        var scope,footerCtrl;
        scope = $rootScope.$new();
        footerCtrl = $controller('footerCtrl',{$scope:scope});
        expect(footerCtrl).toBeDefined();
    }));
});
