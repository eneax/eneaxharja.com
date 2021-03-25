---
title: Smooth Scrolling in Gatsby
date: "2021-01-29"
description: ""
tags: ["gatsby"]
---

The following guide describes how to implement smooth scrolling in Gatsby using the [smooth-scroll](https://www.npmjs.com/package/smooth-scroll).

### Instructions

1. add the package to your project:

```bash
npm install --save smooth-scroll
```

2. in your `layout.js` component, import the `smooth-scroll` package after the import statements but just before the component is rendered:

```js
if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}
```

3. add the `id` property to the element on the page you want to navigate to:

```js
<InfoSection id="info" />
```

4. use `Gatsby Link` to navigate to the desired section of the page:

```js
<Link to="#info">More Info</Link>
```

The approach described above works if you are trying to link to elements on the same page.
However, if you want to implement smooth scrolling for every page, you need to use the `Location` component from [Reach Router](https://reach.tech/router/api/Location) in order to access the current location via a render prop.
