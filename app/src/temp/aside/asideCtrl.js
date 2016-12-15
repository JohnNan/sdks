/**
 * Created by John on 2016/11/8.
 */
app
    .run(['$rootScope', '$window', '$location', '$log','$templateCache', function ($rootScope, $window, $location, $log,$templateCache) {

        var stateChangeSuccess = $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);

        function stateChangeSuccess($rootScope) {
            $templateCache.removeAll();
        }
    }])
    .controller('temp_asideCtrl',['$scope','$rootScope','$state','$stateParams',function($scope,$rootScope,$state,$stateParams){
        $scope.activeName = $state.current.name;
        $scope.slideChange = function(index){
            switch (index){
                case 0: $state.go('aboutus',{name:'contactus'}) ;break;
                case 1: $state.go('contactus',{name:'advise'}) ;break;
                case 2: $state.go('help',{name:'term'})   ;break;
                case 3: $state.go('term',{name:'help'})   ;break;
                case 4: $state.go('advise',{name:'aboutus'});break;
                default:break;
            }
        };
    }]);
