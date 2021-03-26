---
title: JavaScript Functions
date: "2020-05-08"
description: ""
tags: ["javascript"]
---

## Write Reusable JavaScript with Functions

In JavaScript, we can divide our code into `reusable parts` called `functions`.

In order to create a function, we use the reserved keyword `function`, followed by the name we want to give to that function, like `reusableFunction()` and a set of curly braces.

The code between the curly braces will be executed every time the function is called.

We can call or `invoke` a function by using its name followed by parentheses, like: `reusableFunction();`.

Example:

```js
function reusableFunction() {
  console.log("🙋‍♂️ 🌎")
}

reusableFunction()
```

## Passing Values to Functions with Arguments

When we create a function, we usually define it along with one or more `parameters`.
A `parameter` is a variable that behaves like a `placeholder` for the values that we'll input to the function when it's called.
`Arguments`, instead are the `actual values` that we pass as input into a function when it's called.

```js
function addNumbers(number1, number2) {
  console.log(number1 + number2)
}

addNumbers(1, 2) // 3
```

## Global Scope and Functions

In JavaScript, `scope` represents the visibility of a variable.

If a variable is defined outside of a function block, it has a `Global scope`, and it can be seen everywhere in our code.
If we use a variable without the `var` keyword, it'll also be created automatically in the global scope. This can lead to some unintended consequences in our code so it's important to always declare variables with `var`.

In the example below, we can see that the variable `myGlobalVariable` is defined outside a function and therefore it belongs to the global scope.
Moreover, also the `anotherGlobalVariable` inside the function `functionOne()` belongs to the global scope, since it has been declared without using the `var` keyword.

Considering that both the variables are defined in the global scope, they can be accessed everywhere in our code, that this is why the function `functionTwo()` has access to them.

```js
var myGlobalVariable = 10

function functionOne() {
  anotherGlobalVariable = 5
}

function functionTwo() {
  var output = ""
  if (typeof myGlobalVariable != "undefined") {
    output += "myGlobalVariable: " + myGlobalVariable
  }
  if (typeof anotherGlobalVariable != "undefined") {
    output += " anotherGlobalVariable: " + anotherGlobalVariable
  }
  console.log(output) // myGlobalVariable: 10 anotherGlobalVariable: 5
}
```

Note: In JavaScript, we use the `typeof` operator to check the type of a variable.

## Local Scope and Functions

When a variable is declared within a function, it has a `local scope`. Thus, it will only be visible within that particular function.

Example:

```js
function myLocalScope() {
  var myName = "Enea"
  console.log(myName)
}
myLocalScope() // "Enea"

console.log(myName) // Uncaught ReferenceError: myName is not defined
```

## Global vs. Local Scope in Functions

We might come across a case in which we have both a local and a global variable with the same name. In this scenario, the local variable prevails over the global variable.

Example:

```js
var clothes = "T-Shirt"

function myOutfit() {
  var clothes = "Sweater"

  return clothes
}

myOutfit() // "Sweater"
```

## Return a Value from a Function with Return

We talked before about `arguments`, as the values that we input in a function.
In order to get an output however, we need to use the `return` keyword.

Example:

```js
function timesFive(num) {
  return num * 5
}

timesFive(1) // 5
timesFive(2) // 10
timesFive(3) // 15
```

## Understanding Undefined Value returned from a Function

If we want to get an output from a function, we use the `return` keyword.
However, a function can be created also without a `return` statement. In this case, when we call the function, it'll still process the inner code but it'll return `undefined`.

Example:

```js
var sum = 0

function addThree() {
  sum = sum + 3
}
addThree() // undefined
```

## Assignment with a Returned Value

When we use the assignment operator (`=`) in JavaScript, everything to the right of the equal sign is resolved before the value is assigned.

This means that we can use the value returned from a function and assign it to a variable.

Example:

```js
var mySumValue = 0

function sum(num1, num2) {
  return num1 + num2
}

mySumValue = sum(2, 3) // 5
```

## Stand in Line (Queue)

In Computer Science, a `queue` represents a first-in-first-out (`FIFO`) data structure, where new items are added at the back of the queue and old items are removed from the front of the queue.

We can recreate this concept in JavaScript using arrays and function, like in the example below:

```js
var testArr = [1, 2, 3, 4, 5]

function nextInLine(arr, item) {
  arr.push(item)
  return arr.shift() // returns the removed element
}

console.log("Before: " + testArr)
console.log(nextInLine(testArr, 6)) // 1
console.log("After: " + testArr)
```

Here, the `nextInLine` function takes an `array` (arr) and a `number` (item) as arguments.
We add the number to the end of the array and then, remove the first element of the array.