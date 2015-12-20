<!--
title: Object.prototype
date: 2015-11-21
-->

`Object.prototype` 属性表示对象 `Object` 的原型对象。

`Object.prototype` 属性的属性特性：


|  属性         | 值            |
| ------------  | ------------ |
|  writable     | false  |
|  enumerable   | false  |
|  configurable | false  |

## 定义和用法
### 描述
在JavaScript中，所有的对象都是基于 `Object`；所有的对象都继承了 `Object.prototype`的属性和方法，它们可以被覆盖（除了以 `null` 为原型的对象，如 `Object.create(null)`）。

例如，新的构造函数的原型覆盖原来的构造函数的原型，提供它们自己的 `toString()` 方法。对象的原型的改变会传播到所有对象上，除非这些属性和方法被其他对原型链更里层的改动所覆盖。

## 更多
* [Object.prototype](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)