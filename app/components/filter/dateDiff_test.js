/**
 * Created by John on 2016/12/6.
 */

describe('Dreawer.SDKs test  dateDiff filter', function() {

    var $filter;

    beforeEach(module('myApp'));

    beforeEach(inject(function(_$filter_){
        $filter = _$filter_;
    }));

    it('新建日期转换为刚刚', function() {
        var dateDiff = $filter('dateDiff');
        expect(dateDiff(new Date().getTime())).toEqual("刚刚");
    });
    it('当前时间1分钟前转换为1小时前', function() {
        var dateDiff = $filter('dateDiff');
        expect(dateDiff(new Date().getTime()-60*60*1000)).toEqual("1小时前");
    });
    it('当前时间1天前转换为1天前', function() {
        var dateDiff = $filter('dateDiff');
        expect(dateDiff(new Date().getTime()-60*60*1000*24)).toEqual("1天前");
    });
    it('当前时间32天前转换为1月前', function() {
        var dateDiff = $filter('dateDiff');
        expect(dateDiff(new Date().getTime()-60*60*1000*24*32)).toEqual("1月前");
    });
});