## Web API

**Web API介绍**

API（Application Programming Interface,应用程序编程接口）是一些预先定义的函数，目的是提供应用程序与开发人员基于某软件或硬件得以访问一组例程的能力，而又无需访问源码，或理解内部工作机制的细节。

- 任何开发语言都有自己的API
- API的特征输入和输出(I/O)
  - var max =  Math.max(1, 2, 3);
- API的使用方法(console.log('adf'))



**Web  API的概念**

浏览器提供的一套操作浏览器功能和页面元素的API(BOM和DOM)

此处的Web API特指浏览器提供的API(一组方法)，Web API在后面的课程中有其它含义



### DOM

**DOM的概念** 

文档对象模型（Document Object Model，简称DOM），是[W3C](https://baike.baidu.com/item/W3C)组织推荐的处理[可扩展标记语言](https://baike.baidu.com/item/%E5%8F%AF%E6%89%A9%E5%B1%95%E7%BD%AE%E6%A0%87%E8%AF%AD%E8%A8%80)的标准[编程接口](https://baike.baidu.com/item/%E7%BC%96%E7%A8%8B%E6%8E%A5%E5%8F%A3)。它是一种与平台和语言无关的[应用程序接口](https://baike.baidu.com/item/%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E6%8E%A5%E5%8F%A3)(API),它可以动态地访问程序和脚本，更新其内容、结构和[www](https://baike.baidu.com/item/www/109924)文档的风格(目前，HTML和XML文档是通过说明部分定义的)。文档可以进一步被处理，处理的结果可以加入到当前的页面。[DOM](https://baike.baidu.com/item/DOM/50288)是一种基于树的[API](https://baike.baidu.com/item/API/10154)文档，它要求在处理过程中整个文档都表示在[存储器](https://baike.baidu.com/item/%E5%AD%98%E5%82%A8%E5%99%A8)中。

**DOM又称为文档树模型**

- 文档：一个网页可以称为文档
- 节点：网页中的所有内容都是节点（标签、属性、文本、注释等）
- 元素：网页中的标签
- 属性：标签的属性

**DOM经常进行的操作**

- 获取元素
- 对元素进行操作(设置其属性或调用其方法)
- 动态创建元素
- 事件(什么时机做相应的操作)



#### 获取页面元素

根据id获取元素

```js
var div = document.getElementById('main');
console.log(div);
// 如果没有查询到，返回一个null
// 获取到的数据类型 HTMLDivElement，对象都是有类型的
```

根据标签名获取元素

```js
var divs = document.getElementsByTagName('div');
for (var i = 0; i < divs.length; i++) {
  var div = divs[i];
  console.log(div);
} 
// 根据标签名获取一个元素的伪数组。
// 如果没有查询到，返回的是一个空数组！
// 元素集合是动态的：体现在在对页面元素进行操作（添加、删除、替换）伪数组中的元素对象会随之改变。
```

根据name获取元素*

```js
var inputs = document.getElementsByName('hobby');
for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i];
  console.log(input);
}
```

根据类名获取元素*

```js
var mains = document.getElementsByClassName('main');
for (var i = 0; i < mains.length; i++) {
  var main = mains[i];
  console.log(main);
}
```

根据选择器获取元素*

```js
var text = document.querySelector('#text');
console.log(text);

var boxes = document.querySelectorAll('.box');
for (var i = 0; i < boxes.length; i++) {
  var box = boxes[i];
  console.log(box);
}
```

控制台打印元素所有属性

var div1 = document.getElementById('main');

console.dir(div1);

#### 事件

​	事件：触发-响应机制

​	程序的执行是依赖于事件的发生（点击）才进行执行。这种编写代码的思路就叫做事件驱动。

**事件三要素**

- 事件源:触发(被)事件的元素,就是发生事件的那个东西.
- 事件处理程序(监听器):事件触发后要执行的代码(函数形式),就是当事件发生之后，处理事件的程序.
- 事件: click 点击事件,就是发生的那件事.

**开发时间驱动的程序的流程**:

1. 创建一个事件源
2. 编写一个事件处理程序(监听器)
3. 绑定事件源和监听器

**事件的基本使用**

```js
var box = document.getElementById('box');
box.onclick = function() {
  console.log('代码会在box被点击后执行');  
};
```



- 点击按钮弹出提示框

```js
	var btn = document.getElementById('btn');
    btn.onclick = function () {
      alert('点到我了');
    }
```



- 点击按钮切换图片

```js
   var btn = document.getElementById('btn');
   var photo = document.getElementById('photo');
   var flag = true;
   btn.onclick = function () {
     if(flag) {
      photo.src = 'images/b.jpg';
      flag = false;
     } else {
       photo.src = 'images/a.jpg';
       flag = true;
     }
   }
```



通用属性

 id 元素的ID、 

className 元素的属性名,为元素设置class样式、   

name  

#### 属性操作

##### 非表单元素的属性

a  :  href、title

img  :  src

innerHTML

innerText



```js
// a 标签
var link = document.getElementById('link');
console.log(link.href);
console.log(link.title);
// img 标签
var pic = document.getElementById('pic');
console.log(pic.src);
```

案例:

​	**点击按钮显示隐藏div**

```js
		// 获取元素
        var btn = document.getElementById('btn');
        var div = document.getElementById('div');
        // 声明一个flag进行标识
        var flag = true;
        // 给按钮注册事件
        btn.onclick = function () {
            if (flag) {
                div.style.display = 'none';
                btn.value = '点击显示';
        		// this.value = '点击显示';
                flag = false;
            } else {
                div.style.display = 'block';
                btn.value = '点击隐藏';
        		// this.value = '点击隐藏';
                flag = true;
            }
        }

		// 或者使用 对象的属性名className 赋值
        .hidden {
            display:none;
        }
		var btn = document.getElementById('btn');
        var div = document.getElementById('div');
		btn.onclick = function () {
            // 设置div的class属性为hidden
            // 因为标签的属性class在js中是关键字,所以对象的属性名是 className .
    		div.className = 'hidden';
		}
		
```

​	**取消 a 链接 的跳转功能**

```js
<a id = 'link' href="https://www.baidu.com/">百度一下</a>

var link = document.getElementById('link');
link.onclick = function () {
	alert('点到我了');
    
	// 取消 a 链接 的跳转功能
	return false;
}
```



​	**美女相册**

```js
<div id="main">
	<a href="../代码/images/1.jpg" title = '美女A'>
		<img src="../代码/images/1-small.jpg" alt="美女A">
	</a>
	<a href="../代码/images/2.jpg" title = '美女B'>
		<img src="../代码/images/2-small.jpg" alt="美女B">
	</a>
	<a href="../代码/images/3.jpg" title = '美女C'>
		<img src="../代码/images/3-small.jpg" alt="美女C">
	</a>
	<a href="../代码/images/4.jpg" title = '美女D'>
		<img src="../代码/images/4-small.jpg" alt="美女D">
	</a>
</div>
<img id="image" src="../代码images/placeholder.png" alt="" width="450px" />
<br>
<p id = 'des'>选择一张图片</p>
    
	// 业务代码
    <script>
        // 获取元素
        var main = document.getElementById('main');
        // 获取所有main下的a链接对象
        var links = main.getElementsByTagName('a');
        
        for (var i = 0; i < links.length; i++) {
            // 循环遍历a链接对象
            var link = links[i];
            // 为当前点击的a链接注册事件
            link.onclick = function () {
                var img = document.getElementById('image');
                // this.href 当前点击的a链接
                img.src = this.href;
                
				// 设置p标签显示a链接的title属性值
                var des = document.getElementById('des');
                des.innerHTML = this.title;

                // 取消a链接的跳转
                return false;
            }
        }
    </script>
```



##### innerHTML和innerText

​	innerHTML , 获取内容的时候,如果内容中有标签,**会把标签获取到,解析成HTML形式展示**

​	innerText , 获取内容的时候,如果内容中有标签,**会把标签过滤掉,解析成Text形式展示**

```js
var box = document.getElementById('box');
box.innerHTML = '我是文本<p>我会生成为标签</p>';
 // 输出  我是文本
 //      我会生成标签
console.log(box.innerHTML); 
box.innerText = '我是文本<p>我不会生成为标签</p>';
// 输出  我是文本<p>我不会生成为标签</p>
console.log(box.innerText);
```



- innerText的**兼容性处理**

  一些浏览器有这个属性,另外一些没有.

  判断有没有这个属性,如果没有,就用另外的方式.

  如果一个对象没有这个属性,直接获取这个属性的值,获取的就是undefined.

  typeof element.innerText === 'string'

  

  老版本firefox不支持innerText 

  2016年的时候 innerText在Dom中规定为正式的标准属性

  innerContent  输出原本的样式

```js
	// 如何知道。浏览器是否支持元素的某个属性
    var box = document.getElementById('box');
    // 当属性不存在的时候返回的是  undefined
    console.log(typeof box.a);
    // 当属性存在的时候返回的是 该属性的类型
    console.log(typeof box.id);

    var box = document.getElementById('box');
    console.log(getInnerText(box));

    // 处理innerText的兼容性问题
    function getInnerText(element) {
      // 判断当前浏览器 是否支持元素的innerText属性，支持innerText 使用element.innerText获取内容
      // 如果不支持innerText属性，使用element.textContent获取内容
      
      if (typeof element.innerText === 'string') {
        return element.innerText;
      } else {
        return element.textContent;
      }
    }

    // 设置内容的时候
    // innerText(textContent)       当设置不含标签的内容的时候应该使用innerText，效率高
    // innerHTML 
```



- HTML转义符

```js
"		&quot;
'		&apos;
&		&amp;
<		&lt;   // less than  小于
>		&gt;   // greater than  大于
空格	   &nbsp;
©		&copy;
```



##### 表单元素属性

- value 用于大部分表单元素的内容获取(option除外)

给文本框赋值

- type 可以获取input标签的类型(输入框或复选框等)

布尔类型的值

- disabled 禁用属性  true:禁用  false:未禁用

```js
<input type="text"  id="txt" value='123'>
console.log(txt.disabled);
txt.disabled = true;  // 禁用用户输入
```

- checked 复选框选中属性
- selected 下拉菜单选中属性



##### 自定义属性操作

- element.getAttribute('属性名') 获取标签行内属性  //返回指定属性名的属性值
- element.setAttribute('属性名','属性值') 设置标签行内属性  
- element.removeAttribute('属性名') 移除标签行内属性
- 与element.属性的区别: 上述三个方法用于获取任意的行内属性

```js
		<div id="box" css='s'></div>

        // 获取:元素对象.getAttribute('属性名');  返回指定属性名的属性值。
        console.log(document.getElementById('box').getAttribute('id'));
        
        // 设置:元素对象.setAttribute('属性名','属性值');
        document.getElementById('box').setAttribute('id','1');

        // 移除:元素对象:removeAttribute('属性名');
        document.getElementsByTagName('div')[0].removeAttribute('css');
```



##### 样式操作

- 使用style方式设置的样式显示在标签行内

```js
        .red {
            background-color: red;
        }

		<div id="box"></div>

        // 根据id获取元素,封装成函数 my$(id)
        function my$(id) {
            return document.getElementById(id);
        }
        // 使用类样式 my$('div1').className = '类样式名';
        my$('box').className = 'red';
        // 使用style my$('div1').style.backgroundColor = 'red';
        my$('box').style.backgroundColor = 'green';
        // 当设置类型比价少的时候,用style比较方便
```

注意

通过样式属性设置宽高、位置的属性类型是字符串，需要加上px



##### 类名操作

- 修改标签的className属性相当于直接修改标签的类名

```js
var box = document.getElementById('box');
box.className = 'show';
```



#### 创建元素的三种方式

// 动态创建元素

​            // 第1种方式   **document.write()**

​            document.write('hello? <p>World!</p>');  // 在事件中使用会把页面之前的内容覆盖掉,很少使用

​            // 第2种方式  **innerHTML**

​            box.innerHtml = 'hello? <p>World!</p>';  // 解析成为HTML格式  简单,但不灵活

​            // 第3种方式   **document.createElement()**

​            document.createElement('p');  // 在内存中创建一个DOM p标签对象  操作的是对象  灵活,但不简单

​            p.innerHtml = 'Hello World';  // 设置p标签对象的属性

​            box.appendChild(p);  // 把p元素对象,追加到box中,最后面的子元素



#### 节点操作

##### 节点属性

- **nodeType**:节点的类型

  1----元素,

  2---属性,

  3---文本

- **nodeName**:节点的名字

  元素节点---大写的元素名字,

  属性节点---小写的属性名字,

  文本节点----#text

- **nodeValue**:节点的值

  元素节点---null,

  属性节点---属性值,

  文本节点---文本内容



##### 节点层级

**获取节点**

- 父子节点

  节点 : 属性节点/元素节点/文本节点/注释节点

1. **parentNode** 获取父节点,只有一个

2. **childNodes** 获取所所有的子节点,有很多个   是一个属性,不需要()

3. 遍历所有子节点,判断子节点.nodeType==1,是元素

   元素

   1. **children** 获取所有子元素,有很多个



- 兄弟节点

​        box.**nextSibling**  获取下一个兄弟节点

​        box.**previousSibling**  获取上一个兄弟节点

​        box.**nextElementSibling**  获取下一个兄弟节点

​        box.**previousElementSibling**  获取上一个兄弟节点



**插入节点**

​	**appendChild(要插入的元素)**  追加元素到调用对象元素的末尾,如果已存在,会先移除,后插入 如需保存原始节点,需先克隆节点

​        **insertBefore(新插入的元素,参考的元素)** 把元素插入到页面的指定位置,参考元素之前

​            	// 1. 创建一个元素

​            	// 2. 插入元素到指定位置

​        **repleaceChild(新的元素,要替换的元素)** 把当前元素的标签进行替换,返回被替换的节点



#### 事件详解

##### 事件的注册方式

​        1.

​        元素对象.onclick = function() {}

​        元素对象.onclick = null;

​        2.

​        元素对象.addEventListener('事件名', 函数, false );   添加事件  时间类型去掉on

​        元素对象.removeEventListener('事件名', 函数, false);   删除事件



##### 事件的三个阶段  

​	事件发生的时候,事件传播的三个不同的阶段

​            事件的捕获阶段 : 发生在事件到达目标元素对象之前,可以阻止事件的发生

​            事件的执行阶段 : 发生在事件到达目标元素对象

​            事件的冒泡阶段 : 子元素发生某个事件后,会把发生的时间向父级元素传播,父级元素也可以收到相同的事件信息.

​        冒泡阶段研究的最多:

​            addEventListener 如果不指定第三个参数,研究的就是冒泡阶段

​            onclick , 也是绑定的冒泡阶段

​            方向是从事件源对象,向外层进行扩散.

​            在冒泡阶段,事件时机已经发生了.



##### 事件委托

​	利用了事件的冒泡, 捕获子元素发生的事件, 只需要在父元素上注册一次事件, 而不需要在子元素上反复注册.   通过给父元素添加处理函数来处理子元素发生的事件.

​            事件的委托依赖于两个要点,1.事件的冒泡,2.事件对象 event .

##### 事件对象

​	当事件发生时, 浏览器将时间的相关信息封装成一个对象, 以实参的方式传递给事件处理函数(监听器), 在事件处理函数中就可以直接使用事件对象.   记录了事件发生过程中相关信息的对象

​	Dom 标准中,是给事件处理函数一个参数

​	event就是事件对象

属性  

​	event.eventPhase;   事件的阶段 : 1. 捕获阶段 2. 目标阶段 3. 冒泡阶段 了解

​	event.target;    真正触发事件的对象 事件源

​	event.currentTarget;   事件处理函数所属的对象 this

​	event.type;     事件的类型  'click' 'onmouseover' 'onmouseout' ,可以判断当前事件对象发生事件的类型

​	event.preventDefault()   取消默认行为   return false;

​	event.stopProgration()    停止事件传播的方法



##### 事件处理函数绑定的元素对象的区别:

​                绑定在事件源上

​                    eventPhase值为2,意思是事件的执行阶段

​                    target 就是当前的事件源

​                    currentTarget 也是当前对象

​                    this 也是当前对象

​                绑定在事件源的父元素上

​                    eventPhase值为3,意思是事件的冒泡阶段

​                    target 就是实际上发生事件的元素对象(子元素对象)

​                    currentTarget 就是当前的父元素对象

​                    this 也是当前的父元素对象

#### 常用的鼠标和键盘事件

- onmouseup 鼠标按键放开时触发
- onmousedown 鼠标按键按下触发
- onmousemove 鼠标移动触发
- onkeyup 键盘按键按下触发
- onkeydown 键盘按键抬起触发



#### 鼠标的位置信息

​	    clientX / clientY : 发生鼠标事件时,相对于当前可视区域的位置

​            pageX / pageY : 发生鼠标事件时,相对于整个页面的位置

​            pageY = clientY + 页面滚动出去的距离

​            document.body.scroolTop : 获取页面纵向滚动的距离

​            offsetLeft : 获取盒子左边距, 只读属性

​            offsetRight : 获取盒子右边距, 只读属性



和位置相关的三组属性

​            offset 偏移量, 相对于有定位的父元素, 返回数值类型

​                元素.offsetLeft;  相对于定位父元素的左边距

​                元素.offsetTop;

​                元素.offsetWidth;  包括边框和padding

​                元素.offsetHeight; 

​                元素.offsetParent; 获取最近的有定位的父元素

​            

​            client 边框宽度

​                元素.clientLeft;  自身边框宽度

​                元素.clientTop;

​                元素.clientWith;  包括padding不包括边框

​                元素.clientHeight;

​            scrool 滚动距离

​                元素.scroolLeft;  

​                元素.scroolTop;  向上滚动出去的距离

​                元素.scroolWidth; 

​                元素.scroolHeight;  包括padding和未显示内容的高度

​                onscrool 当拖动滚动条的时候触发事件





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
