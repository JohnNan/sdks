/**
 * Created by John on 2016/12/7.
 */

describe('Dreawer.SDKs test  LayerUtil service', function() {

    var layer,dialog ;
    beforeEach(function(){
        module(function($provide){
            $provide.service('ngDialog', function(){
                this.open= jasmine.createSpy('open');
            });
            $provide.service('layerUtil', function(){
                this.iAlert = jasmine.createSpy('iAlert');
            });
            $provide.service('layerUtil', function(){
                this.iConfirm = jasmine.createSpy('iConfirm');
            });
        });
        module('myApp');
    });

    beforeEach(inject(function(layerUtil, ngDialog){
        layer=layerUtil;
        dialog=ngDialog;
    }));

    it('should show alert when title is not passed into showDialog', function(){
        layer.iAlert("提示","测试内容","确认");
        //expect(dialog.open).toHaveBeenCalled();
    });


});