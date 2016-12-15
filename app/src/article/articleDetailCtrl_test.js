/**
 * Created by John on 2016/12/9.
 */
'use strict';

describe('Dreawer.SDKs test ', function(){
    var scope,articleDetailCtrl,$httpBackend,stateParams;
    beforeEach(module('myApp'));
    beforeEach(inject(function($rootScope,$controller,_$httpBackend_) {
        //spec body
        scope = $rootScope.$new();
        stateParams = {uuid:'8e89e3dd09ad103583ab4799290088aa'};
        articleDetailCtrl = $controller('articleDetailCtrl',{$scope:scope,$stateParams:stateParams});
        $httpBackend = _$httpBackend_;
        $httpBackend.whenGET('src/recommend/home.html').respond("200",{});
        $httpBackend.whenGET('/article/detail/'+stateParams.uuid).respond({"data":{"articles":[{"id":"d3b25ce609af103583ab4799290088aa","createTime":1480663175000,"title":"pinyin4j支持简拼和多音","score":0.0,"commentsCount":0,"creater":{"alias":"xiao-ruo-tian-he-1","petName":"肖承荫","photo":"/resource/customer/photo/sdanly.jpeg"}},{"id":"0cd77e6a09af103583ab4799290088aa","createTime":1480662848000,"title":"Apache POI使用详解","score":0.0,"commentsCount":0,"creater":{"alias":"xiao-ruo-tian-he-1","petName":"肖承荫","photo":"/resource/customer/photo/sdanly.jpeg"}},{"id":"07515aa809ae103583ab4799290088aa","createTime":1480662410000,"title":"Hibernate主键生成策略","score":0.0,"commentsCount":0,"creater":{"alias":"chi-hu-1","petName":"赤虎","photo":"/resource/person/chi-hu-1/photo/mugshot/4954D0D5D519F9BD89F83BC9D85E9240.jpg"}}],"article":{"tags":[{"id":"7469a0690e904ccc945d3366e9bb8b85","remark":null,"name":"Java","logo":"/resource/domain/logo/java.png","category":"domain","questions":null,"questionsCount":null,"answeredQuestionsCount":null,"lastAskTime":null,"lastViewTime":null,"viewsCount":null,"status":null,"sequence":null,"creater":null,"createTime":null,"domain":true,"team":false,"product":false,"tagOnly":false,"book":false,"realClass":"com.dreawer.qa.domain.Tag","realClassName":"Tag","proxyObject":false},{"id":"b61ba7ce319d437c81deba3ef5e564b0","remark":null,"name":"Java Script","logo":"/resource/domain/logo/js.png","category":"domain","questions":null,"questionsCount":null,"answeredQuestionsCount":null,"lastAskTime":null,"lastViewTime":null,"viewsCount":null,"status":null,"sequence":null,"creater":null,"createTime":null,"domain":true,"team":false,"product":false,"tagOnly":false,"book":false,"realClass":"com.dreawer.qa.domain.Tag","realClassName":"Tag","proxyObject":false}],"id":"8e89e3dd09ad103583ab4799290088aa","createTime":1480662207000,"detail":"1.缓存的范围：\r\n\r\n1.1 事务范围：缓存只能被当前事务访问。缓存的生命周期依赖于事务的生命周期，当事务结束时，缓存也就结束生命周期。在此范围下，缓存的介质是内存。事务可以是数据库事务或者应用事务，每个事务都有独自的缓存，缓存内的数据通常采用相互关联的的对象形式。\r\n\r\n1.2进程范围：缓存被进程内的所有事务共享。这些事务有可能是并发访问缓存，因此必须对缓存采取必要的事务隔离机制。缓存的生命周期依赖于进程的生命周期，进程结束时，缓存也就结束了生命周期。进程范围的缓存可能会存放大量的数据，所以存放的介质可以是内存或硬盘。缓存内的数据既可以是相互关联的对象形式也可以是对象的松散数据形式。松散的对象数据形式有点类似于对象的序列化数据，但是对象分解为松散的算法比对象序列化的算法要求更快。\r\n\r\n1.3 集群范围：在集群环境中，缓存被一个机器或者多个机器的进程共享。缓存中的数据被复制到集群环境中的每个进程节点，进程间通过远程通信来保证缓存中的数据的一致性，缓存中的数据通常采用对象的松散数据形式。","title":"hibernate的缓存机制","score":4.0,"commentsCount":1,"originUrl":"http://www.cnblogs.com/liuconglin/p/5693846.html","creater":{"id":"471fbc66f62d4aa19edef29ca9377371","slogan":"????????","alias":"xiao-ruo-tian-he-1","upVotesCount":0,"followersCount":0,"isFollowed":false,"answersCount":10,"petName":"肖承荫","photo":"/resource/customer/photo/sdanly.jpeg","isMe":true}},"evaluates":[{"createTime":1480753085000,"detail":"111111111111111","score":4,"creater":{"id":"471fbc66f62d4aa19edef29ca9377371","slogan":"????????","alias":"xiao-ruo-tian-he-1","upVotesCount":0,"followersCount":0,"isFollowed":false,"answersCount":10,"petName":"肖承荫","photo":"/resource/customer/photo/sdanly.jpeg","isMe":true}}]},"status":true,"errors":[]});
        $httpBackend.whenPOST('/evaluate/add').respond({"data":null,"status":true,"errors":[]})
    }));
    afterEach(function(){
        $httpBackend.verifyNoOutstandingExpectation();
    });
    it('articleDetailCtrlSpec已加载并定义',function(){
        expect(articleDetailCtrl).toBeDefined();
    });
    it('articleDetailCtrlSpec请求调用文章详情接口', function() {
        $httpBackend.expectGET('/article/detail/'+stateParams.uuid);
        $httpBackend.flush();
        expect(scope.article.id).toBe('8e89e3dd09ad103583ab4799290088aa');
    });
    it('articleDetailCtrlSpec模拟发送评论', function() {

        $httpBackend.expectPOST('/evaluate/add',{}).respond('200');
        $httpBackend.flush();
        expect(scope.article.id).toBe('8e89e3dd09ad103583ab4799290088aa');
    });

});
