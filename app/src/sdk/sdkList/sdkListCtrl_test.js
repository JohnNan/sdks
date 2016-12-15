/**
 * Created by John on 2016/12/6.
 */
'use strict';
describe('Dreawer.SDKs test ', function(){
    var scope,sdkListCtrl,$httpBackend,stateParams;
    beforeEach(module('myApp'));
    beforeEach(inject(function($rootScope,$controller,_$httpBackend_) {
        //spec body
        scope = $rootScope.$new();
        sdkListCtrl = $controller('sdkListCtrl',{$scope:scope});
        $httpBackend = _$httpBackend_;
        $httpBackend.whenGET('src/recommend/home.html').respond("200",{});
        $httpBackend.whenGET('/sdk/list').respond({"data":{"sdks":[{"id":"107120e5fadd4adfacb09194924381da","createTime":1481281780000,"slogan":"最好的测试组件3","logo":"/resource/product/test-3-1/logo/CC8ABDE57CDFEF4D899488B38F455573.jpg","articlesCount":0,"followersCount":0,"isFollowed":false,"shortName":"test3","intro":"最好的测试组件3最好的测试组件3"},{"id":"35ef0cead4da46be930579c7fcc28d3c","createTime":1481249909000,"slogan":"最好的测试组件2","logo":"/resource/product/test-2-2/logo/4B53BDBF03C67004C373BCA340606379.jpg","articlesCount":0,"followersCount":0,"isFollowed":false,"shortName":"test2","intro":"最好的测试组件2"},{"id":"45602791a52d4928909d9105c8136be9","createTime":1481168607000,"slogan":"测试","logo":"/resource/product/ce-shi-1/logo/81688347021380151F57EB73B45CC75A.png","articlesCount":0,"followersCount":0,"isFollowed":false,"shortName":"测试","intro":"范德萨范德萨"}],"domain":{"id":"7469a0690e904ccc945d3366e9bb8b85","remark":null,"name":"Java","logo":"/resource/domain/logo/java.png","category":"domain","questions":null,"questionsCount":440,"answeredQuestionsCount":168,"lastAskTime":1476781310000,"lastViewTime":1475995161000,"viewsCount":859,"status":"DEFAULT","sequence":null,"creater":null,"createTime":null,"detail":"Java是一种可以撰写跨平台应用软件的面向对象的程序设计语言。","summary":"Java是一种可以撰写跨平台应用软件的面向对象的程序设计语言。","homepage":"http://www.oracle.com/technetwork/java/index.html","tags":[],"tagsCount":0,"followers":null,"followersCount":886,"productsCount":null,"sharesCount":0,"children":null,"updater":null,"updateTime":null,"domain":true,"tagOnly":false,"product":false,"team":false,"book":false,"proxyObject":false,"realClass":"com.dreawer.qa.domain.Domain","realClassName":"Domain"}},"status":true,"errors":[]});
    }));
    it('sdkListCtrl已加载并定义',function(){
        expect(sdkListCtrl).toBeDefined();
    });
    it('sdkListCtrlSpec请求调用头部导航接口', function() {
        $httpBackend.expectGET('/sdk/list');
        expect($httpBackend.expectGET('/sdk/list').respond('200'));
        expect(scope.sdks).not.toBeNull();
    });
});