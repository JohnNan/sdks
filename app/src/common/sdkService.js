/**
 * Created by John on 2016/11/17.
 */
app//将$http POST requestPayload数据转换为formData中
    .config(function($httpProvider){
        /**
         * 对所有POST请求 将requestPayLoad 放入FormData
         * @param obj
         * @returns {string}
         */
        $httpProvider.defaults.transformRequest = function(obj){
            var str = [];
            for(var p in obj){
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
            return str.join("&");
        }
        $httpProvider.defaults.headers.post = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        ///**
        // * 添加一个去请求拦截机
        // */
        //$httpProvider.interceptors.push("requestLoadingIntercepter");
    })
    //SDK服务接口开始
    .service('sdkService',[ '$http','serviceConfig',function($http,serviceConfig){
        var base = null;
        if(serviceConfig.preset == 'dev'){
            base = serviceConfig.dev;
        }else{
            base = serviceConfig.local;
        }
        this.getUserInfo = function() {
            return $http({ method: 'GET', url: base.getUserInfo});
        };
        this.getRecomend = function(param) {
            return $http({ method: 'GET', url: base.getRecomend,params:param});
        };
        this.getRecomendMore = function(param) {
            return $http({ method: 'GET', url: base.getRecomendMore,params:param});
        };
        this.followSDK = function(data) {
            return $http({ method: 'POST', url: base.followSDK,data:data});
        };
        this.unFollowSDK = function(data) {
            return $http({ method: 'POST', url: base.unFollowSDK,data:data});
        };
        //this.getSDKDomainList = function(url) {
        //    return $http({ method: 'GET', url: base.getSDKDomainList+url});
        //};
        //this.getSDKDomainListMore = function(url,param) {
        //    return $http({ method: 'GET', url: base.getSDKDomainListMore+url,params:param});
        //};
        this.getSKDDetail = function(url) {
            return $http({ method: 'GET', url: base.getSKDDetail+url});
        };
        this.getArticleList = function(param) {
            return $http({ method: 'GET', url: base.getArticleList,params:param});
        };
        this.getArticleDetail = function(url) {
            return $http({ method: 'GET', url: base.getArticleDetail+url});
        };
        this.addComment = function(data) {
            return $http({ method: 'POST', url: base.addComment,data:data});
        };
        this.searchKeyWord = function(param) {
            return $http({ method: 'GET', url: base.searchKeyWord,params:param});
        };
        this.searchMore = function(param) {
            return $http({ method: 'GET', url: base.searchMore,params:param});
        };
        this.getHistory = function(param) {
            return $http({ method: 'GET', url: base.getHistory,params:param});
        };
        this.getHistoryMore = function(param) {
            return $http({ method: 'GET', url: base.getHistoryMore,params:param});
        };
        this.getEvaluateMore = function(param) {
            return $http({ method: 'GET', url: base.getEvaluateMore,params:param});
        };
        this.getNavigationBar = function(param) {
            return $http({ method: 'GET', url: base.getNavigationBar,params:param});
        };
        this.getSDKList = function(param) {
            return $http({ method: 'GET', url:base.getSDKList,params:param});
        };
        this.getSDKListMore = function(param) {
            return $http({ method: 'GET', url: base.getSDKListMore,params:param});
        };
        this.followCus = function(data) {
            return $http({ method: 'POST', url: base.followCus,data:data});
        };
        this.unFollowCus = function(data) {
            return $http({ method: 'POST', url: base.unFollowCus,data:data});
        };


    }]);
    //.factory("requestLoadingIntercepter",["$q",function(){
    //    return{
    //        "request":function(config){
    //            // do something on success
    //            NProgress.configure({ showSpinner: false });
    //            NProgress.start();
    //            return config;
    //         },
    //        "requestError":function(rejection){
    //            // do something on error
    //            if(canRecover(rejection)){
    //                return responseOrNewPromise
    //            }
    //            return $q.reject(rejection);
    //        },
    //        "response":function(response){
    //            // do something on success
    //            NProgress.done();
    //            return response;
    //        },
    //        "responseError":function(rejection){
    //            // do something on error
    //            if(canRecover(rejection)){
    //                return responseOrNewPromise
    //            }
    //            return $q.reject(rejection);
    //    }
    //    };
    //}])
