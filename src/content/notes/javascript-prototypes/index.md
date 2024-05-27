---
title: "Prototypes in JavaScript"
date: "2023-05-26"
tags: ["javascript"]
---

A prototype is like a relationship. An object can point to another object as its prototype. Consider the following example:

```js
let human = {
  hasRedHat: true,
};

let mario = {
  name: "Mario",
};

console.log(mario.hasRedHat); // undefined
```

The variable `mario` points to an object that does not have the `hasRedHat` property. Logging this property would trigger JavaScript's default behavior and return `undefined`.

However, you can tell JavaScript to keep looking for the missing property in another object. This is done by specifying the special property `__proto__`, also known as the object's prototype.

In fact, any JavaScript object can choose another object as a prototype:

```js
let human = {
  hasRedHat: true,
};

let mario = {
  name: "Mario",
  __proto__: human, // Look for other properties in the "human" object
};

console.log(mario.hasRedHat); // true
```

In the example above, you start by looking at the `mario` wire leading to an object. You first look if this object has a `hasRedHat` property. The answer is no, but it has a prototype. You then follow the `__proto__` wire that leads to another object (`human`). You look at that object to see if it has the `hasRedHat` property. The answer is yes, so you follow the `hasRedHat` wire leading to `true`. Therefore, the result of `mario.hasRedHat` is `true`.

Note that this does not mean that `mario` has a `hasRedHat` property. Its prototype object, the same one to which `human` points, does. With `__proto__`, you instruct JavaScript to ask another object.

## The Prototype Chain

Think of a prototype as a relationship between objects, in which one object points to another object as its prototype. This sequence of objects is known as the object's **prototype chain** and cannot be circular.

```js
let mammal = {
  hasBrain: true,
};

let human = {
  __proto__: mammal,
  hasRedHat: true,
};

let mario = {
  __proto__: human,
  name: "Mario",
};

console.log(mario.hasBrain); // true
```

You can see that JavaScript will look for the property first in the `mario` object, then in its prototype, then in the prototype of that object, and so on. You would only get `undefined` if you ran out of prototypes and had not yet found the property you were looking for.

## Shadowing

Consider the following example where both objects have a property called `hasRedHat`:

```js
let human = {
  hasRedHat: false,
};

let mario = {
  __proto__: human,
  hasRedHat: true, // This object has its own "hasRedHat" property
};

console.log(human.hasRedHat); // false
console.log(mario.hasRedHat); // true
```

If `mario` did not have its own `hasRedHat` property, you would have to look at the prototype. But since the object `mario` points to has its own `hasRedHat` property, you don't need to keep looking for the answer. Once you find the property, you stop the search.

If you want to check whether an object has its own property wire with a certain name, you can call the built-in function `hasOwnProperty`. It returns `true` for own properties and does not look at prototypes:

```js
console.log(human.hasOwnProperty("hasRedHat")); // true
console.log(mario.hasOwnProperty("hasRedHat")); // true
```

## Assignment

When you **read** a property that does not exist in an object, you keep looking for it in the prototype chain. If you do not find it, you get `undefined`.

However, when you **write** a property that does not exist in an object, the assignment creates the property on that object. Therefore, prototypes play no role in this case.

Consider the following example:

```js
let human = {
  hasRedHat: false,
};

let mario = {
  __proto__: human,
};

console.log(human.hasRedHat); // false
console.log(mario.hasRedHat); // false

mario.hasRedHat = true;

console.log(human.hasRedHat); // false
console.log(mario.hasRedHat); // true
```

Before the assignment, both expressions result in `false`. Then you execute this assignment:

```js
mario.hasRedHat = true;
```

Assignments occur on the object itself. So `mario.hasRedHat = true` creates a new property of its own called `hasRedHat` on the object to which `mario` points. It has no effect on the prototype. As a result, `human.hasRedHat` is still `false`, but `mario.hasRedHat` is now `true`.

## The Object Prototype

The Object Prototype is a special object that is used as the default prototype of all objects.

```js
let obj = {};
console.log(obj);
```

Although you have created what appears to be an empty object, `obj.__proto__` is not `null` or `undefined`. It has a hidden `__proto__` wire that points to the **Object Prototype** by default. This allows you to access built-in object methods:

```js
let mario = {
  name: "Mario",
};

console.log(mario.hasOwnProperty); // (function)
console.log(mario.toString); // (function)
```

These built-in properties are normal properties on the Object Prototype that you can access because the `mario` object's prototype is **the** Object Prototype.

The Object Prototype is an object without a prototype. You will not need to create objects like this, but it is useful to know that it exists and that it is created by customizing the `__proto__` property.

```js
let nintendo = {
  __proto__: null,
};

console.log(nintendo.hasOwnProperty); // undefined
console.log(nintendo.toString); // undefined
```

The example above will produce an object that does not have a prototype and, as a result, does not even have built-in object methods.

## Polluting the Prototype

JavaScript can look for missing properties in the prototype. However, since most objects share the same prototype, it can also make new properties appear on all objects, mutating the prototype.

The mutating of a shared prototype is called **prototype pollution**:

```js
let obj = {};
obj.__proto__.vehicle = "Standard Kart";

let mario = {
  name: "Mario",
};

let luigi = {
  name: "Luigi",
};

console.log(mario.vehicle); // "Standard Kart"
console.log(luigi.vehicle); // "Standard Kart"
```

You have mutated the Object Prototype by adding the `vehicle` property to it. As a result, any object will use the same `vehicle`.

In the past. prototype pollution has been a popular technique for adding new features to JavaScript. However, the web community no longer recommends it.

## One more thing: `__proto__` vs. `prototype`

Browsing through the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), you will encounter the `prototype` property. Before JavaScript added support for classes, it was common to write them as functions that returned objects. Whenever you wanted to share a prototype with some shared methods, you had to manually add `__proto__` to each object.

```js
function SuperMarioMushroom() {
  return { type: "power-up" };
}

let mushroomProto = {
  consume() {
    console.log("I got the power!");
  },
};

let mushroom1 = SuperMarioMushroom();
mushroom1.__proto__ = mushroomProto;
mushroom1.consume();

let mushroom2 = SuperMarioMushroom();
mushroom2.__proto__ = mushroomProto;
mushroom2.consume();
```

To solve this problem, the `new` keyword was added to JavaScript. If you use the `new` keyword before the function call, the object is created automatically, without having to return it from the function, and it becomes available as `this`.

Also, the object's `__proto__` will be set to whatever you add into the function's `prototype` property, without having to manually set it.

```js
function SuperMarioMushroom() {
  this.type = "power-up";
}

// prototype approach 1
SuperMarioMushroom.prototype = {
  consume() {
    console.log("I got the power!");
  },
};

// prototype approach 2
SuperMarioMushroom.prototype.consume = function () {
  console.log("I got the power!");
};

let mushroom1 = new SuperMarioMushroom(); // __proto__: SuperMarioMushroom.prototype
mushroom1.consume();

let mushroom2 = new SuperMarioMushroom(); // __proto__: SuperMarioMushroom.prototype
mushroom2.consume();
```

The example above shows how the `prototype` property of a function allows you to configure the `__proto__` of the objects you get with `new` calls.

Although the `prototype` property is still available on built-in functions, in modern JavaScript, you would usually use the `class` syntax with a [constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor) instead:

```js
class SuperMarioMushroom {
  constructor() {
    this.type = "power-up";
  }
  consume() {
    console.log("I got the power!");
  }
}

let mushroom1 = new SuperMarioMushroom(); // __proto__: SuperMarioMushroom.prototype
mushroom1.consume();

let mushroom2 = new SuperMarioMushroom(); // __proto__: SuperMarioMushroom.prototype
mushroom2.consume();
```

Despite the fact that the use of the `__proto__` syntax is discouraged, remember that under the hood, `mushroom1.consume()` still finds the `consume` property by searching it via `__proto__`.

The use of prototypes to create a class inheritance model has become so common that JavaScript has added a `class` syntax as a convention that hides both `__proto__` and `prototype`.
