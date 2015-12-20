<!--
title: Object.prototype.toString()
date: 2015-11-21
-->

`Object` 构造函数创建一个对象包装（object wrapper）。

## 定义和用法
### 语法
```javascript
// Object initialiser or literal
{ [ nameValuePair1[, nameValuePair2[, ...nameValuePairN] ] ] } 

// Called as a constructor
new Object([value])
```

| 参数  | 描述  |
| ------------ | ------------ |
| _nameValuePair1, nameValuePair2, ... nameValuePairN_  | 一对对名称（字符串）与值（任何值），名称与值用冒号（colon）分隔  |
| _value_  | 任何值  |

### 说明
`Object` 构造函数为给定的值创建一个对象包装。如果给定值是  `null` 或 `undefined`，将会创建并返回一个空对象，否则，将返回一个与给定值对应类型的对象。 

当以非构造函数形式被调用时，`Object` 等同于 `new Object()`。

可查看[对象初始化/字面量语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer)。

## 更多
* [Object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)
