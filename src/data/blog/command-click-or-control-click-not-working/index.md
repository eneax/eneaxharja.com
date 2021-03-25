---
title: Command-click or Control+click not working
date: "2020-01-25"
description: ""
tags: ["javascript"]
---

Being a web developer gives you the ability to override some of the default browser functionalities.
This can be great, since it gives you the power to try any kind of idea that pops into your head.
However, it can cause also some unexpected errors.

A common problem occurs when the user is trying to `Cmd+click` or `Ctrl+click` a link in order to open it in a new tab and nothing happens.

In this case, the click event that gets fired on that link is stopped when our custom click handler calls `event.preventDefault()`.
As a result, the only way for the user to open the link in a new tab is to right-click on the element and then select `Open in New Tab`.

To fix this issue, you can create a `handleCLick` function and place it on top of your click handlers:

```js
const handleClick = e => {
  const hasModifiers = e.metaKey || e.shiftKey || e.altKey || e.ctrlKey

  if (hasModifiers || e.button !== 1) return

  e.preventDefault()
}
```

Since a right click doesn't trigger a normal click event, we handle only the left click.

One last thing to keep in mind is the following list of `MouseEvent.buttons` that are pressed when the mouse event occurred:

- **0**: No button pressed or button is not initialized
- **1**: Primary button pressed (usually the left one)
- **2**: Secondary button pressed (usually the right one)
- **4**: Auxiliary button is being pressed (usually the middle button or the mouse wheel button)
- **8**: Forth button is pressed (typically the "Browser Back" button)
- **1**6: Fifth button is pressed (typically the "Browser Forward" button)

And if the user pressed simultaneously more than one button, the above values are summed up (e.g., 3 is primary + secondary).
