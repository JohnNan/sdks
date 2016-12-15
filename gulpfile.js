//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
	rename = require('gulp-rename'),
	minify = require('gulp-minify-css'),//css压缩
	concat = require('gulp-concat'),//文件合并
	clean = require('gulp-clean'),//清空文件夹
	uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('minifyJs', function (cb) {
	return gulp.src([
		"app/app.js",
		"app/components/directive/directive.js",
		"app/components/filter/dateDiff.js",
		"app/components/filter/strToHtml.js",
		"app/components/layer/layerUtil.js",
		"app/src/common/serviceconfig.js",
		"app/src/common/sdkService.js",
		"app/src/include/header/headerCtrl.js",
		"app/src/include/footer/footerCtrl.js",
		"app/src/include/aside/asideCtrl.js",
		"app/src/recommend/homeCtrl.js",
		"app/src/article/articleDetailCtrl.js",
		"app/src/sdk/sdkDetail/directiveDetailCtrl.js",
		"app/src/history/historyCtrl.js",
		"app/src/search/searchCtrl.js",
		"app/src/temp/aside/asideCtrl.js",
		"app/src/temp/help/helpCtrl.js",
		"app/src/temp/advise/adviseCtrl.js",
		"app/src/sdk/sdkList/sdkListCtrl.js",
		"app/src/X/testCtrl.js"
	])
		.pipe(uglify({
			mangle: false,//类型：Boolean 默认：true 是否修改变量名
		}))
		.pipe(concat('sdk-min.js'))
		.pipe(gulp.dest('app/minify/'));
});
gulp.task('minifyCss', function(){
	return gulp.src(["app/css/reset.css","app/css/page.css"])
		.pipe(rename({suffix: '.min'}))
		.pipe(minify())
		.pipe(concat('sdk-min.css'))
		.pipe(gulp.dest('app/minify/'));
});