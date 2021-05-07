---
title: 'Understanding the lifecycle of Gatsby'
date: '2021-05-07'
description: ''
tags: ['gatsby']
---

Gatsby is a static site generator built with React at its core that allows you to build modern websites and applications that come with speed and great performance out of the box.

When you start a new Gatsby project, you will notice the usual React code, such as functional components and `JSX` syntax, but also some new files that are specific to Gatsby, such as `gatsby-config.js`, `gatsby-node.js`, `gatsby-browser.js`, and `gatsby-ssr`.

If we want to understand the full potential of these files, we need to know how Gatsby works under the hood, and to do that, we need to know the lifecycle of Gatsby.

## The lifecycle

To start a Gatsby project locally, we run the command `gatsby develop` in our terminal. From that moment, the **Bootstrap** sequence will start and you will see in your terminal several steps that we will now discuss in more detail.

#### Validate gatsby-config and load plugins

The first action of the Bootstrap sequence is to read and validate the `gatsby-config.js` file in order to load plugins, but without running them yet.

This configuration file is where we define all the metadata for the project and the plugins we use to generate any kind of data, such as `YAML`, `JSON`, and `CMS` content.

Once the plugins are loaded, it's time to load the themes. A Gatsby theme is a modular configuration of Gatsby that allows us to package site functionality as a standalone product that is easier to reuse. Themes are a great way to build websites by composing together features like a blog, e-commerce and i18n.

#### "onPreInit"

This is the first node API called when Gatsby starts running and is executed immediately after the plugins are loaded. Some plugins may use this API to log any specific message to the console as soon as Gatsby starts running.

#### "delete html and css files from previous builds"

The loading phase is followed by cleaning up the `public` folder, where Gatsby simply deletes HTML and CSS files from previous builds.

#### "initialize cache" and "copy gatsby files"

Now that the deleted pages and styles from previous builds have been removed, Gatsby initializes its cache, which will be stored in the `/.cache` folder.

If your plugins implement `gatsby-browser.js` and `gatsby-ssr.js`, Gatsby will write them to the `.cache` folder. The `gatsby-ssr.js` file can be useful if you want to inject code into the output that Gatsby generates for you and, to do so, you can use the [onRenderBody](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/#onRenderBody) hook. Gatsby allows you to use `gatsby-browser.js` to handle scrolling, service worker, and route updates. Some common hooks are: [onClientEntry](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#onClientEntry) and [onRouteUpdate](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#onRouteUpdate).

Then, Gatsby will copy all cached site files to the `.cache` folder and look for the following changes:

- if any dependencies have been updated in the `package.json`
- if the versions of installed plugins have changed
- if any change happened in `gatsby-config.js` or `gatsby-node.js`

Whenever Gatsby detects a change in the above cases, the cache is cleared and must be re-initiated.

#### "onPreBootstrap"

The `onPreBootstrap` API is called once Gatsby is ready to bootstrap the site and if it is implemented in some plugin. Here, for example, Gatsby makes sure that a `data` directory exists in our project folder.

#### "createSchemaCustomization"

This API can be used to customize Gatsby’s GraphQL schema by creating type definitions or adding third-party schemas.

If you are using a CMS, such as [GraphCMS](https://graphcms.com), as the backend for a website, this is where Gatsby starts looking for the schemas we have created, such as `Post`, as a template for building blog posts, and `Category` for adding categories or tags to each post.

#### "source and transform nodes"

This API tells plugins to source and create nodes and is called once for each plugin we are using in our project.
In this phase of Bootstrap sequence we can get errors in case a plugin does not create any node. In this case, something may have gone wrong in your query and GraphQL can't fetch the data.

#### "building schema" and "createPages"

Once your GraphQL schema has been imported, Gatsby starts building it, just before creating all the pages. The `createPages` API is then called when you want to create pages programmatically in the `gatsby-node.js`.

The `gatsby-node.js` file is very important, since everything about the Bootstrap and Build sequences happens in it. For example, if you are going to build a blog, you will need to use this file to programmatically build pages after fetching data from a source plugin.

Another reason to use `gatsby-node.js` is to modify the Gatsby’s Webpack or Babel configs, if you have some specific feature requirements to build. In that case you can use the [onCreateBabelConfig](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onCreateBabelConfig) and [onCreateWebpackConfig](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onCreateWebpackConfig) hooks.

#### "createPagesStatefully"

This API is very similar to the `createPages` step, but is aimed at specific plugins that want to have full control over the process of adding and removing pages.

#### "update schema"

This is where Gatsby rebuilds the entire GraphQL schema again, only this time it also includes the `SitePage` context. This is an internal Gatsby utility that allows us to inspect all of the pages that Gatsby has created for our site.

#### "write out redirect data"

This is another internal Gatsby utility that adds browser redirects to `.cache/redirects.json`.

#### "Build manifest and related icons"

This step is not part of Gatsby's built-in functionality. However, it can be enabled by the `gatsby-plugin-manifest` plugin to add a `manifest.json` file with the specified configurations and icons.

This file gives the browser more information about your Progressive Web App and how it should behave once installed on the user's device. It normally includes the name of your PWA and the icon that the browser should use.

#### "onPostBootstrap"

This hook signals the end of the Bootstrap process after all other APIs described above have been called.

#### "onPreExtractQueries" and "extract queries from components"

In this step, all JavaScript files in our project are loaded and Gatsby checks if there are any GraphQL queries, such as `StaticQuery`, exported from them.
If there are, they will be queued for execution in a later step, while any problematic queries will be reported on the console with warnings or errors.

#### "write out requires" and "run page queries"

Here, a Gatsby utility adds the code that the files need to load and executes the page queries that were queued earlier during the query extraction step, providing them with the necessary data.

#### "Building development bundle"

Finally, Gatsby processes and optimizes the images by generating image thumbnails (if you use the `gatsby-plugin-sharp` plugin) right before building the development bundle that we can preview in the browser by visiting `http://localhost:8000`.

The steps described above are common in most Gatsby sites, but may vary depending on the plugins you have installed in your project.

Up to this point, we have described what happens when you run `gatsby develop`. This process is also called `runtime` and allows Gatsby to run a server in the background allowing us to have features like _live reloading_.

Another mode of running a Gatsby website is `build time` and is started with the `gatsby build` command.

The `build time` mode uses Server Side Rendering (`SSR`) to render all React pages in an HTML file. Also, since all pages are generated during `build time`, you won't have browser APIs like `window` or a traditional server taking requests and building pages dynamically, before sending them to the client.

## Conclusion

Gatsby's lifecycle has many moving parts, but at its core it is similar to React's lifecycle. In fact, during the processes described above, Gatsby will expose some hooks that developers can use to customize their projects. That's why we have files like `gatsby-config.js`, `gatsby-node.js`, `gatsby-browser.js` and `gatsby-ssr.js` available.

While you can clone the [Gatsby default starter](https://github.com/gatsbyjs/gatsby-starter-default) and start a project without any Babel and Webpack configuration, Gatsby's lifecycle gives developers the flexibility to build any type of website or web app.

To learn more about Gatsby, check out the full documentation available on the [official website](https://www.gatsbyjs.com).
