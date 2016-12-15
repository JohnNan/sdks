/**
 * Created by John on 2016/11/7.
 */
'use strict';
/**
 * @author:JohnNan
 * @desc:底部控制器
 * @date:2016年11月5日11:09:02
 */
app.controller('footerCtrl',['$scope','$rootScope','$state',function($scope,$rootScope,$state){
    //init data
    $scope.shpw2Top = false;

    /**
     * @desc:页脚Tab
     */
    $scope.doFooter = function(index){
        switch (index){
            case 0: $state.go('contactus',{name:'contactus'}) ;break;
            case 1: $state.go('advise',{name:'advise'}) ;break;
            case 2: $state.go('term',{name:'term'})   ;break;
            case 3: $state.go('help',{name:'help'})   ;break;
            case 4: $state.go('aboutus',{name:'aboutus'});break;
            default:break;
        }
    };

    $scope.back2Top = function(){
        scrollTo(0,0);
    };

    $scope.openWb = function(){
        window.open("http://weibo.com/dreawer99");
    };
    $scope.openWxxcx=function(){
        window.open("http://www.wxapp-union.com/");
    };
    //viewPage variable destroy




}]);