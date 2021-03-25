---
title: Javascript Loops and Iteration
date: "2020-06-05"
description: ""
tags: ["javascript"]
---

## Iterate with JavaScript While Loops

In programming, we can run the same code multiple times by using a `loop`.
In JavaScript, we have different types of loops, and the first one we'll examine is the `while loop`.
It's called while loop because it runs "while" a particular condition is `true` and stops once that condition becomes `false`.

Example:

```js
var myArray = []

var i = 0
while (i < 5) {
  myArray.push(i)
  i++
}

console.log(myArray) // [0, 1, 2, 3, 4]
```

## Iterate with JavaScript For Loops

The most common type of JavaScript loop is the `for loop`. It runs "for" a specific number of times.

`For loops` are made of three expressions separated by semicolons:

```js
for ([initialization]; [condition]; [final-expression])
```

The `initialization` statement is executed only once, just before the loop starts, in order to define and setup the loop variable.

The `condition` statement runs at the beginning of every loop iteration and will continue as long as it evaluates to `true`. When condition becomes `false` at the start of the iteration, the loop will stop executing.
That's why a loop will never execute if `condition` starts as false.

The `final-expression` is executed at the end of each loop iteration, right before the next `condition` check and is used to increment or decrement our loop counter.

Example:

```js
var ourArray = []

for (var i = 0; i < 5; i++) {
  ourArray.push(i)
}
```

In the above example, we initialize the loop with `i = 0` and keep iterating while our condition `i < 5` is `true`. Then, as our `final-expression`, we increment `i` by `1` in each loop iteration with the `i++` syntax.

## Iterate Odd Numbers With a For Loop

We can change the `final-expression` of the `for loop` in order to count by even numbers.

Example:

```js
var myArray = []

for (var i = 1; i <= 10; i += 2) {
  myArray.push(i)
}

console.log(myArray) // [1, 3, 5, 7, 9]
```

## Count Backwards With a For Loop

A `for loop` can also count backwards, if we modify our `initialization`, `condition`, and `final-expression`:

```js
var myArray = []

for (var i = 9; i > 0; i -= 2) {
  myArray.push(i)
}

console.log(myArray) // [9, 7, 5, 3, 1]
```

## Iterate Through an Array with a For Loop

In JavaScript is very common to to iterate through the contents of an array and perform some mathematical operation with each element of the array or display them on the screen.

In the example below, we loop over an array and add the value of each element of the `myArr` array to `total` variable.

```js
var myArr = [2, 3, 4, 5, 6]

var total = 0
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i]
}

console.log(total) // 20
```

## Nesting For Loops

Sometimes, the data that we want to access is deeply nested into a `multi-dimensional array`.
In that case, we have to loop through both the array and any sub-arrays.

Example:

```js
function multiplyAll(arr) {
  var product = 1

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j]
    }
  }

  return product
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]) // 5040
```

## Iterate with JavaScript Do...While Loops

Another type of loop in JavaScript is the `do...while loop`.
The reason behind this name is related to the fact that it will first execute the code inside the loop no matter what, and then, it'll continue to run the loop only while the specified condition evaluates to `true`.

```js
var myArray = []
var i = 10

do {
  myArray.push(i)
  i++
} while (i < 5)

console.log(i) // 11
```

The `do...while loop` is very similar to the `while loop`.
The main difference is that in the `do...while loop`, the code inside the loop will run at least once.
In the `while loop` instead, the code doesn't run if the initial condition is `false`.
