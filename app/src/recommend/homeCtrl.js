/**
 * Created by John on 2016/11/4.
 * @description:首页控制器
 */
'use strict';

app.controller('homeCtrl',['$scope','$rootScope','$state','sdkService','layerUtil',function($scope,$rootScope,$state,sdkService,layerUtil){
    //init data
    $scope.isArticle = true;
    $scope.createTime = new Date().getTime();
    $scope.recommends = [];
    $scope.showMore = "没有更多信息";

    /**
     * @desc:获取推荐列表
     * @params:startTime分页指针
     */
    function getRec(){
        var param = {
            startTime:$scope.createTime
        };
        sdkService.getRecomend(param).then(function(res){
            if(res.data.data.recommends | res.data.data.recommends.length<5){
                $scope.showMore = "没有更多信息";
            }else{
                $scope.showMore = "加载更多";
            }
            $scope.recommends = $scope.recommends.concat(res.data.data.recommends);
            for(var i=0;i<$scope.recommends.length;i++){
                if($scope.recommends[i].recommendContent.isFollowed){
                    $scope.recommends[i].followStatu = "已关注";
                }else{
                    $scope.recommends[i].followStatu = "关注";
                }
            }
            if($scope.recommends){
                if($scope.createTime != $scope.recommends[$scope.recommends.length-1].createTime){
                    $scope.createTime = $scope.recommends[$scope.recommends.length-1].createTime;
                }else{
                    $scope.showMore = "没有更多信息";
                }

            }
        }).then(function(res){
        });
    }
    getRec();




    //viewPage event control
    $scope.goArticle = function(index){
        index==0?$scope.isArticle=true:$scope.isArticle=false;
        index==1?$scope.isArticle=false:$scope.isArticle=true;
    };

    $scope.goDetail = function(uuid,category){
        if(category == 'article'){
            window.open("/sdks/app/index.html#/article/"+uuid);
        }else{
            window.open("/sdks/app/index.html#/directive/"+uuid);
        }
    };

    /**
     * @desc:关注组件
     */
    $scope.follow=function(c){
        if(!$rootScope.loginStatus){
            layerUtil.iConfirm(
                $scope,
                "提示",
                "暂未登录",
                "注册",
                "登录",
                function(){location.href="/signup.html";},
                function(){location.href="/signin.html";}
            );
            return;
        }
        if(!c.recommendContent.isFollowed){
            var data = {sdkId:c.recommendContent.id};
            sdkService.followSDK(data).then(function(res){
            }).then(function(res){
                c.recommendContent.followsCount++;
                c.recommendContent.isFollowed = true;
                c.followStatu = "已关注";
                $rootScope.$broadcast("followChanges");
            });
        }else{
            var data = {sdkId:c.recommendContent.id};
            sdkService.unFollowSDK(data).then(function(res){
            }).then(function(res){
                c.recommendContent.followsCount--;
                c.recommendContent.isFollowed = false;
                c.followStatu = "关注";
                $rootScope.$broadcast("followChanges");
            });
        }

    };

    $scope.getMoreRec = function(){
        if($scope.showMore=="没有更多信息"){
            return;
        }
        getRec();
    };


    //viewPage variable destroy


}]);