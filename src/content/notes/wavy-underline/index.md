---
title: "Wavy Underline"
date: "2021-02-09"
tags: ["css"]
---

Add a wavy underline to your text with CSS:

In the HTML file:

```html
<p>
  Check out
  <a href="https://eneaxharja.com">my own little corner of the web!</a>
</p>
```

In the CSS file:

```css
body {
  background-color: #000;
  color: #fff;
  font-size: 24px;
  padding: 64px;
  font-family: sans-serif;
  text-align: center;
}

a {
  color: #3ddc84;
  text-decoration: underline wavy #4285f4;
}
a:hover {
  text-decoration: underline solid #4285f4;
}
```
