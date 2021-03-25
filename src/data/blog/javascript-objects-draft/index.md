---
title: Javascript Objects
date: "2020-06-03"
description: ""
tags: ["javascript"]
---

# Build JavaScript Objects

`Objects` represent another data type in JavaScript, which we can use to store information in a structured way.
They are similar to arrays, with the exception that, instead of using indexes to access and modify their data, we use `properties`.

Example:

```js
var human = {
  name: "Enea",
  age: "28",
  favoriteColors: ["black", "white"],
}
```

Moreover, we can also use `numbers` as `properties` and we can even omit the quotes for single-word string properties:

```js
var anotherObject = {
  make: "Ford",
  1: "one",
  model: "focus",
}
```

## Accessing Object Properties with Dot Notation

There are two ways to access the properties of an object: dot notation (`.`) and bracket notation (`[]`).

`Dot notation` is used particularly when we already know in advance the name of the property we're trying to access.

Example:

```js
var clothes = {
  shirt: "jersey",
  shoes: "cleats",
}

var shirtValue = clothes.shirt
var shoesValue = clothes.shoes
```

## Accessing Object Properties with Bracket Notation

The second way to access the properties of an object is using bracket notation (`[]`).
Bracket notation is extremely useful when the property of the object we are trying to access has a space in its name.

Example:

```js
var menu = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
}

var entreeValue = menu["an entree"]
var sideValue = menu["my side"]
var drinkValue = menu["the drink"]
```

## Accessing Object Properties with Variables

When dealing with objects, we can use bracket notation to access a property which is stored as the value of a variable.
This can be extremely useful when iterating through an object's properties.

Example:

```js
var juve = {
  7: "Ronaldo",
  9: "Higuain",
  10: "Dybala",
}

var playerNumber = 7
var player = juve[playerNumber] // "Ronaldo"
```

## Updating Object Properties

Once a JavaScript object has been created, we can update its properties at any time by using either `dot` or `bracket notation`.

Example:

```js
var player = {
  name: "Ronaldo",
  number: 7,
  goldenBalls: 5,
}
console.log(player) // {name: "Ronaldo", number: 7, goldenBalls: 5}

player.name = "Del Piero"
player.number = 10
console.log(player) // {name: "Del Piero", number: 10, goldenBalls: 5}
```

## Add New Properties to a JavaScript Object

We can add new properties to existing JavaScript objects the same way we modify them.

Example:

```js
var player = {
  name: "Ronaldo",
}
console.log(player) // Ronaldo

player.number = 7
player["goldenBalls"] = 5
console.log(player) // {name: "Ronaldo", number: 7, goldenBalls: 5}
```

## Using Objects for Lookups

When we know that our input data is limited to a certain range, we can use an object to look for values rather than a `switch` statement or an `if/else` chain.

Example:

```js
// Setup
function phoneticLookup(val) {
  var result = ""

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  }

  result = lookup[val]
  return result
}

phoneticLookup("charlie")
```

## Testing Objects for Properties

Sometimes it is useful to check if the property of a given object exists or not.
That's why we use the `.hasOwnProperty(propname)` object method to determine if that object has the given property name.
The `.hasOwnProperty()` method returns `true` or `false` if the property is found or not.

Example:

```js
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp]
  } else {
    return "Not Found"
  }
}
```

## Accessing Nested Objects

We can access sub-properties of objects by chaining together the `dot` or `bracket` notation.

Example:

```js
var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
}

var gloveBoxContents = myStorage.car.inside["glove box"]
```
