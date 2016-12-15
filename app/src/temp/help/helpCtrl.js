/**
 * Created by John on 2016/11/8.
 */
'use strict';
/**
 * @author:JohnNan
 * @desc:找回密码控制器
 * @date:2016年11月4日17:21:13
 */
app.controller('helpCtrl',['$scope','$rootScope','$state','$anchorScroll','$location',function($scope,$rootScope,$state,$anchorScroll,$location){
    //page init data
    $scope.activeEle = 'feed';


    //page event start
    /**
     * @desc:单页面应用锚点
     */
    $scope.go= function(anchor){
        $scope.activeEle=anchor;
        $location.hash(anchor);
        $anchorScroll();
    };

    //page destroy

}]);