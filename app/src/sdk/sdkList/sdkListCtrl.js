/**
 * Created by John on 2016/11/18.
 */
"use strict"
app.controller('sdkListCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'sdkService','layerUtil', function($scope, $rootScope, $state, $stateParams, sdkService,layerUtil) {
    $scope.domain = $stateParams.domain;
    $scope.createTime = new Date().getTime();
    $scope.showMore = "没有更多信息";
    $scope.sdkList = [];

    getSDKList();

    /**
     * @desc:关注SDK
     */
    $scope.follow = function(c) {
        if (!$rootScope.loginStatus) {
            layerUtil.iConfirm(
                $scope,
                "提示",
                "暂未登录",
                "注册",
                "登录",
                function(){location.href="/signup.html";},
                function(){location.href="/signin.html";}
            );
            //alert("暂未登录");
            return;
        }
        var data = {
            sdkId: c.id
        };
        if (!c.isFollowed) {
            sdkService.followSDK(data).then(function(res) {}).then(function(res) {
                c.followsCount++;
                c.isFollowed = true;
                c.followStatu = "已关注";
                $rootScope.$broadcast("followChanges");
            });
        } else {
            sdkService.unFollowSDK(data).then(function(res) {}).then(function(res) {
                c.followsCount--;
                c.isFollowed = false;
                c.followStatu = "关注";
                $rootScope.$broadcast("followChanges");
            });
        }
    }
    ;
    $scope.goSDKDetail = function(uuid) {
        window.open("/sdks/app/index.html#/directive/"+uuid);
        //$state.go("directiveDet", { uuid: uuid});
    };
    /**
     * @desc:SDK列表加载更多
     */
    $scope.loadMore = function() {
        if($scope.showMore=="没有更多信息"){
            return;
        }
        getSDKList();
    }
    ;
    /**
     * @desc:获取sdks列表
     * @params:startTime 分页时间戳
     *          name        领域名
     */
    function getSDKList(){
        var param = {
            startTime:$scope.createTime,
            name:$scope.domain
        };
        sdkService.getSDKList(param).then(function(res) {
            if(res.data.data.sdks | res.data.data.sdks.length<5){
                $scope.showMore = "没有更多信息";
            }else{
                $scope.showMore = "加载更多";
            }
            callBack(res);
        }).then(function(res) {});
    }
    /**
     * @desc:获取列表后回调
     */
    function callBack(res) {
        if (!res.data.data) {
            return;
        }

        $scope.sdkList = $scope.sdkList.concat(res.data.data.sdks);
        if($scope.sdkList){
            if($scope.createTime != $scope.sdkList[$scope.sdkList.length-1].createTime){
                $scope.createTime = $scope.sdkList[$scope.sdkList.length-1].createTime;
            }else{
                $scope.showMore = "没有更多信息";
            }

        }

        for (var i = 0; i < $scope.sdkList.length; i++) {
            if ($scope.sdkList[i].isFollowed) {
                $scope.sdkList[i].followStatu = "已关注";
            } else {
                $scope.sdkList[i].followStatu = "关注";
            }
        }

    }
}
]);
;