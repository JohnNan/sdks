/**
 * Created by John on 2016/11/4.
 */
'use strict';
/**
 * @desc:文章详情控制器
 */
app.controller('articleDetailCtrl',['$scope','$rootScope','$state','$stateParams','sdkService','layerUtil',function($scope,$rootScope,$state,$stateParams,sdkService,layerUtil){
    //init data
    $scope.uuid=$stateParams.uuid;
    $scope.comForm = {
        contentId:"",
        type:"",
        score:"",
        title:"",
        detail:""
    };
    /**
     * @desc:获取文章详情
     * @params:文章ID
     */
    function getArticleDetail(){
       sdkService.getArticleDetail($scope.uuid).then(function(res){
            $scope.article = res.data.data.article;
            $scope.articles = res.data.data.articles;
            $scope.evaluates = res.data.data.evaluates;
            $scope.comForm.type = "article";//$scope.article.category;
            $scope.comForm.score = $scope.article.score;
            $scope.comForm.contentId = $scope.article.id;
        }).then(function(res){
            //console.info(res);
        });
    }
    getArticleDetail();


    /**
     * @desc:提交评论
     * @params: 文章ID、评论类型、评星、标题、评论详情
     */
    $scope.com=function(){
        if(!$scope.comForm.detail){
            layerUtil.iAlert($scope,"提示","请撰写评论内容","好的");
            return;
        };
        if(!$scope.articleScore){
            layerUtil.iAlert($scope,"提示","请评分","好的");
            return;
        };
        var data = {
            contentId:$scope.comForm.contentId,
            type:$scope.comForm.type,
            score:$scope.articleScore,
            title:$scope.comForm.title,
            detail:$scope.comForm.detail
        };
        sdkService.addComment(data).then(function(res){
            if(res.data.status){
                $scope.comForm.detail="";
                getArticleDetail();
            }else if(res.data.data && res.data.data.code=="unlogin"){
                layerUtil.iConfirm(
                    $scope,
                    "提示",
                    "暂未登录",
                    "注册",
                    "登录",
                    function(){location.href="/signup.html";},
                    function(){location.href="/signin.html";}
                );
            }else{
                layerUtil.iAlert(
                    $scope,
                    "提示",
                    res.data.errors[0].message,
                    "好的"
                );
            }

        }).then(function(res){
            console.log("/post com fail");
            console.info(res);
        });
    };

    $scope.goArticle = function(id){
        $state.go("articleDet",{uuid:id});
    };

    /**
     * @desc:用户信息卡片
     * @params:用户实例，鼠标事件
     */
    $scope.showPop = false;
    $scope.popup4 = function(obj,e){
        if($scope.showPop == false){
            $scope.showPop=e;
            $scope.popInfo = obj;
        }else{
            $scope.showPop =false;
        }
    };
    // 离开父
    $scope.leaveParent = function(){
        $scope.timmer = setTimeout(function(){
            $scope.showPop = false;
            $scope.$apply();
        },100);
    };
    // 进入子
    $scope.enterChild = function(){
        if($scope.timmer){
            clearTimeout($scope.timmer);
        }
    };

    /**
     * @desc:关注组件
     * @params:JSON中customer实例
    * */
    $scope.follow=function(cus){
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
        var data = {customerId:cus.id};
        if(!cus .isFollowed){
            sdkService.followCus(data).then(function(res){
                cus.followersCount++;
                cus.isFollowed = true;
            }).then(function(res){
            });
        }else{
            sdkService.unFollowCus(data).then(function(res){
                cus.followersCount--;
                cus.isFollowed = false;
            }).then(function(res){
            });
        }

    };
}]);