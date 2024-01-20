---
title: "Medium zoom-effect in Gatsby"
date: "2020-09-02"
---

Install the [react-medium-image-zoom](https://www.npmjs.com/package/react-medium-image-zoom) package:

```bash
npm i react-medium-image-zoom
```

Create a `zoomedImage.js` component:

```jsx
// zoomedImage.js

import React from "react";
import Image from "gatsby-image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const wrapperStyle = {
  width: "100%",
  height: "100%",
};

const ZoomedImage = (props) => {
  return (
    <Zoom>
      <Image style={wrapperStyle} {...props} />
    </Zoom>
  );
};

export default ZoomedImage;
```

Then, in your stylesheet:

```css
/* zoomedImage.css */

[data-rmiz-wrap="visible"],
[data-rmiz-wrap="hidden"] {
  width: 100%;
  height: 100%;
  display: block;
}
```
