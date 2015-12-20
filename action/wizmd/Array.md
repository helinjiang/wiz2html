<!--
title: Array 对象
date: 2015-10-28
-->

数组（Array）是值的有序集合。每个值叫做一个元素，而每个元素在数组中有一个位置，以数字表示，称为索引。数组是JavaScript的内置对象。关于数组的详细讨论，可以参阅《[小何前端笔记之JavaScript](http://www.helinjiang.com/note/javascript/)》中 [数组](http://www.helinjiang.com/note/javascript/array.html) 一章。

## 定义和用法
Array不仅是JavaScript的内置对象，同时也是一个构造函数，可以用它生成新的数组。作为构造函数时，Array可以接受参数，但是不同的参数，会使得Array产生不同的行为。

### 构造函数Array()语法

```javascript
    new Array();
    new Array(_size_);
    new Array(_element0_, _element1_, ..., _elementn_);
```

### 参数
* 参数 `size` 是期望的数组元素个数。返回的数组，`length`字段将被设为 `size` 的值。
* 参数 `element ..., elementn` 是参数列表。当使用这些参数来调用构造函数 `Array()` 时，新创建的数组的元素就会被初始化为这些值。它的 `length` 字段也会被设置为参数的个数。

```javascript
var a1 = new Array(); //创建一个空数组，等价于[]
var a2 = new Array(3); //创建长度为3的数组，等价于[undefined,undefined,undefined]
var a3_1 = new Array("3"); //创建长度为1的数组，等价于["3"]
var a3_n = new Array(5,3,1,"testing"); //显示指定，等价于[5,3,1,"testing"]
```

### 返回值
返回新创建并被初始化了的数组。

* 无参数时，返回一个空数组，其 `length` 值为 0。
* 单个参数时，如果该参数是正整数，则这个正整数表示新数组的长度，该构造函数将返回具有相应个数且元素全为 `undefined` 的数组；如果该参数是非正整数（比如字符串、布尔值、对象等），则该值是新数组的成员，即该数组只有1个元素，这个元素就是传入的参数。
* 多个参数时，这些参数都是新数组的成员。

> 当把构造函数作为函数调用，不使用 new 运算符时，它的行为与使用 new 运算符调用它时的行为完全一样。换言之就是使用构造函数Array()来定义数组时，可以不必使用new，即`var a2 = new Array(3); `与`var a2 = Array(3); `都是合法的。**但强烈推荐使用new运算符**，因为这更能突出其是构造函数的特征。

### 提示
尽管定义数组可以使用其[构造函数Array()语法](#h_array_constructor)，但定义数组却不仅这一种方式，还可以采用[数组直接量](http://www.helinjiang.com/note/javascript/array.html#h_array_literal)（也有的称之为数组的字面量），会更加方便和简洁。

```javascript
var a1 = []; 
var a2 = [undefined,undefined,undefined];
var a3_1 = ["3"];
var a3_n = [5,3,1,"testing"];
```

## 更多
* [Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [JavaScript Array 对象](http://www.w3school.com.cn/jsref/jsref_obj_array.asp)