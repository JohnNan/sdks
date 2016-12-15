/**
 * Created by John on 2016/11/8.
 */
app
    .controller('adviseCtrl',['$scope','$rootScope','$state','$stateParams','$http',function($scope,$rootScope,$state,$stateParams,$http){

        $scope.form={
            content:"",
            type:""
        };
        $scope.success = 0;
        $scope.errorMsg = "";

        /**
         * @desc:意见反馈
         * @params:type,detail
         */
        $scope.postAdvise = function(){
            if(!$rootScope.loginStatus){
                alert("暂未登录");
                return;
            }

            if(!$scope.form.type){
                $scope.success = 2;
                $scope.errorMsg = "请选择反馈类型"
                return;
            }
            if(!$scope.form.content){
                $scope.success = 2;
                $scope.errorMsg = "请输入反馈内容";
                return;
            }


            $http({
                method:'post',
                url:'/feedback/add',
                data:{
                    type:"feedback",
                    detail:$scope.form.content
                },
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function(obj) {
                    var str = [];
                    for(var p in obj){
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    }
                    return str.join("&");
                }
            }).then(function(res){
                $scope.form.content = "";
                $state.go('home');
            }).then(function(res){
                $scope.success = 2;
            })
        };
        $scope.goBack = function(){
            history.back(-1);
        };

    }]);
