/**
 * Created by John on 2016/12/6.
 */

describe('Dreawer.SDKs test  strToDate filter', function() {

    var $filter,$sce;

    beforeEach(module('myApp'));

    beforeEach(inject(function(_$filter_,$injector){
        $filter = _$filter_;
        $sce = $injector.get('$sce');
    }));

    it('富文本转换为HTML输出', function() {
        var strToHtml = $filter('strToHtml')("<h1>哈哈</h1>");
        expect(strToHtml.$$unwrapTrustedValue()).toEqual('<h1>哈哈</h1>');
    });

});