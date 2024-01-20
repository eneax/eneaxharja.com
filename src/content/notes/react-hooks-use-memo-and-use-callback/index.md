---
title: "React Hooks: useMemo and useCallback"
date: "2023-10-15"
---

Whenever the state of your application changes, React re-renders the component that owns that piece of state and all of its child components, regardless of whether they accept props or not.

If you have a component that performs an expensive computation, you might want it to re-render only when its props change, not every time the application state changes.

> This is where `React.memo` comes in, allowing you to opt out of React's default rendering behavior.

`React.memo` is a higher-order component that can be used to wrap a component and memoize (cache) its result. If the component is called with the same props, React will reuse the cached result instead of rendering the component again.

```js
const MemoizedExpensiveComponent = React.memo(ExpensiveComponent);
```

React determines whether props have changed, using the `Object.is` method to compare them. `React.memo` is already helpful in many cases, but it has some limitations.

In fact, it is not always sufficient to wrap a component with `React.memo` to prevent unnecessary re-renders. One must also make sure that the props passed to the component are referentially consistent across renders.

> While primitive values are compared based on their actual value, reference values are compared based on their location in memory.

If you use `React.memo` with a component that accepts a reference value (such as an object) as a prop, you will run into problems.

Even though the properties of an object never change, you are technically creating and passing a new object on every render, making `React.memo` useless.

To solve this problem, it is necessary to memoize (cache) the object you pass as a prop. This way the value will be referentially consistent across renders. React has a built-in hook that does exactly this, called `useMemo`.

## useMemo

The React `useMemo` hook allows the result of a calculation to be cached between renders.

```js
const cachedValue = React.useMemo(calculateValueFunction, dependencyArray);
```

The hook accepts two arguments. The first is a function that returns the value you want to cache. The second is an array of dependencies on which the function depends. If one of the dependencies changes, the cached value will be recalculated.

Let's see an example with a function that performs an expensive calculation.

```js
import * as React from "react";

function expensiveFunction() {
  console.log("Expensive function called");

  return 1000;
}

export default function App() {
  const [value, setValue] = React.useState(0);
  const expensiveValue = React.useMemo(expensiveFunction, []);

  return (
    <main>
      <h1>Value: {value}</h1>
      <h2>Expensive Value: {expensiveValue}</h2>
      <button onClick={() => setValue(value + 1)}>Increment value</button>
    </main>
  );
}
```

In this example, you have a function called `expensiveFunction` that performs an expensive calculation. You then use `useMemo` to cache the result of calling that function.

If you inspect the console and click the button to increment the value, you will see that the `expensiveFunction` is called only once. This is because the result of calling `expensiveFunction` is cached between renders.

## useCallback

The React hook `useCallback` is an abstraction of `useMemo`:

```js
const cachedFunction = React.useCallback(functionToCache, dependencyArray);
```

It works exactly like `useMemo`, but instead of caching the result of a function call, it caches the function itself.

It is particularly helpful when you are creating a custom hook that returns a function that is keept referentially stable across renders.
