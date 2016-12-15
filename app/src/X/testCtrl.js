/**
 * Created by John on 2016/11/4.
 */
'use strict';
app.controller('testCtrl', function ($scope,$rootScope, ngDialog) {

    //set name
     $scope.name = "william wood";
    //通过http请求得到user
     $scope.GetUser = function() {
         $http.get('/sdks/app/fakeData/followSDK.json').then(function (response) {
             $scope.user = response.data;
         });
     }
    //$scope.showPop = false;
    //$scope.popup4 = function(e){
    //    e?$scope.showPop=true:setTimeout($scope.showPop=false,1000);
    //};
    //
    //
    //$scope.clickToOpen = function () {
    //    $scope.iAlertDialog = {
    //        title:"我是iAlert的title",
    //        content:"我是iAlert的content",
    //        btnMsg:"我知道了",
    //    };
    //    ngDialog.open({
    //        template: '/sdks/app/partials/temp/layer/iAlert.html',
    //        scope:$scope
    //    });
    //};
    //$scope.yesFunc = function(){
    //    console.log("唯一按钮回调");
    //};
});
