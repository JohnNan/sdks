/**
 * Created by John on 2016/12/6.
 */
'use strict';

describe('Dreawer.SDKs test ', function(){
    var scope,headerCtrl,$httpBackend;
    beforeEach(module('myApp'));
    beforeEach(inject(function($rootScope,$controller,_$httpBackend_) {
        //spec body
        scope = $rootScope.$new();
        headerCtrl = $controller('headerCtrl',{$scope:scope});
        $httpBackend = _$httpBackend_;
        $httpBackend.whenGET('src/recommend/home.html').respond("200",{});
        $httpBackend.whenGET('/navigation').respond({"data":{"sdks":[{"id":"922b35b509b0103583ab4799290088aa","createTime":1480663493000,"slogan":"这是一条标语！","logo":null,"articlesCount":3,"followersCount":1,"isFollowed":true,"shortName":"Pinyin4j"},{"id":"789694d809b0103583ab4799290088aa","createTime":1480663456000,"slogan":"这是一条标语！","logo":null,"articlesCount":3,"followersCount":1,"isFollowed":true,"shortName":"Log4j"},{"id":"5b6191aa09b0103583ab4799290088aa","createTime":1480663404000,"slogan":"这是一条标语！","logo":null,"articlesCount":8,"followersCount":1,"isFollowed":true,"shortName":"Quartz"}],"domains":["java"]},"status":true,"errors":[]});
    }));
    it('headerCtrl已加载并定义',function(){
        expect(headerCtrl).toBeDefined();
    });
    it('headerCtrlSpec请求调用头部导航接口', function() {
        $httpBackend.expectGET('/navigation');
        //$httpBackend.flush();
        expect($httpBackend.expectGET('/navigation').respond('200'));
    });
});
