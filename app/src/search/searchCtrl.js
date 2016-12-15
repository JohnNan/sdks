/**
 * Created by John on 2016/11/4.
 */
'use strict';

app.controller('searchCtrl',['$scope','$rootScope','$state','$stateParams','sdkService','layerUtil',function($scope,$rootScope,$state,$stateParams,sdkService,layerUtil){
    //init data
    $scope.q=$stateParams.q;
    init();
    function init(){
        $scope.startTime = new Date().getTime();
        $scope.showMore  = "没有更多信息";
        $scope.category  = "article";// article sdk
        $scope.sdks = [];
        $scope.articles = [];
    };

    if($scope.q){
        find($scope.q);
    }
    /**
     * @desc:搜索关键词
     * @params: q,startTime , type
     */
    function find (q){
        var params = {
            q:q,
            startTime:$scope.startTime,
            type:$scope.category
        };
        sdkService.searchKeyWord(params).then(function(res){
            $scope.sdks = res.data.data.sdks.concat($scope.sdks);
            $scope.articles = $scope.articles.concat(res.data.data.articles);
            for(var i = 0 ; i< $scope.sdks.length;i++){
                $scope.sdks[i].followStatu =$scope.sdks[i].isFollowed?"已关注":"关注"
            }
            if(res.data.data.articles.length==5 | res.data.data.sdks.length==5){
                $scope.showMore="加载更多";
                $scope.startTime = $scope.isArticle?res.data.data.articles[4].createTime:res.data.data.sdks[4].createTime;
            }else{
                $scope.showMore="没有更多信息";
            }
        }).then(function(res){
        });
    };
    $scope.isArticle = true;

    //viewPage event control
    $scope.goArticle = function(index){
        if(index==0){
            init();
            $scope.isArticle=true;
            $scope.category = "article";
            find($scope.q);

        }else{
            init();
            $scope.isArticle=false;
            $scope.category = "sdk";
            find($scope.q);
        }
    };

    $scope.goArticleDetail = function(uuid){
        window.open("/sdks/app/index.html#/article/"+uuid);
        //$state.go('articleDet',{uuid:uuid});
    };

    $scope.goDirectiveDetail = function(uuid){
        window.open("/sdks/app/index.html#/directive/"+uuid);
        //$state.go('directiveDet',{uuid:uuid});
    };

    /**
     * @desc:关注组件
     * @params:JSON返回sdk实例
     */
    $scope.follow=function(sdk){
        var data = {sdkId:sdk.id};
        if(!sdk.isFollowed){
            sdkService.followSDK(data).then(function(res){
                if(res.data.data && res.data.data.code=="unlogin"){
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
                sdk.followsCount++;
                sdk.isFollowed = true;
                sdk.followStatu = "已关注";
                $rootScope.$broadcast("followChanges");
            }).then(function(res){
            });
        }else{
            sdkService.unFollowSDK(data).then(function(res){
                if(res.data.data && res.data.data.code=="unlogin"){
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
                sdk.followsCount--;
                sdk.isFollowed = false;
                sdk.followStatu = "关注";
                $rootScope.$broadcast("followChanges");
            }).then(function(res){
            });
        }

    };

    /**
     * @desc:加载更多
     */
    $scope.getMoreSearch = function(){
        if($scope.showMore=="没有更多信息"){
            return;
        }
        find($scope.q);
    };
    //viewPage variable destroy


}]);