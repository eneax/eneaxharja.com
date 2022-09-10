import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth-none: "none";
    --maxWidth-xs: 20rem;
    --maxWidth-sm: 24rem;
    --maxWidth-md: 28rem;
    --maxWidth-lg: 32rem;
    --maxWidth-xl: 36rem;
    --maxWidth-2xl: 42rem;
    --maxWidth-3xl: 48rem;
    --maxWidth-4xl: 56rem;
    --maxWidth-full: "100%";
    --maxWidth-wrapper: var(--maxWidth-2xl);
    --spacing-px: "1px";
    --spacing-0: 0;
    --spacing-1: 0.25rem;
    --spacing-2: 0.5rem;
    --spacing-3: 0.75rem;
    --spacing-4: 1rem;
    --spacing-5: 1.25rem;
    --spacing-6: 1.5rem;
    --spacing-8: 2rem;
    --spacing-10: 2.5rem;
    --spacing-12: 3rem;
    --spacing-16: 4rem;
    --spacing-20: 5rem;
    --spacing-24: 6rem;
    --spacing-32: 8rem;
    --fontFamily-sans: Montserrat, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --fontFamily-serif: "Merriweather", "Georgia", Cambria, "Times New Roman",
      Times, serif;
    --font-body: var(--fontFamily-serif);
    --font-heading: var(--fontFamily-sans);
    --fontWeight-normal: 400;
    --fontWeight-medium: 500;
    --fontWeight-semibold: 600;
    --fontWeight-bold: 700;
    --fontWeight-extrabold: 800;
    --fontWeight-black: 900;
    --fontSize-root: 16px;
    --lineHeight-none: 1;
    --lineHeight-tight: 1.1;
    --lineHeight-normal: 1.5;
    --lineHeight-relaxed: 1.625;
    --radius: 0.75rem;
    --fontSize-0: 0.833rem;
    --fontSize-1: 1rem;
    --fontSize-2: 1.2rem;
    --fontSize-3: 1.44rem;
    --fontSize-4: 1.728rem;
    --fontSize-5: 2.074rem;
    --fontSize-6: 2.488rem;
    --fontSize-7: 2.986rem;
    --color-primary: rgba(252, 163, 17, 1);
    --color-text: rgba(229, 229, 229, 1);
    --color-text-light: rgba(255, 255, 255, 1);
    --color-heading: rgba(229, 229, 229, 1);
    --color-heading-white: rgba(255, 255, 255, 1);
    --color-accent: rgba(20, 33, 61, 1);
  }

  /* HTML elements */
  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  ::selection {
    background: hsla(0, 0%, 100%, 0.15);
  }

  html {
    line-height: var(--lineHeight-normal);
    font-size: var(--fontSize-root);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: var(--font-heading);
    font-size: var(--fontSize-1);
    color: var(--color-text);
    background-color: rgba(0, 0, 0, 1);
  }

  footer {
    padding: var(--spacing-6) var(--spacing-0);
  }

  hr {
    background: var(--color-accent);
    height: 1px;
    border: 0;
  }

  /* Heading */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-heading);
    margin-top: var(--spacing-12);
    margin-bottom: var(--spacing-6);
    line-height: var(--lineHeight-tight);
    letter-spacing: -0.025em;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: var(--fontWeight-bold);
    color: var(--color-heading);
  }

  h1 {
    font-weight: var(--fontWeight-black);
    font-size: var(--fontSize-6);
    color: var(--color-heading-white);
  }

  h2 {
    font-size: var(--fontSize-5);
  }

  h3 {
    font-size: var(--fontSize-4);
  }

  h4 {
    font-size: var(--fontSize-3);
  }

  h5 {
    font-size: var(--fontSize-2);
  }

  h6 {
    font-size: var(--fontSize-1);
  }

  h1 > a {
    color: inherit;
    text-decoration: none;
  }

  h2 > a,
  h3 > a,
  h4 > a,
  h5 > a,
  h6 > a {
    text-decoration: none;
    color: inherit;
  }

  /* Prose */
  p {
    line-height: var(--lineHeight-relaxed);
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    margin: var(--spacing-0) var(--spacing-0) var(--spacing-8) var(--spacing-0);
    padding: var(--spacing-0);
  }

  ul,
  ol {
    margin-left: var(--spacing-0);
    margin-right: var(--spacing-0);
    padding: var(--spacing-0);
    margin-bottom: var(--spacing-8);
    list-style-position: outside;
    list-style-image: none;
  }

  ul li,
  ol li {
    padding-left: var(--spacing-0);
    margin-bottom: calc(var(--spacing-8) / 2);
  }

  li > p {
    margin-bottom: calc(var(--spacing-8) / 2);
  }

  li *:last-child {
    margin-bottom: var(--spacing-0);
  }

  li > ul {
    margin-left: var(--spacing-8);
    margin-top: calc(var(--spacing-8) / 2);
  }

  blockquote {
    color: var(--color-text-light);
    margin-left: calc(-1 * var(--spacing-6));
    margin-right: var(--spacing-8);
    padding: var(--spacing-0) var(--spacing-0) var(--spacing-0) var(--spacing-6);
    border-left: var(--spacing-1) solid var(--color-primary);
    font-size: var(--fontSize-2);
    font-style: italic;
    margin-bottom: var(--spacing-8);
  }

  blockquote > :last-child {
    margin-bottom: var(--spacing-0);
  }

  blockquote > ul,
  blockquote > ol {
    list-style-position: inside;
  }

  table {
    width: 100%;
    margin-bottom: var(--spacing-8);
    border-collapse: collapse;
    border-spacing: 0.25rem;
  }

  table thead tr th {
    border-bottom: 1px solid var(--color-accent);
  }

  /* Link */
  a {
    color: var(--color-primary);
  }

  a:hover,
  a:focus {
    text-decoration: none;
  }

  a.anchor-headers {
    fill: var(--color-primary);
  }
  a.anchor-headers.before {
    padding-right: 2px;
  }

  /* Media queries */
  @media (max-width: 42rem) {
    blockquote {
      padding: var(--spacing-0) var(--spacing-0) var(--spacing-0) var(--spacing-4);
      margin-left: var(--spacing-0);
    }
    ul,
    ol {
      list-style-position: inside;
    }
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    border-radius: 0.3em;
    padding: 0.15em 0.2em;
    white-space: normal;
  }

  /* Code Blocks */
  .gatsby-highlight {
    background: rgba(22, 27, 34, .8);
    margin-bottom: 1.75rem;
    margin-left: -1.3125rem;
    margin-right: -1.3125rem;
    border-radius: var(--radius);
    -webkit-overflow-scrolling: touch;
    overflow: auto;
    position: relative;
  }

  @media (max-width: 672px) {
    .gatsby-highlight {
      border-radius: 0;
    }
  }

  .gatsby-highlight-code-line {
    background-color: rgba(74, 74, 74, .4);
    display: block;
    margin-right: -1.3125rem;
    margin-left: -1.3125rem;
    padding-right: 1em;
    padding-left: 1em;
    border-left: 0.25em solid var(--color-primary);
  }

  code[class*='language-'],
  pre[class*='language-'] {
    color: white;
    background: none;
  }

  pre[class*='language-'] {
    overflow: auto;
    padding: 1.3125rem;
  }

  pre[data-line] {
    padding: 1em 0 1em 3em;
    position: relative;
  }

  .token.attr-name {
    color: #C3E88D;
    font-style: italic;
  }

  .token.comment {
    color: #4A4A4A;
  }

  .token.string,
  .token.url {
    color: #C3E88D;
  }

  .token.variable {
    color: #EEFFFF;
  }

  .token.number {
    color: #F78C6C;
  }

  .token.builtin,
  .token.char,
  .token.constant,
  .token.function {
    color: #82AAFF;
  }

  .token.punctuation {
    color: #89DDFF;
  }

  .token.selector,
  .token.doctype {
    color: #89DDFF;
    font-style: 'italic';
  }

  .token.class-name {
    color: #FFCB6B;
  }

  .token.tag,
  .token.operator,
  .token.keyword {
    color: #ffa7c4;
  }

  .token.boolean {
    color: #ff9cac;
  }

  .token.property {
    color: #B2CCD6;
  }

  .token.namespace {
    color: #EEFFFF;
  }

  .gatsby-highlight pre[class*='language-'] {
    float: left;
    min-width: 100%;
  }

  .gatsby-highlight pre[class*='language-']::before {
    position: absolute;
    top: 0;
    left: 1rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    line-height: 1;
    border-radius: 0px 0px var(--radius) var(--radius);
    padding: 0.25rem 0.5rem;
    cursor: default;
  }

  .gatsby-highlight pre[class='language-shell']::before {
    content: 'shell';
    background: #d9d7e0;
    color: #232129;
  }

  .gatsby-highlight pre[class='language-markdown']::before {
    content: 'mdx';
    background: rgb(249, 172, 0);
    color: #232129;
  }

  .gatsby-highlight pre[class='language-html']::before {
    content: 'html';
    background: rgb(0, 90, 156);
    color: #fff;
  }

  .gatsby-highlight pre[class='language-css']::before {
    content: 'css';
    background: rgb(255, 152, 0);
    color: #fff;
  }

  .gatsby-highlight pre[class='language-js']::before {
    content: 'js';
    background: rgb(247, 223, 30);
    color: #232129;
  }

  .gatsby-highlight pre[class='language-jsx']::before {
    content: 'jsx';
    background: rgb(97, 218, 251);
    color: #232129;
  }

  .gatsby-highlight pre[class='language-json']::before {
    content: 'json';
    background: #f5f0f6;
    color: #232129;
  }

  .gatsby-highlight pre[class='language-graphql']::before {
    content: 'graphql';
    background: rgb(225, 0, 152);
    color: #fff;
  }
`;

export default GlobalStyle;
