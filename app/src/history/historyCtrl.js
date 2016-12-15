/**
 * Created by John on 2016/11/17.
 */
'use strict';
app.controller('historyCtrl',['$scope','$rootScope','$state','sdkService','layerUtil',function($scope,$rootScope,$state,sdkService,layerUtil){
    //init data
    $scope.isArticle = true;
    $scope.startTime = new Date().getTime();
    $scope.showMore  = "没有更多信息";
    $scope.tracks    = [];

    /**
     * @desc:获取足迹列表
     * @params:startTime 时间戳
     *          type:类型 sdk、article
     */
    function getHistory(){
        var param = {
            startTime:$scope.startTime,
            type : $scope.isArticle?"article":"sdk"
        };
        sdkService.getHistory(param).then(function(res){
            if(res.data.data && (res.data.data.tracks | res.data.data.tracks.length<5)){
                $scope.showMore = "没有更多信息";
            }else{
                $scope.showMore = "加载更多";
                $scope.startTime = res.data.data.tracks[res.data.data.tracks.length-1].createTime;
            }
            $scope.tracks = $scope.tracks.concat(res.data.data.tracks);
            //$scope.startTime = res.data.data.tracks[$scope.tracks.length-1].startTime;
            for(var i = 0 ; i< $scope.tracks.length;i++){
                $scope.tracks[i].content.followStatu =$scope.tracks[i].content.isFollowed?"已关注":"关注"
            }
        }).then(function(res){
            console.info(res);
        });
    }
    getHistory();

    //viewPage event control
    $scope.goArticle = function(index){
        if(index==0){
            $scope.isArticle=true;
            $scope.startTime = new Date().getTime();
            $scope.tracks    = []
            getHistory();
        }else if(index==1){
            $scope.isArticle=false;
            $scope.startTime = new Date().getTime();
            $scope.tracks    = []
            getHistory();
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
     * @params:JSON返回SDK实例
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
                sdk.followsCount++;
                sdk.isFollowed = true;
                sdk.followStatu = "已关注";
                $rootScope.$broadcast("followChanges");
            }).then(function(res){
            });
        }else{
            sdkService.unFollowSDK(data).then(function(res){
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
    $scope.getMore = function(){
        if($scope.showMore=="没有更多信息"){
            return;
        }
        getHistory();
    };



    //viewPage variable destroy


}]);