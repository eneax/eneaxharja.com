---
title: "Mutation in JavaScript"
date: "2023-05-07"
---

The word mutation is used when you want to indicate that you are changing the properties of an object and you are very intentional about it (mutation = change).

You can think of properties as wires that originate from an object and point to a value.

```js
let mario = {
  name: "Mario",
  address: {
    city: "Mushroom Kingdom",
  },
};
```

There is a variable `mario` that points to an object that has two properties:

- The `name` property points to the string value `"Mario"`.
- The `address` property points to another object. This other object has only one property called `city`, which points to the string value `"Mushroom Kingdom"`.

Note that here you have two completely separate objects. In fact, two pairs of curly braces `{}` mean two objects. Although objects appear to be nested in the code, a JavaScript object cannot be inside another object.

Now, let's declare another variable:

```js
let luigi = {
  name: "Luigi",
  address: mario.address,
};
```

There is a new variable `luigi` that points to an object with two properties:

- The `name` property points to the string value `"Luigi"`.
- The `address` property points to the same object that `mario.address` already points to.

Keep in mind that a property always points to a value. When you see `address: mario.address`, you need to figure out the value of `mario.address` and point Luigi's `address` property wire to that value. It is the value itself that matters during assignment, not how you found it.

As a result, there are now two different `address` properties pointing to the same object.

## Mutating an Object

But what if you decide that Luigi should have a different name and address? You can do this by changing the properties of the object to which `luigi` points:

```js
luigi.name = "Luigi (Player 2)";
luigi.address.city = "Lake Kingdom";
```

The first line mutates the object to which `luigi` points. However, the second line mutates a completely different object, the one we can reach via `luigi.address`. However, the same object can be reached also via `mario.address`:

```js
console.log(mario.name); // "Mario"
console.log(mario.address.city); // "Lake Kingdom"
console.log(luigi.name); // "Luigi (Player 2)"
console.log(luigi.address.city); // "Lake Kingdom"
```

Just like that, you mutated the object that `mario.address` points to without ever touching `mario` itself.

## Possible Solution: Mutating Another Object

One way to fix this would be to avoid mutating shared data:

```js
luigi.name = "Luigi (Player 2)";
luigi.address = { city: "Lake Kingdom" };
```

With `luigi.address.city = "Lake Kingdom"`, you are mutating the `city` property of the object that `luigi.address` points to. Because `luigi.address` and `mario.address` point to the same object, you unintentionally mutated shared data.

With `luigi.address = { city: "Lake Kingdom" }`, you are mutating the `address` property of the object that `luigi` points to. In other words, you are only mutating the object representing Luigi's data. This is why `mario.address.city` remains unchanged.

## Alternative Solution: No Object Mutation

There is another way to make `luigi.address.city` return `"Lake Kingdom"` while `mario.address.city` keeps saying `"Mushroom Kingdom"`:

```js
let luigi = {
  name: "Luigi (Player 2)",
  address: { city: "Lake Kingdom" },
};
```

In this case, you do not mutate the Luigi object at all. Instead, you reassign the variable `luigi` to point to a new version of Luigi's data. From now on, `luigi` points to a different object, whose `address` also points to a completely new object.

```js
console.log(mario.name); // "Mario"
console.log(mario.address.city); // "Mushroom Kingdom"
console.log(luigi.name); // "Luigi (Player 2)"
console.log(luigi.address.city); // "Lake Kingdom"
```

You might notice that there is now an old version of the Luigi object. JavaScript will automatically remove it from memory if there are no wires pointing to it (garbage collection).

## let, const and mutation

In modern JavaScript, you can use the `let` and `const` keywords to declare variables:

```js
const mario = {
  name: "Mario",
};
```

The `const` keyword allows you to create a constant (read-only variable). Once a constant is declared, it cannot point it to a different value:

```js
mario = luigi; // TypeError
```

Although `const` prevents variable reassignment, it does not prevent object mutation:

```js
mario.name = "Mario (Player 1)";
console.log(mario.name); // "Mario (Player 1)"
```

Only the variable wire `mario` is read-only (`const`). Since it points to an object, the properties of that object can be mutated.

Therefore, it is important to be very careful about what you are mutating to avoid accidental mutation of shared data that can lead to bugs.
