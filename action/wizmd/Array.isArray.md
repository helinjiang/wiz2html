<!--
title: Array.isArray()
date: 2015-11-21
-->

`Array.isArray()` 方法用来判断某个值是否为数组。

## 定义和用法
### 语法
    Array.isArray(value)

| 参数  | 描述  |
| ------------ | ------------ |
|  _value_ | 需要检测的值  |

### 返回值
`true`：是数组，`false`：不是数组。

### 说明
请移步阅读 [Determining with absolute accuracy whether or not a JavaScript object is an array](http://web.mit.edu/jwalden/www/isArray.html) 一文。

## 实例
```javascript
// 下面的函数调用都返回 true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
Array.isArray(Array.prototype); 

// 下面的函数调用都返回 false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });
```

## 更多
* [Array.isArray()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)