---
title: Update Node and npm
date: "2021-03-17"
description: ""
tags: ["dev"]
---

```bash
brew update
brew doctor
brew upgrade node
npm install -g npm
```

Fix `brew` link node permission error

```bash
sudo chown -R $(whoami) /usr/local/*
```
