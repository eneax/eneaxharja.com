---
title: 'Intro to Variables in JavaScript'
date: '2020-04-30'
description: ''
tags: ['javascript']
---

Variables allow computers to store and manipulate data.
You can think of a variable as a simple and shorter name that we use to represent the data we want to refer to,
kind of like the `x` and `y` in mathematics.

Computer variables, however, can store not only numbers, but different values at different times.
JavaScript has eight different data types: `undefined`, `null`, `boolean`, `string`, `symbol`, `bigint`, `number` and `object`.

Any of the above seven data types can be stored in a variable.

## Declare JavaScript Variables

In JavaScript, we can create or `declare` a variable by using the magical keyword `var` in front of it:

```js
var myName;
var myPhoneNumber;
```

The code above creates two variables: `myName` and `myPhoneNumber`.

Notice also how each `statement`, a list of instruction that we give to a computer to execute, ends with a `semicolon`.

To declare a variable, you can use `numbers`, `letters`, and `$` or `_`, but not `spaces` or make a variable start with a number.

## Storing Values with the Assignment Operator

Once we have declared a variable, we can store a value in it thanks to the assignment operator `=`.

```js
myPhoneNumber = 17;
```

Here, the `Number` value 17 is assigned to the variable `myPhoneNumber`.
Always keep in mind that assignment goes `from right to left`.

Everything standing on the right of the `=` operator is resolved before the value is assigned to the variable on the left of the operator.

```js
myVar = 17;
myNum = myVar;
```

The code above assigns the `Number` 17 to `myVar`, then resolves `myVar` to 17, and finally assigns the same value to `myNum`.

## Initializing Variables with the Assignment Operator

Although you can declare a variable and subsequently assign a value to it, it is common to initialize a variable to an initial value at the moment when it is declared.

```js
var myNumber = 0;
```

The code above creates a new variable called `myNumber` and assigns it an initial value of `0`.

## Understanding Uninitialized Variables

When working with variables, it's important to keep in mind that, when JavaScript variables are declared, they have an initial value of `undefined`.

For this reason, if we try to perform any mathematical operation with an `undefined` variable, we will get as a result `NaN` ("Not a Number").

```js
var a = 16;
var b = 'My name is ';

a = a + 1;
b = b + ' Enea!';

console.log(a); // 17
console.log(b); // "My name is Enea!"
```

## Understanding Case Sensitivity in Variables

In JavaScript capitalization matters! In fact, all variables and function names are case sensitive.
For instance, if we take into consideration the following three variable names: `MYVAR`, `MyVar` and `myvar`, they all represent three different variables.

Even if the three name above are all valid names for a variable in JavaScript, it's best practice to write variable names in `camelCase`. Thus, if we have to deal with a multi-word variable name, we write the first word in `lowercase` and the first letter of each subsequent word as `capitalized`.

Examples:

```js
var myPhone;
var myPhoneNumber;
var myPersonalPhoneNumber;
```
