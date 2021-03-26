---
title: Copy to Clipboard
date: "2020-09-01"
description: ""
tags: ["javascript"]
---

```js
const copyToClipboard = str => {
  const { clipboard } = window.navigator

  // if clipboard API not supported
  if (!clipboard || typeof clipboard.writeText !== `function`) {
    const textarea = document.createElement(`textarea`)
    textarea.value = str
    textarea.setAttribute(`readonly`, true)
    textarea.setAttribute(`contenteditable`, true)
    textarea.style.position = `absolute`
    textarea.style.left = `-9999px`
    document.body.appendChild(textarea)
    textarea.select()
    const range = document.createRange()
    const sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
    textarea.setSelectionRange(0, textarea.value.length)
    document.execCommand(`copy`)
    document.body.removeChild(textarea)

    return Promise.resolve(true)
  }

  return clipboard.writeText(str)
}
```