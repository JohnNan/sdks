/**
 * Created by John on 2016/12/6.
 */
'use strict';
describe('Dreawer.SDKs test ', function(){
    var scope,directiveDetailCtrl,$httpBackend,stateParams;
    beforeEach(module('myApp'));
    beforeEach(inject(function($rootScope,$controller,_$httpBackend_) {
        //spec body
        scope = $rootScope.$new();
        stateParams = {uuid:'5b6191aa09b0103583ab4799290088aa'};
        directiveDetailCtrl = $controller('directiveDetailCtrl',{$scope:scope,$stateParams:stateParams});
        $httpBackend = _$httpBackend_;
        $httpBackend.whenGET('src/recommend/home.html').respond("200",{});
        $httpBackend.whenGET('/sdk/detail/'+stateParams.uuid).respond({"data":{"articles":[{"id":"e10a972e09ac103583ab4799290088aa","createTime":1480661898000,"title":"Spring 整合Quartz 2实现定时任务五：集群、分布式架构实现探讨","score":0.0,"commentsCount":0,"creater":{"alias":"xiao-ruo-tian-he-1","petName":"肖承荫","photo":"/resource/customer/photo/sdanly.jpeg"}},{"id":"bf1d2f8209ac103583ab4799290088aa","createTime":1480661855000,"title":"Spring 整合Quartz 2实现定时任务四：细化调整及一些已知的问题","score":0.0,"commentsCount":0,"creater":{"alias":"xiao-ruo-tian-he-1","petName":"肖承荫","photo":"/resource/customer/photo/sdanly.jpeg"}},{"id":"a8ecd9af09ac103583ab4799290088aa","createTime":1480661822000,"title":"Spring 3整合Quartz 2实现定时任务三：动态暂停 恢复 修改和删除任务","score":0.0,"commentsCount":0,"creater":{"alias":"xiao-ruo-tian-he-1","petName":"肖承荫","photo":"/resource/customer/photo/sdanly.jpeg"}},{"id":"9acb1b3d09ac103583ab4799290088aa","createTime":1480661791000,"title":"Spring 3整合Quartz 2实现定时任务二：动态添加任务","score":5.0,"commentsCount":1,"creater":{"alias":"chi-hu-1","petName":"赤虎","photo":"/resource/person/chi-hu-1/photo/mugshot/4954D0D5D519F9BD89F83BC9D85E9240.jpg"}},{"id":"7b8d3b3409ac103583ab4799290088aa","createTime":1480661743000,"title":"Spring 3整合Quartz 2实现定时任务一：常规整合","score":0.0,"commentsCount":0,"creater":{"alias":"xiao-ruo-tian-he-1","petName":"肖承荫","photo":"/resource/customer/photo/sdanly.jpeg"}}],"sdkCodes":{"maven":"<dependency> <groupId>org.quartz-scheduler</groupId> <artifactId>quartz</artifactId> <version>2.2.1</version> </dependency>","ivy":"<dependency org=\"org.quartz-scheduler\" name=\"quartz\" rev=\"2.2.1\"/>"},"sdk":{"id":"5b6191aa09b0103583ab4799290088aa","createTime":1480663404000,"slogan":"这是一条标语！","logo":null,"document":null,"articlesCount":8,"followersCount":1,"creater":{"alias":"xiao-ruo-tian-he-1","petName":"肖承荫","photo":"/resource/customer/photo/sdanly.jpeg"},"isFollowed":true,"shortName":"Quartz","intro":"这是SDK的描述部分，多余的文字可以隐藏，通过更多来展开和收起。内容要长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长。"}},"status":true,"errors":[]});
    }));
    it('directiveDetailCtrl已加载并定义',function(){
        expect(directiveDetailCtrl).toBeDefined();
    });
    it('directiveDetailCtrlSpec请求调用头部导航接口', function() {
        $httpBackend.expectGET('/sdk/detail/'+stateParams.uuid);
        expect($httpBackend.expectGET('/sdk/detail/'+scope.uuid).respond('200'));
        expect(scope.sdk).not.toBeNull();
    });
});
