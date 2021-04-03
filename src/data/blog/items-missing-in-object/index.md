---
title: 'Check if there is a missing item in an object'
date: '2021-01-20'
description: 'Given an object, we want to check if there is any missing item in it using JavaScript.'
tags: ['javascript', 'snippets']
---

Given an object, we want to check if there is any missing item in it:

```js
var footballTeam = {
  goalkeepers: {
    url: 'string',
    updatedAt: new Date(),
    createdAt: new Date(),
  },
  defenders: {
    url: 'string',
    updatedAt: new Date(),
    createdAt: new Date(),
  },
  midfielders: {
    url: 'string',
    updatedAt: new Date(),
    createdAt: new Date(),
  },
  attackers: {
    url: 'string',
    updatedAt: new Date(),
    createdAt: new Date(),
  },
};

var positions = ['goalkeepers', 'defenders', 'midfielders', 'attackers'];

var isAnyPositionMissing = positions.some(
  (position) => !footballTeam[position]
);

if (isAnyPositionMissing) {
  console.log('at least one position is missing');
} else {
  console.log("it's all good");
}
```
