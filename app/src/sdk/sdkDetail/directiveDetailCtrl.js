/**
 * Created by John on 2016/11/4.
 */
'use strict';
app.controller('directiveDetailCtrl',['$scope','$rootScope','$state','$stateParams','sdkService','layerUtil',function($scope,$rootScope,$state,$stateParams,sdkService,layerUtil){
    //init data
    $scope.isArticle = true;
    $scope.uuid = $stateParams.uuid;
    $scope.loginStatus = $rootScope.loginStatus;
    $scope.articles = [];
    $scope.showMore = "没有更多信息";
    $scope.createTime = new Date().getTime();
    $scope.isSummary = true;

    /**
     * @desc:获取sdk详情
     * @param:sdkId 组件ID
     */
    sdkService.getSKDDetail($scope.uuid).then(function(res){
        $scope.sdk = res.data.data.sdk;
        $scope.articles = res.data.data.articles;
        $scope.sdkCodes = res.data.data.sdkCodes;
        $scope.sdk.followStatu = $scope.sdk.isFollowed?"已关注":"关注组件";

        if($scope.articles | $scope.articles.length<5){
            $scope.showMore = "没有更多信息";
        }else{
            $scope.showMore = "加载更多";
        }
        if($scope.articles){
            if($scope.createTime != $scope.articles[$scope.articles.length-1].createTime){
                $scope.createTime = $scope.articles[$scope.articles.length-1].createTime;
            }else{
                $scope.showMore = "没有更多信息";
            }

        }

    }).then(function(res){
        //console.log("/sdkDetail fail");
    });


    //viewPage event control
    $scope.tabArticle = function(index){
        index==0?$scope.isArticle=true:$scope.isArticle=false;
        index==1?$scope.isArticle=false:$scope.isArticle=true;
    };

    /**
     * @desc:关注组件
     */
    $scope.follow=function(sdk){
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
        var data = {sdkId:sdk.id};
        if(!sdk.isFollowed){
            sdkService.followSDK(data).then(function(res){
            }).then(function(res){
                //console.info(res);
                sdk.followsCount++;
                sdk.isFollowed = true;
                sdk.followStatu = "已关注";
                $rootScope.$broadcast("followChanges");
            });
        }else{
            sdkService.unFollowSDK(data).then(function(res){
            }).then(function(res){
                //console.info(res);
                sdk.followsCount--;
                sdk.isFollowed = false;
                sdk.followStatu = "关注";
                $rootScope.$broadcast("followChanges");
            });
        }

    };
    $scope.changeType = function(type){
        var param = {
            startTime:new Date().getTime(),
            sdkId:$scope.sdk.id,
            type:type
        }
        $scope.articles = [];
        getArticleList(param);
    };

    /**
     * @desc:获取文章列表
     */
    function getArticleList(param){
        sdkService.getArticleList(param).then(function(res){
            //console.info(res);
            if(res.data.data.articles.length<5){
                setTimeout(function() {
                    $scope.showMore = "没有更多信息";
                    $scope.$apply();
                })
            }else{
                $scope.showMore = "加载更多";
            }
            $scope.articles = $scope.articles.concat(res.data.data.articles);
            if($scope.articles){
                if($scope.articles[$scope.articles.length-1] && $scope.createTime != $scope.articles[$scope.articles.length-1].createTime){
                    $scope.createTime = $scope.articles[$scope.articles.length-1].createTime;
                }else{
                    setTimeout(function(){
                        $scope.showMore = "没有更多信息";
                        $scope.$apply();
                    })

                }

            }

        }).then(function(){

        });
    }

    $scope.goArticle = function(uuid){
        window.open("/sdks/app/index.html#/article/"+uuid);
        //$state.go('articleDet',{uuid:uuid});
    };

    $scope.goHistory = function(){
        if($scope.loginStatus){
            $state.go("history");
        }
    }

    /**
     * @desc:加载更多文章
     * @params:startTime,sdkId,type
     */
    $scope.loadMoreArticle = function(){
        if($scope.showMore=="没有更多信息"){
            return;
        }
        var param = {
            startTime:$scope.createTime,
            sdkId:$scope.uuid,
            type:$scope.type
        };
        getArticleList(param);
    };
    $scope.showDet = function(){
        $scope.isSummary = false;
        $scope.sdk.slogan =$scope.sdk.intro;
    };

    $scope.openDocument = function(url){
        window.open(url);
    };

}]);