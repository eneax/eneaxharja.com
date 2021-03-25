---
title: Format text with JavaScript
date: "2021-02-12"
description: ""
tags: ["javascript"]
---

Remove space characters (`\n`) from string

```js
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non neque lacus. Nam pulvinar ullamcorper augue quis ornare.\nVestibulum interdum, metus sed commodo auctor, enim elit blandit risus, nec gravida dui velit nec risus.\nCurabitur dapibus risus eu molestie vehicula. Nam a accumsan magna. In consequat rhoncus mollis.\nIn iaculis vulputate maximus. Nam mattis facilisis nisi, eget malesuada augue pretium ut. Sed lacinia ac ipsum vulputate bibendum. Duis purus enim, tincidunt et nunc id, pretium hendrerit metus. Suspendisse potenti.\nAliquam a dapibus turpis."

export const formattedText = text => text.replace(/\\n/g, "") )
```

Remove `[:en]` and `[:]` characters from string

```js
const text =
  "[:en]Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non neque lacus. Nam pulvinar ullamcorper augue quis ornare.\nVestibulum interdum, metus sed commodo auctor, enim elit blandit risus, nec gravida dui velit nec risus.\nCurabitur dapibus risus eu molestie vehicula. Nam a accumsan magna. In consequat rhoncus mollis.\nIn iaculis vulputate maximus. Nam mattis facilisis nisi, eget malesuada augue pretium ut. Sed lacinia ac ipsum vulputate bibendum. Duis purus enim, tincidunt et nunc id, pretium hendrerit metus. Suspendisse potenti.\nAliquam a dapibus turpis.[:]"

const specialCharacters = /\[[\s\S]*?\]/g
export const formattedDesc = desc => desc.replace(specialCharacters, "")
```

From `[:en]blog tips[:de]blogging tipps[:]` to `blogging tipps`

```js
const text = "[:en]blog tips[:de]blogging tipps[:]"

const specialCharacters = /\[[\s\S]*?\]/g
export const formattedTagName = name =>
  name.replace(/:en][\s\S]*?\[/g, "").replace(specialCharacters, "")
```
