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
