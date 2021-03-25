---
title: Scroll to Hash in Gatsby
date: "2020-08-01"
description: ""
tags: ["gatsby"]
---

The `useScrollToHash` hook uses the `location` prop from a Gatsby page to scroll to a specific element on the page. Then, it adds a hash to the URL.

```js
import { useEffect } from "react"

const useScrollToHash = hash => {
  useEffect(() => {
    if (!hash) return

    window.requestAnimationFrame(() => {
      const anchor = document.querySelector(hash)
      const offset = anchor.getBoundingClientRect().top + window.scrollY
      window.scroll({ top: offset, left: 0 })
    })
  }, [])
}

export default useScrollToHash
```
