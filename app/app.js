'use strict';
/**
 * @author:JohnNan
 * @desc:Angular配置入口
 * @date:2016年11月4日17:21:13
 */
"use strict"
//对服务进行参数初始化，这里配stateProvider服务的视图控制
var app = angular.module('myApp', ['ui.router','ngDialog','angular-popups']);
app.run(["$rootScope",function($rootScope){
        $rootScope.$on("$stateChangeStart",function(event, toState, toParams, fromState, fromParams){
            NProgress.configure({ showSpinner: false });
            NProgress.start();
        });
        $rootScope.$on("$stateChangeSuccess",function(event, toState, toParams, fromState, fromParams){
            NProgress.done();
        });
}])
    .config(["$stateProvider",'$urlRouterProvider','$locationProvider',  function ($stateProvider,$urlRouterProvider,$locationProvider) {
  $stateProvider
      .state("home", {
          url: '/home',
          templateUrl:'src/recommend/home.html',
          controller:'homeCtrl'
      })
      .state("articleDet", {
          url: '/article/:uuid',
          templateUrl:'src/article/articleDetail.html',
          controller:'articleDetailCtrl',
          cache:false
      })
      .state("directiveDet", {
          url: '/directive/:uuid',
          templateUrl:'src/sdk/sdkDetail/directiveDetail.html',
          controller:'directiveDetailCtrl'
      })
      .state("history", {
          url: '/history',
          templateUrl:'src/history/history.html',
          controller:'historyCtrl'
      })
      .state("search", {
          url: '/search/:q',
          templateUrl:'src/search/search.html',
          controller:'searchCtrl'
      })
      .state("advise", {
          url: '/advise',
          templateUrl:'src/temp/advise/advise.html',
          controller:''
      })
      .state("term", {
          url: '/term',
          templateUrl:'src/temp/term/term.html',
          controller:''
      })
      .state("help", {
          url: '/help',
          templateUrl:'src/temp/help/help.html',
          controller:'helpCtrl'
      })
      .state("contactus", {
          url: '/contactus',
          templateUrl:'src/temp/contactus/contactus.html',
          controller:''
      })
      .state("aboutus", {
          url: '/aboutus',
          templateUrl:'src/temp/aboutus/aboutus.html',
          controller:''
      })
      .state("sdkList", {
          url: '/sdkList/:domain',
          templateUrl:'src/sdk/sdkList/sdkList.html',
          controller:'sdkListCtrl'
      })
      .state("test", {
          url: '/test',
          templateUrl:'src/X/test.html',
          controller:'testCtrl'
      })

      //$locationProvider.html5Mode(true);

      $urlRouterProvider.otherwise('home');
}]);