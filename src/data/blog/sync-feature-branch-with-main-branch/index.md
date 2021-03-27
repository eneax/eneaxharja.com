---
title: 'Sync feature branch with main branch'
date: '2020-04-15'
description: 'Keep your feature branch in sync with your main branch.'
tags: ['git', 'snippets']
---

If you are in the `feature-branch`, go the the `main` branch first:

```bash
git checkout main
git pull
git checkout feature-branch
git pull --all
git merge main
```
