/**
 * Created by John on 2016/11/16.
 */

app.filter("strToHtml",['$sce',function($sce){
        return function(str){
            //console.info($sce.trustAsHtml(str));
            return $sce.trustAsHtml(str);
        }
    }])
;
