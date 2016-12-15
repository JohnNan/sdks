/**
 * Created by John on 2016/11/4.
 * @description:头部控制器
 */
'use strict';
app.controller('headerCtrl',['$scope','$rootScope','$state','$http','sdkService','$compile',function($scope,$rootScope,$state,$http,sdkService,$compile){
    //init data
    $scope.q="";
    $scope.hoverQa = false;
    $scope.showSearch = false;
    $scope.loginStatus = false;

    document.getElementsByTagName("body")[0].addEventListener("click",function(){
        $scope.showSearch = false;
        $scope.$apply();
    })
    document.addEventListener("keypress",function(e){
        if (e.keyCode==13)
        {
            if (document.getElementById('search_input') == document.activeElement) {
                $scope.goSearch();
            }
        }
    })

    getNavigationBar();
    sdkService.getUserInfo().then(function(res){
        if(res.data.status){
            $scope.user = res.data.data.user;
            $scope.myIdentities = res.data.data.myIdentities;
            $rootScope.loginStatus = true;
            $scope.loginStatus = true;
        }else{
            $rootScope.loginStatus = false;
            $scope.loginStatus = false;
        }

    }).then(function(res){
    });




    $scope.typing = function(){
        if(!$scope.q){
            //$scope.user = {};
            //$scope.myIdentities = {};
            $scope.showSearch =false;
            return;
        }
        var params = {q:$scope.q};
        sdkService.searchKeyWord(params).then(function(res){
            $scope.sdks = res.data.data.sdks;
            $scope.articles = res.data.data.articles;
            for(var i = 0 ; i<$scope.articles.length;i++){
                    $scope.articles[i].title=$scope.articles[i].title.toLowerCase().replace($scope.q.toLowerCase(),'<span class="keyword">'+$scope.q+'</span>');
            }
            if($scope.sdks.length!=0 | $scope.articles!=0){
                $scope.showSearch = true;
            }else{
                $scope.showSearch = false;
            }
        }).then(function(res){
        });
    };
    //viewPage event control
   $scope.goUser = function(){
       location.href="/home.html"
   };
    $scope.goSearch=function(){
        if($scope.q){
            $state.go("search",{q:$scope.q})
        }
    };

    $scope.goSDKList = function(domain){
        $state.go('sdkList',{domain:domain});
    };
    $scope.goFollowSDK = function(uuid){
        $state.go("directiveDet",{uuid:uuid});
    };
    $scope.goArticleDetail = function(uuid){
        $state.go("articleDet",{uuid:uuid});
        $scope.q="";
    }
    $scope.goSDKDetail = function(uuid){
        $state.go("directiveDet",{uuid:uuid});
        $scope.q="";
    }
    $scope.goHome = function(){
        $state.go("home");
    };
    $scope.goQa=function(){
        window.open("/");
    };
    $scope.enter=function(){
        $scope.hoverQa = true;
    }
    $scope.leave=function(){
        $scope.hoverQa = false;
    }
    $scope.goQaWeb = function(c){
        location.href = "/"+c.category+"/"+ c.alias;
    };
    /**
     * @desc:获取导航栏已关注的sdks
     */
    function getNavigationBar (){
        sdkService.getNavigationBar().then(function(res){
            $scope.domains = res.data.data.domains;
            $scope.sdks = res.data.data.sdks;
        }).then(function(res){
        });
    }
    /**
     * @desc:接受关注SDK传播
     */
    $rootScope.$on("followChanges",function(){
        getNavigationBar ();
    })

    //viewPage variable destroy


}]);