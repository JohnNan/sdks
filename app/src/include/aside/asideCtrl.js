/**
 * Created by John on 2016/11/7.
 */
app.controller('asideCtrl',['$scope','$rootScope','$state','$stateParams',function($scope,$rootScope,$state,$stateParams){
    /**
     * @desc:监听登录状态
     */
    $rootScope.$watch("loginStatus",function(){
        $scope.loginStatus = $rootScope.loginStatus;
    });

    $scope.goHistory = function(){
        $state.go("history");
    };
}]);