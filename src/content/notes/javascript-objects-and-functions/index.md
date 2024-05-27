---
title: "Objects and Functions in JavaScript"
date: "2023-04-04"
tags: ["javascript"]
---

In JavaScript, you will encounter two non-primitive types: objects and functions. These types allow you to create your own values.

## Objects

Objects include arrays, dates, regular expressions, and other non-primitive values:

```js
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof new Date()); // "object"
console.log(typeof /\d+/); // "object"
console.log(typeof Math); // "object"
```

Primitive values are immutable. You cannot create, change or destroy them. It is as if they have always existed and can only be summoned.

```js
let myAge = 99;
let yourAge = 99;
```

Objects, on the other hand, are mutable, so we can create more of them. Each time the object literal `{}` is used, a new object value is created, a value that has never existed before.

```js
let footballPlayer = {};
let basketballPlayer = {};
```

In addition, you can access their properties using the dot notation `.` or the bracket notation `[]`:

```js
let lang = { name: "Italian" };
lang.name = "German"; // Dot notation
lang["name"] = "English"; // Bracket notation
```

I have already mentioned that objects are mutable, so I can create and modify them. But what happens if I want to destroy one?

```js
let garbage = {};
garbage = null; // it will NOT necessarily destroy the object
```

JavaScript is a garbage-collected language. The JavaScript engine automatically destroys objects that are no longer needed. This means that you cannot destroy an object yourself, but if there is no way to reach the object by following the wires from your code, it can disappear.

## Functions

Functions are also values, and just like other values such as primitives and objects, they are separate from your code. They are values of the JavaScript language (or universe).

You define functions so that you can call them later and execute code within them:

```js
let footballTeam = function () {
  return 11;
};
```

Each time a line of code containing a function expression is executed, a new and different function value appears in the JavaScript universe.

Once again, `function() {}` is an expression, or a question to our JavaScript universe, that responds by creating a **new** function value whenever we ask it. This is very similar to the way `{}` creates a **new** object value when it is executed. This means that functions are very special objects in JavaScript.

In the previous example you saw how to declare a function. But how do you call it?

```js
let footballTeam = function () {
  return 11;
};
let footballPlayers = footballTeam;
console.log(footballPlayers); // function() { return 11; }

let players = footballTeam(); // () is a function call
console.log(players); // 11
```

The `()` at the end of the function call `footballTeam()` is what makes the function run. In fact, `footballTeam()` is an expression. It's known as a **call expression**. To answer a call expression, JavaScript runs the code inside our function, and delivers the returned value as the result (in this example, it is `11`).

Without `()`, we would have `let footballPlayers = footballTeam`, which would point `footballPlayers` to the value that `footballTeam` is currently pointing to.
Now, `let players = footballTeam()` means that I am pointing `players` to the value returned by the function that `footballTeam` is currently pointing to.

## Conclusion

Objects and functions are values in JavaScript. While primitive values have always existed in the JavaScript universe, objects and functions behave differently and allow us to generate our own values by writing `{}` and `function() {}` respectively.
