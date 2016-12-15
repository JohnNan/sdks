/**
 * Created by John on 2016/11/30.
 */
app.service('layerUtil',[ 'ngDialog','$timeout',function(ngDialog,$timeout){
    this.close=function(timeout){
        $timeout(function(){
            ngDialog.close();
        },timeout?timeout:0)
    };
    this.iAlert = function($scope,title,content,btnMsg){
        $scope.iAlertDialog = {
            title:title,
            content:content,
            btnMsg:btnMsg,
        };
        ngDialog.open({
            template: '/sdks/app/components/layer/temp/iAlert.html',
            scope:$scope
        });
        $scope.yesFunc = function(){
            ngDialog.close()
        };
    };
    this.iConfirm = function($scope,title,content,noBtnMsg,yesBtnMsg,noFunc,yesFunc){
        $scope.iConfirmDialog = {
            title:title,
            content:content,
            noBtnMsg:noBtnMsg,
            yesBtnMsg:yesBtnMsg
        };
        ngDialog.open({
            template: '/sdks/app/components/layer/temp/iConfirm.html',
            scope:$scope
        });
        $scope.yesFunc = yesFunc;
        $scope.noFunc = noFunc
    };
}]);
