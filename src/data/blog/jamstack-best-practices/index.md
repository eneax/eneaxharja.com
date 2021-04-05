---
title: 'Jamstack Best Practices'
date: '2019-09-08T22:12:03.284Z'
description: 'The Jamstack aims at separating the client code from the server one. If you want to leverage the best out of the stack, here are some tips.'
tags: ['jamstack']
---

For years, developers have spent huge amount of time and resources in order to launch a website or a web app and deploy complex server environments.

Before illustrating the some best practices that characterize Jamstack projects, it's important to identify non-Jamstack projects.
In general, if a project relies on a client-server relationship, it it not built with the Jamstack. This includes:

- sites build with a server-side content management system (WordPress, Drupal, etc.);
- a server-side monolith that relies on backend languages like PHP, Ruby or Node;
- an Isomorphic JavaScript project, where pages are rendered on both the server and client side.

The Jamstack aims at separating the client code from the server one. If you want to leverage the best out of the stack, here are some tips.

## Entire Project on a CDN

Since a Jamstack project doesn't rely on server-side code, there is no need for it to live on a single server, when it can be easily distributed and accessed directly from a Content Delivery Network (CDN).

A CDN refers to a geographically distributed group of servers which work together to provide quick transfer of assets needed for loading Internet content like HTML pages, stylesheets and JavaScript files, images, and videos.

Serving a website or web app from a CDN allows us to have unprecedented speed and unbeatable performance. Moreover, it helps protecting websites against malicious attacks, such as Distributed Denial of Service (DDOS) attacks.

## Everything Lives in Version Control

The entire codebase lives in a version control system, such as Git. It helps us to keep track of every modification to the code and if a mistake is made, we have the power to turn back the clock and debug the current version of our code while comparing it with earlier versions.

Since the project is accessible directly from git, everyone can clone it, install the necessary dependencies and run it offline.
There is no database to clone, no complex installs, just:

```shell
git clone https://github.com/account-name/repo-name.git
npm install
```

and finally my favorite

```shell
gatsby develop
```

## Modern Build Tools

The Jamstack gives at your disposal modern build tools like Webpack and Babel, so you can experiment today with modern JavaScript features, without having to wait for browsers to update.

## Automated Builds

Since Jamstack markup is prebuilt, you need to run a build command for the changes to go live.
This process can be automated using webhooks or relying on a publishing platform that includes this feature by default.
Once the server has built the project, the CDNs will be updated and the site will be live.

## Atomic Deploys

Atomic Deploys means that the live website will be updated only if the deploy has finished successfully.
It means that a deployment has either completed or not executed at all and no changes go live until all changed files have been uploaded.
In this way, the app is always available to the user and maintenance window is eliminated.

Atomic deployments is extremely useful when:

- you need to deploy lots of files
- the service offered by your company doesn’t allow any downtime
- your website or app requires additional services and dependencies that necessitate migration

## Instant Cache Invalidation

A Jamstack project can simply be distributed in Local Caches everywhere.
This is one of the reasons why it is blazing fast and on average the Time to First Byte (the time it takes to start loading) is way less than that of a fully optimized dynamic site.

However, this incredible speed takes us to the cache invalidation issue.
When you make a change to your site, you are telling the CDN to invalidate its cache or to replace the old files with the new ones and the new build is live in an instant.

Basically, when a deploy goes live, it really goes live!

## Typical Jamstack workflow

Here is an ideal Jamstack workflow following all the best practices described above.

![jamstack-best-practices](./jamstack-best-practices.png)

## Conclusion

Get inspired by some great examples of projects built with [Jamstack](https://jamstack.org/examples) and keep building stuff!

## References

Make sure to check out also these links: [jamstack.org](https://jamstack.org), [jamstack.wtf](https://jamstack.wtf), [static site generators](https://www.staticgen.com), [headless cms](https://headlesscms.org), [Gatsby.js](https://www.gatsbyjs.org) and [Netlify](https://www.netlify.com).
