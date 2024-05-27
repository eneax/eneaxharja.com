---
title: "Remove a property from an object"
date: "2021-01-06"
tags: ["javascript"]
---

Remove a property from an object using the `rest operator` (ES6):

```js
const user = {
  name: "Enea",
  age: 99,
  jsMaster: true,
};

const { jsMaster, ...updatedUser } = user;

console.log(updatedUser); // {name: "Enea", age: 99}
console.log(user); // {name: "Enea", age: 99, jsMaster: true}
```
