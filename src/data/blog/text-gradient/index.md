---
title: Text Gradient
date: '2021-02-06'
description: 'Add gradient color to your text with CSS.'
tags: ['css', 'snippets']
---

Add gradient color to your text with CSS:

```html
<p>Text <span>gradient</span> is amazing!</p>
```

```css
span {
  font-size: 40px;

  /* Gradient effect */
  background-color: #3ddc84;
  background: linear-gradient(45deg, #3ddc84, #4285f4);
  background-size: 100%;
  background-repeat: repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
}
```
