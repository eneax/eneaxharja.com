---
title: "React hooks for handling advanced effects"
date: "2023-11-15"
---

React is a library for building user interfaces. One can summarize the entire purpose of React with the formula: `ui = function(state)`.

When React renders a component, it needs to be able to get a description of the UI without encountering side effects. A component has a side effect whenever it does something other than take some input (props and state), and calculate some output (UI).

You can handle most side effects in React by following these rules:

1. create components as pure functions, so that when a component is rendered, it does not run into any side effects;
2. if a side effect is triggered by an event, place it in an event handler;
3. if a side effect synchronizes the component with an external system, put it inside `useEffect`.

When building complex applications, scenarios may arise where you need to create advanced interfaces that require handling advanced side effects. Let's see how to handle these cases with two React hooks: `useLayoutEffect` and `useSyncExternalStore`.

## useLayoutEffect

The default rendering behavior in React is to show the UI to the user as quickly as possible. Then, run side effects asynchronously after render thanks to the `useEffect` hook. This lets your component defer side effects until after the browser has painted the screen.

However, there are some cases where you might want to run side effects synchronously before React paints anything to the screen.

> If a side effect synchronizes the component with an external system and that side effect needs to run before the browser paints the screen, put that side effect inside `useLayoutEffect`

Let's say you want to display some information to the user that depends on the dimensions of the browser window.

Since the UI relies on the dimensions of the browser window, you need to show an interface to the user only after you have calculated the dimensions of the browser window.

The React `useLayoutEffect` hook was designed to solve this specific problem:

```js
import * as React from "react";

export default function App() {
  const [size, setSize] = React.useState({ width: null, height: null });

  React.useLayoutEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section>
      <h1>Your Browser Window</h1>
      <p>width: {size.width}</p>
      <p>height: {size.height}</p>
    </section>
  );
}
```

As you can see from the example above, the `useLayoutEffect` hook is very similar to the `useEffect` hook.

> While `useEffect` runs asynchronously after render, `useLayoutEffect` runs synchronously after render, but before React shows the UI to the user.

## useSyncExternalStore

In a scenario where you need to subscribe a component to a data store (state) managed by an external system, you can use the `useSyncExternalStore` hook instead of creating a redundant copy of that state as a React state.

This hook represents a more efficient way of synchronizing a component with an external system without needing to rely on the `useEffect` and `useState` hooks.

> If a side effect subscribes to an external store, use the useSyncExternalStore hook

This hook takes two arguments:

1. a `subscribe` function that listens to browser events (external state) and passes a callback function as the event handler to the event listener;
2. a `getSnapshot` function that reads the external state and returns its current value.

```js
const subscribe = (callback) => {};

const getSnapshot = () => {};

React.useSyncExternalStore(subscribe, getSnapshot);
```

For example, suppose you want to know whether users have cookies enabled in their browser. You can use the `useSyncExternalStore` hook to subscribe your component to the `navigator.cookieEnabled` property.

```js
import * as React from "react";

const subscribe = (callback) => {
  window.addEventListener("enabled", callback);
  window.addEventListener("not enabled", callback);

  return () => {
    window.removeEventListener("enabled", callback);
    window.removeEventListener("not enabled", callback);
  };
};

const getSnapshot = () => {
  return navigator.cookieEnabled ? "enabled" : "not enabled";
};

export default function App() {
  const cookieStatus = React.useSyncExternalStore(subscribe, getSnapshot);

  return (
    <div>
      <p>Cookies are {cookieStatus}!</p>
    </div>
  );
}
```

If the `subscribe` function or the value returned by `getSnapshot` changes between renders, then `useSyncExternalStore` will re-subscribe to the external store. Once the state has changed, React will trigger a re-render of the component.

As you can see from the example above, both the `subscribe` and `getSnapshot` functions are located outside the `App` component. This approach helps decouple the subscription logic from the component itself, making it more reusable.

However, if you need to keep these functions within the component to gain access to props and state, you can use the `useCallback` hook to make sure the function are referentially equal.
