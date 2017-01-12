# sdks

		一个基于Angular1.5.9的SPA的部分开源模块的部分代码。

如有疑问不正确的地方，欢迎大家批评指正，共同学习:)
##Part0:
		后端:java;
		服务器:Tomcat;
		当前开发环境:win+webstorm+node;
		直接放到WebContent中，brower中访问sdks/app/index.html;

在这里记录一下吧：

		技术方面：整个模块为单页应用使用gulp任务配置，bower统一包管理，karma测试，业务逻辑主要由angular实现
		(包含插件：
		[angular-popup](https://github.com/aui/angular-popups)，
		[angular-ui-router](https://github.com/angular-ui/ui-router/wiki)，
		[nprogress](https://www.npmjs.com/package/nprogress)，
		[ng-dialog](http://ngmodules.org/modules/ngDialog)，
		jquery，
		[raty](https://github.com/wbotelhos/raty))，
		业务方面：推荐分两类：文章、组件  然后就是其列表详情页

##Part1:

Demo下载，基本环境搭建

创建一个文件夹叫angularDemo这个用来作为下载demo的工作空间

		mkdir angularDemo

进入刚创建的文件夹

		cd angularDemo

开始从GitHub repositories 下载源代码 这里需要自己本地安装了Git

不想装git，直接下安装包也是一样

		git clone https://github.com/JohnNan/sdks.git

[node](https://nodejs.org/en/)下载完成之后，选择安装目录开始安装nodejs，完成后cmd键入

		node --version

没记错应该是会自动配置环境变量path，如若报错请自行配置环境变量具体(win10)我的电脑属性，高级设置，环境变量，层级指向node

##Part2:
* 安装node组件

下载好项目并安装完成node后就可以进入我们的项目了

		npm install

CMD中执行这句指令的意思就是开始安装项目里sdks/package.json中的dependencies，也就是开始下载依赖组件到你当前目录下的node_module下了，就是这些东东key:value value对应为版本号

```javascript
 "devDependencies": {
    "bower": "^1.7.7",
    "http-server": "^0.9.0",
    "jasmine-core": "^2.4.1",
    "karma": "^0.13.22",
    "karma-chrome-launcher": "^0.2.3",
    "karma-firefox-launcher": "^0.1.7",
    "karma-jasmine": "^0.3.8",
    "karma-junit-reporter": "^0.4.1",
    "protractor": "^4.0.9"
  }
```

* 开始测试

安装好依赖后，接下来是运行测试用例了，个人不是很喜欢写fucking tests 所以就随意用jasmine写写啦..
在package.json中配置了"test"，实际运行的是"karma start karma.conf.js"

运行指令：

		npm test


这里可能会报错，需要根据报错信息安装bower依赖，运行指令如：

		bower install angular

如遇Bug，概念性问题请自行[So](http://stackoverflow.com/)，[Google](http://www.google.com)一下 然后再提issues ..这里不再赘述

正常情况下是会弹出浏览器写着什么Karma v0.13.22 -connected 别理他 直接点debug ，接着就open了一个空窗口，WTF？其实这个时候需要去控制台查看日志输出，
我记得当时好像还可以将测试结果保存成HTML文件，搞了个什么饼状图来看测试通过率，算了这不是重点..

接着说一下karma.conf.js这个文件吧，进去一看十分明了啊，搞过模块化开发看看key值基本就猜出来几个意思了吧

```javascript
files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-ui-router/release/angular-ui-router.min.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/ng-dialog/js/ngDialog.min.js',
      'bower_components/angular-popups/dist/angular-popups.js',
      'bower_components/nprogress/nprogress.js',
      'app.js',
      'components/**/*.js',
      'src/**/*.js'
    ]
```
这里的files对应数组里，你需要制定你进行测试时候所需要用到的framework以及你自己所编写的测试js，什么autoWatch就是你只要改变文件数组中任意内容他就会重新执行你写的测试脚本，
测试框架[jasmine](https://jasmine.github.io/)（这个其实还好，利用断言进行自测的一个测试框架），browser你想用啥浏览器测试啥的，用到的一些插件plugins里配置一下，噢~

```javascript
 junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
```
这就是那个生成饼图的配置了~差点忘了..


##Part4:

由于后端不让开源..所以就这样吧..自己node搭一个服务器吧，自行Google绝不跑题..

开始访问最前面所说的那个index.html，这里回去加载Angular框架及项目依赖，进入[angular-ui-router](https://github.com/angular-ui/ui-router/wiki)，未输入状态时默认为'home'，
这里代码部分详见app/app.js文件，在app.js中当前状态(state)模板指定控制器，与此同时app.js中还控制了NProgress这个插件就是类似GitHub的页面加载条的那个效果接下来就进入各状态对应控制器了。

由于Boss要求前后端开发分离，通讯格式走json所以我在sdks/app/创立了一个fakeData的文件夹，sdks/app/src/common/serviceconfig.js中做了一个preset的配置，
这里如果指定为'local'就走fakeData中的json，'dev'则走后台数据接口

