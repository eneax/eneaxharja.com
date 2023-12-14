---
title: "React Hooks: useRef"
date: "2023-08-31"
---

React is a library for building user interfaces, where each component can manage its own state. One can summarize the entire purpose of React with the formula: `ui = function(state)`.

When managing state, one faces the challenge of persisting values between different renders. To solve this problem, React provides the `useState` built-in hook.

However, if you are simply looking for a way to preserve a value across renders and this value has nothing to do with the UI, you can use the `useRef` hook.

> useRef is used to create a value that is preserved between renders, but will not trigger a re-render and update the UI when it changes.

When you call `useRef`, you get an object (`ref`) with a `current` property whose value is initialized with the argument passed to `useRef` when you invoke it.

```jsx
const ref = useRef(initialValue);
```

The `ref` object is mutable, so you can change the value of `current` at any time. Changing the value of `current` does not result in a new render.

```jsx
ref.current = newValue;
```

Let's look at an example of how to use `useRef` to preserve a value across renders.

```jsx
import * as React from "react";

export default function App() {
  const [seconds, setSeconds] = React.useState(0);
  const [running, setRunning] = React.useState(false);
  const ref = React.useRef(null);

  const handleClick = () => {
    if (running === false) {
      ref.current = window.setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
      setRunning(true);
    } else {
      window.clearInterval(ref.current);
      setRunning(false);
    }
  };

  return (
    <main>
      <h1>{seconds}</h1>
      <button onClick={handleClick}>
        {running === true ? "Stop" : "Start"}
      </button>
    </main>
  );
}
```

The counter starts when the user clicks the "Start" button and stops when the user clicks the "Stop" button.

The component uses the `useState` hook to manage two state variables: `seconds` and `running`. The `seconds` state variable is initialized to `0` and is used to store the current value of the counter. The `running` state variable is used to keep track of whether the counter is running or not.

The `useRef` hook is used to create a mutable `ref` object that is initialized to `null`. This `ref` object is used to store the interval ID returned by `window.setInterval` when the counter is started.

The `handleClick` function is invoked when the user clicks the "Start" or "Stop" button. If the counter is not running, the `ref.current` property is set to the return value of `window.setInterval`, which is a number that identifies the interval.

Then, the `setRunning` function is invoked with `true` as an argument, which causes the `running` state variable to be updated to `true`. This causes the component to re-render. The `seconds` state variable is incremented by `1` every second, which causes the component to re-render again. This process continues until the user clicks the "Stop" button.

When the user clicks the "Stop" button, the `handleClick` function is invoked. If the counter is running, the `window.clearInterval` function is invoked with the `ref.current` property as an argument. This causes the interval to be cleared. Then, the `setRunning` function is invoked with `false` as an argument, which causes the `running` state variable to be updated to `false`.

> Note that `useState` is used only if it is necessary to update the UI. Otherwise, `useRef` is used to preserve the value across renders, without triggering a re-render.

Finally, the other use case for `useRef` is to get a reference to a DOM node. This is done by passing a `ref` as a prop to a React element. React will put a reference to the DOM node it creates in the `current` property of that `ref`.

```jsx
import * as React from "react";

export default function App() {
  const inputEl = React.useRef(null);

  const handleClick = () => inputEl.current.focus();

  return (
    <main>
      <input ref={inputEl} type="text" />
      <button onClick={handleClick}>Focus the input</button>
    </main>
  );
}
```

In this example, the `inputEl` ref is passed to the `ref` prop of the `input` element. When the button is clicked, the `handleClick` function is invoked, which calls the `focus` method on the `current` property of the `inputEl` `ref`. This causes the input to be focused.
