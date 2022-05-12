---
title: 'How to use Tailwind CSS with styled-components'
date: '2020-10-23T22:12:03.284Z'
description: 'How to use Tailwind CSS with styled-components.'
tags: ['react', 'css']
---

Tailwind is a utility-first CSS framework for building custom designs. It's highly customizable and provides you all the necessary building blocks you need to build a design.

My favorite approach to style React components is `CSS-in-JS`. With styled-components, I can utilise tagged template literals to write actual CSS code to style my components. That's why I thought to combine the Tailwind experience with the React component model.

## Installation

To get started, you need to install Tailwind and styled-components:

```shell
npm install tailwind.macro@next --save
npm install styled-components --save
```

## Configuration

Once `tailwind macro` is installed, we need to add a `babel-plugin-macros.config.js` file in the root folder of our project. Then we need to tell `tailwind macro` to use the `styled-component macro`.

```js
// babel-plugin-macros.config.js
module.exports = {
  tailwind: {
    config: './src/tailwind.config.js',
    styled: 'styled-components/macro',
  },
};
```

This is all we need in order to write Tailwind classes inside a styled component. However, if you want to add additional Tailwind features, you can create an optional JavaScript configuration file:

```js
// src/tailwind.config.js
module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
```

## Implementation

Now is the time to create our React component and styled it using the styled-components approach together with Tailwind classes:

```jsx{3,4,8,12,14}
// src/pages/test.js
import React from "react"
import styled from "styled-components/macro"
import tw from "tailwind.macro"

// styles
const Header = styled.header`
  ${tw`bg-black min-h-screen flex flex-col items-center justify-center text-xl text-white`};
`

const Test = () => (
  <div css={tw`text-center`}>
    <Header>
      <p css={tw`text-blue-300`}>
        Using <code>Tailwind</code> and <code>styled-components</code> together.
      </p>
    </Header>
  </div>
)

export default Test
```

For more information, you can have a look at [Tailwind](https://tailwindcss.com) and [styled-components](https://styled-components.com) official documentation.
