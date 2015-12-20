<!--
title: Object.prototype.toString()
date: 2015-11-21
-->

`Object.prototype.toString()` 方法返回一个该对象的字符串表示。

## 定义和用法
### 语法

    obj.toString()

### 返回值
对象的字符串表示

### 说明
当对象需要转换为字符串时，会调用它的 `toString()` 方法。

默认情况下，每个对象都会从 `Object` 上继承到 `toString()` 方法。如果这个方法没有被这个对象自身或者更接近的上层原型上的同名方法重写，则调用该对象的 `toString()` 方法时会返回" `[object type]` "，这里的字符串 `type` 表示了一个对象类型。下面的代码演示了这一点：

```javascript
var o = new Object();
o.toString(); // 返回了[object Object]
```

> 从 JavaScript 1.8.5 开始（ES5的勘误表中定义），在 `null` 值上调用 `toString()` 方法会返回 `[object Null]`；类似的， `undefined` 上会返回 `[object Undefined]`。但还是不能使用 `null.toString() `，而是使用 `Object.prototype.toString.call(null)` ，具体请看[例子 2：使用 toString() 方法来检测对象类型](#h_example_detect_object_class)。

## 实例
### 例子 1：重写默认的 toString() 方法
```javascript
function Dog(name, breed, color, sex) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.sex = sex;
}

var theDog = new Dog("Gabby", "Lab", "chocolate", "female");

// 采用继承而来的toString()方法，可以看到结果对我们而言是没多少意义的
console.log(theDog.toString()); // [object Object]

// 重写toString()方法
Dog.prototype.toString = function() {
    var ret = "Dog " + this.name + " is a " + this.sex + " " + this.color + " " + this.breed;
    return ret;
}

// 重写之后的输出
console.log(theDog.toString()); // "Dog Gabby is a female chocolate Lab"
```

### 例子 2：使用 toString() 方法来检测对象类型
可以通过 `toString()` 来获取每个对象的类型。为了每个对象都能通过` Object.prototype.toString()` 来检测，需要以 `Function.prototype.call()` 或者 `Function.prototype.apply()` 的形式来调用，把需要检测的对象作为第一个参数传入。

```javascript
console.log(Object.prototype.toString.call(new Date)); // [object Date]
console.log(Object.prototype.toString.call(new Array)); // [object Array]
console.log(Object.prototype.toString.call(new String)); // [object String]
console.log(Object.prototype.toString.call(Math)); // [object Math]

//Since JavaScript 1.8.5（ES5）
console.log(Object.prototype.toString.call(undefined)); // [object Undefined]
console.log(Object.prototype.toString.call(null)); // [object Null]
//注意 null.toString() 还是会报错，只能用 Object.prototype.toString.call(null)
```

## 更多
* [Object.prototype.toString()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)