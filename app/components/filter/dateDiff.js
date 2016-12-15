/**
 * Created by John on 2016/11/16.
 * @description:将时间戳转换为几分钟前，几小时前，几天前，etc
 *
 */

app.filter("dateDiff",function(){
        return function(dateTimeStamp){
            var secs = ((new Date()).getTime() / 1000) - dateTimeStamp/1000;
            Math.floor(secs);
            var minutes = secs / 60;
            secs = Math.floor(secs % 60);
            if (minutes < 1) {
                return '刚刚';
            }
            var hours = minutes / 60;
            minutes = Math.floor(minutes % 60);
            if (hours < 1) {
                return minutes + '分钟前';
            }
            var days = hours / 24;
            hours = Math.floor(hours % 24);
            if (days < 1) {
                return hours + '小时前';
            }
            var weeks = days / 7;
            days = Math.floor(days % 7);
            if (weeks < 1) {
                return days + '天前';
            }
            var months = weeks / 4.35;
            weeks = Math.floor(weeks % 4.35);
            if (months < 1) {
                return weeks +'周前';
            }
            var years = months / 12;
            months = Math.floor(months % 12);
            if (years < 1) {
                return months +'月前';
            }
            years = Math.floor(years);
            return years +'年前';

        }
    })
;
