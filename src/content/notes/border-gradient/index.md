---
title: "Border Gradient"
date: "2021-02-08"
tags: ["css"]
---

Wrap your text with an animated border.

In the HTML file:

```html
<div>
  <p>Text wrapped by an animated border!</p>
</div>
```

In the CSS file:

```css
body {
  background-color: #000;
}

/* define animated gradient */
@keyframes animatedGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

div {
  position: relative;
}
div:after {
  content: "";
  position: absolute;
  top: calc(-1 * 2px);
  left: calc(-1 * 2px);
  height: calc(100% + 2px * 2);
  width: calc(100% + 2px * 2);
  background: linear-gradient(45deg, #3ddc84, #4285f4);
  border-radius: 0.55rem;
  z-index: -1;
  background-size: 300% 300%;

  /* make border blink */
  animation: animatedGradient 3s ease alternate infinite;
}

p {
  font-size: 40px;
  padding: 20px;
  text-align: center;
  border-radius: 0.55rem;
  background-color: #1c1c1c;
  color: #fff;
  border: 1px solid transparent;
}
```
