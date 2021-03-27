---
title: 'Using Google Fonts in Gatsby'
date: '2020-12-06'
description: ''
tags: ['gatsby', 'snippets']
---

Google Fonts is a great resource for adding beautiful fonts to your website.
Adding fonts to a Gatsby project is as easy as installing the `gatsby-plugin-google-fonts` plugin:

```shell
npm install gatsby-plugin-google-fonts --save
```

Then, add your favorite fonts to your `gatsby-config.js` file:

```js
module.exports = {
  siteMetadata: {
    title: `I like Google Fonts`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto:300,300i,400,400i,700`],
        display: 'swap',
      },
    },
  ],
};
```

In the example above, I am using `display: swap`. The `font-display` property defines how font files are loaded and displayed by the browser. `swap` tells the browser to use the fallback font to display the text, until the custom font has fully downloaded (aka "flash of unstyled text").

If you are looking for inspiration or help in choosing the right fonts for your project, make sure to check out [Google Fonts](https://fonts.google.com) and [FontPair](https://fontpair.co).
