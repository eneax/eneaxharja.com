---
title: "Sort Object by property"
date: "2021-03-19"
tags: ["javascript"]
---

Sort Object by property using JavaScript:

```js
const topScorers = {
  Ronaldo: 770,
  Bican: 805,
  Pele: 767,
};

const playersSorted = Object.keys(topScorers).sort(
  (a, b) => topScorers[b] - topScorers[a]
);

console.log(playersSorted); // ["Bican", "Ronaldo", "Pele"]
```
