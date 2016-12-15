/**
 * Created by John on 2016/11/16.
 */
app.directive("raty", ['$timeout',function($timeout) {
        return {
            restrict: 'E',
            link: function(scope, elem, attrs) {
                $timeout(function(){
                    $(elem).raty({
                        score: function() {
                            return attrs.score
                        },
                        readOnly:attrs.readonly,
                        number: attrs.number,
                        click:function(score,evt){
                            scope.articleScore = score;
                            scope.$apply();
                        },
                        path:"images/raty/",
                        hints:["一星","两星","三星","四星","五星"],
                        noRatedMsg:"暂无评分"
                    })
                },500);
            }
        }
    }])
