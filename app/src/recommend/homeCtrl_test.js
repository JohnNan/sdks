/**
 * Created by John on 2016/12/9.
 */
'use strict';

describe('Dreawer.SDKs test ', function(){
    var scope,homeCtrl,$httpBackend;
    beforeEach(module('myApp'));
    beforeEach(inject(function($rootScope,$controller,_$httpBackend_) {
        //spec body
        scope = $rootScope.$new();
        homeCtrl = $controller('homeCtrl',{$scope:scope});
        $httpBackend = _$httpBackend_;
        $httpBackend.whenGET('src/recommend/home.html').respond("200",{});
        $httpBackend.whenGET('/recommend?startTime='+scope.createTime).respond({"data":{"recommends":[{"createTime":1480664820000,"category":"article","recommendContent":{"summary":"缓存是介于应用程序和物理数据源之间，缓存内的数据是对物理数据源中的数据的复制，其作用是为了降低应用程序对物理数据源访问的频次，从而提高了应用的运行性能。","id":"8e89e3dd09ad103583ab4799290088aa","createTime":1480662207000,"category":"article","title":"hibernate的缓存机制","score":4.0,"commentsCount":1,"creater":{"alias":"xiao-ruo-tian-he-1","petName":"肖承荫","photo":"/resource/customer/photo/sdanly.jpeg"}},"creater":{"alias":"xiao-ruo-tian-he-1","petName":"肖承荫","photo":"/resource/customer/photo/sdanly.jpeg"}},{"createTime":1480664801000,"category":"article","recommendContent":{"summary":" Hibernate批量处理（批量插入、批量更新、批量删除），实体对象生命周期（transient（瞬时态）、persisent（持久态）、Detached（脱管状态）），Hibernate事务管理（基于JDBC的事务管理、基于JTA的事务管理概念），锁。","id":"752a2a9d09ad103583ab4799290088aa","createTime":1480662163000,"category":"article","title":"Hibernate高级功能","score":0.0,"commentsCount":0,"creater":{"alias":"xiao-ruo-tian-he-1","petName":"肖承荫","photo":"/resource/customer/photo/sdanly.jpeg"}},"creater":{"alias":"xiao-ruo-tian-he-1","petName":"肖承荫","photo":"/resource/customer/photo/sdanly.jpeg"}},{"createTime":1480664783000,"category":"article","recommendContent":{"summary":"Mybatis是一个持久层框架，是对JDBC的封装","id":"4ae259de09aa103583ab4799290088aa","createTime":1480660923000,"category":"article","title":"Mybatis框架基础学习（一）","score":0.0,"commentsCount":0,"creater":{"alias":"xiao-ruo-tian-he-1","petName":"肖承荫","photo":"/resource/customer/photo/sdanly.jpeg"}},"creater":{"alias":"xiao-ruo-tian-he-1","petName":"肖承荫","photo":"/resource/customer/photo/sdanly.jpeg"}},{"createTime":1480664751000,"category":"article","recommendContent":{"summary":"最近需要对项目的持久层进行优化，阅读了《深入浅出Hibernate》其中提出的提高性能方案总结如下","id":"3faee0f309ad103583ab4799290088aa","createTime":1480662079000,"category":"article","title":"Hibernate 优化策略","score":0.0,"commentsCount":0,"creater":{"alias":"xiao-ruo-tian-he-1","petName":"肖承荫","photo":"/resource/customer/photo/sdanly.jpeg"}},"creater":{"alias":"xiao-ruo-tian-he-1","petName":"肖承荫","photo":"/resource/customer/photo/sdanly.jpeg"}},{"createTime":1480664730000,"category":"article","recommendContent":{"summary":"Quartz之Hello World!","id":"1e22ffa909ac103583ab4799290088aa","createTime":1480661588000,"category":"article","title":"初识Quartz（一）","score":0.0,"commentsCount":0,"creater":{"alias":"xiao-ruo-tian-he-1","petName":"肖承荫","photo":"/resource/customer/photo/sdanly.jpeg"}},"creater":{"alias":"xiao-ruo-tian-he-1","petName":"肖承荫","photo":"/resource/customer/photo/sdanly.jpeg"}}]},"status":true,"errors":[]});
    }));
    it('homeCtrlSpec已加载并定义',function(){
        expect(homeCtrl).toBeDefined();
    });
    it('mock推荐数据为5条，底部按钮为加载更多', function() {
        $httpBackend.expectGET('/recommend?startTime='+scope.createTime);
        $httpBackend.flush();
        expect(scope.showMore).toBe("加载更多");
    });

});
