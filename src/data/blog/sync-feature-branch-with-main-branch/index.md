---
title: Keep your feature branch in sync with your main branch
date: "2021-03-17"
description: ""
tags: ["dev"]
---

If you are in the `feature-branch`, go the the `main` branch first:

```bash
git checkout main
git pull
git checkout feature-branch
git pull --all
git merge main
```