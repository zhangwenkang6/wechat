### BOM

​	BOM(Browser Object Model) 是指浏览器对象模型，浏览器对象模型提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。BOM由多个对象组成，其中代表浏览器窗口的Window对象是BOM的顶层对象，其他对象都是该对象的子对象。

我们在浏览器中的一些操作都可以使用BOM的方式进行编程处理，

比如：刷新浏览器、后退、前进、在浏览器中输入URL等

#### window对象 

​            所有的对象和成员都是window对象的属性或方法

​            当用window成员的时候,window可以省略 (如果在函数内部不适用var声明, 那么这个变量就是全局变量)

​            name, top 等是window的成员 ,只能获取不能赋值   .

​            window 有很多的子属性, document 也是 winodw 的子属性

#### onload页面加载事件

​            在页面加载完成之后执行 , 加载完成指页面上所有的元素创建完毕, 并且引用的外部资源下载完毕(js, css, 图片)

​            比直接写在底部的方式加载效率略低

​        onunload 页面卸载事件

​            在页面卸载完成之后执行

​            在onunload中, 所有的对话框都无法使用, window对象被冻结, 不能使用alert等方法

​            f5 刷新 1. 先卸载页面 2. 重新加载页面

#### 定时器

​        setTimeout(fn,3000) 设置定时器 定时炸弹 隔一段时间执行,并且只会执行一次

​            第一个参数 函数

​            第二个参数 间隔的时间 单位是毫秒

​            返回值 是一个整数,是定时器的标示 var timerId = setTimeout(fn,3000) 

​        clearTimerout(timerId) 清除定时器  

​            参数是 要取消的定时器的标示

​        setInterval(fn, 3000) 闹钟  隔一段时间执行, 并且会重复执行

​            第一次执行也要等待三秒钟

​        clearTimerval(定时器标识) 清除定时器



#### location对象

获取或设置浏览器地址栏的url

​            href  : 获取和设置浏览器地址 最常用

​            assign() : 委派,和href的作用一样,可以让页面跳转到指定页面, 可以后退

​            repleace() : 替换掉地址栏的地址, 不记录历史, 不可以后退

​            refresh() : 参数 true 强制从服务器获取页面(F5刷新)  false 如果浏览器有缓存的话, 直接从缓存中获取(Ctrl+F5强制刷新)

​        URL 统一资源定位符(网址) 

​            中文: 协议://主机名或地地址:端口号/资源路径?参数#锚点

​            英文: scheme://host:port/path?query#fragment

​            location属性: protocal://hostname:port/pathname?search#hash

​            实例: http://www.baidu.com:80/a/b/index.html?name=zs&age=18#bottom

​            scheme : 通信协议

​            host : 主机

​            port : 端口号 http默认80

​            path : 路径

​            query : 参数

​            fragment : 锚点

#### history对象

历史访问 前进后退 用的不多

​        history.forword(); 

​        history.go(1); 0刷新当前页面,关不掉了...  1前进 2前进两个 -1后退

#### navigator对象

​        navigator.userAgent 判断用户浏览器的类型

​	platform  判断浏览器所在的系统平台类型.
