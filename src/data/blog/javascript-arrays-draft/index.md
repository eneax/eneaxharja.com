---
title: JavaScript Arrays
date: '2020-05-07'
description: ''
tags: ['javascript']
---

## Store Multiple Values in one Variable using JavaScript Arrays

`Arrays` are JavaScript variables that we use to store several pieces of data in one single place.
We declare arrays with an opening and closing square bracket `[]` and and separate each entry inside with a comma:

```js
var myArray = ['Enea', 28];
```

## Nest one Array within Another Array

Inside arrays, we can store different type of data, including other arrays.
This practice of storing an array within another array is called `multi-dimensional` array:

```js
var myArray = [
  ['Juventus', 3],
  ['Inter', 0],
];
```

## Access Array Data with Indexes

Data stored within arrays can be accessed using bracket notation and indexes.

Just like `strings`, arrays use `zero-based` indexing, that's why the first element in an array has an index of 0. Indexes, however, are used to specify and entry in the array; instead of a character (like in strings).

Example:

```js
var myArray = [50, 60, 70];

var firstValue = myArray[0];
```

## Modify Array Data With Indexes

Contrary to strings, arrays are `mutable` and can be changed freely.

Example:

```js
var myArray = [18, 64, 99];

myArray[0] = 45;

console.log(myArray); // [45, 64, 99];
```

## Access Multi-Dimensional Arrays With Indexes

A `multi-dimensional` array, is as an array of arrays.
If we want to access an element within a `multi-dimensional` array, we've to keep in mind that the first set of brackets refers to the `first level` array, and each additional pair of brackets refers to the next level of entries inside that particular level of array.

```js
var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

// Select number 8
var myData = myArray[2][1];
```

## Manipulate Arrays With push()

We can easily append data to the end of an array using the `.push()` method.

Example:

```js
var pets = [
  ['fish', 10],
  ['cat', 2],
];

pets.push(['dog', 3]); // [["fish", 10], ["cat", 2], ["dog", 3]]
```

## Manipulate Arrays With pop()

If the `push()` method adds a value at the end of an array, the `pop()` method removes an element at the end of an array and returns it.

Example:

```js
var myArray = [
  ['John', 23],
  ['Jack', 20],
  ['cat', 2],
];

var removedFromMyArray = myArray.pop();

console.log(removedFromMyArray); // ["cat", 2]
console.log(myArray); // [["John", 23], ["Jack", 20]]
```

## Manipulate Arrays With shift()

The `shift()` method works just like `pop()`, except that it removes the first element from an array, instead of the last one, and then it returns it.

Example:

```js
var myArray = [
  ['John', 23],
  ['dog', 3],
];

var removedFromMyArray = myArray.shift();

console.log(removedFromMyArray); // ["John", 23]
console.log(myArray); // [["dog", 3]]
```

## Manipulate Arrays With unshift()

The `unshift()` method works just like `push()`, but instead of adding an element at the end of the array, it adds it at the beginning.

Example:

```js
var myArray = [
  ['John', 23],
  ['dog', 3],
];
myArray.shift();

myArray.unshift(['Paul', 35]);

console.log(myArray); // [["Paul", 35], ["dog", 3]]
```