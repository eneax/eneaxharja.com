---
title: "React Hooks: useReducer"
date: "2023-10-01"
tags: ["react"]
---

The hook `useReducer` is a great tool for managing state in React applications. It is based on the reducer pattern, which is a functional programming pattern that takes a collection as input and returns a single value as output. The way you get to this single value is by invoking a reducer function for each element in the collection.

Let's take a look at a simple example of the reducer pattern in action by using the `Array.reduce` method that is built into JavaScript.

```js
const numbers = [1, 2, 3, 4, 5];
const initialState = 0;

function reducer(state, value) {
  const newState = state + value;

  console.log(
    `Reducer invoked. state: ${state}, value: ${value}, newState: ${newState}`
  );

  return newState;
}

const sum = numbers.reduce(reducer, initialState);

console.log(`total: ${total}`); // total: 15
```

The `reduce` method is a pure function, which means that it does not rely on or modify state outside its scope. In fact, as can be seen from the above example, it is able to keep track of the accumulated state internally.

For each element of the collection `numbers`, the `reduce` method invokes the `reducer` function by passing it two arguments, the accumulated state and the current element in the collection.

Then, whatever the reducer function returns will be passed as the first argument to the next invocation of the reducer, until there are no more elements, at which point it will return the final value.

When building user interfaces, you often have a collection of actions that follow one another over time. For example, a user may click on a button, hover over an element, or type in an input element.

Each of these actions can be considered as an element in a collection of actions that happen over time. Thus, whenever a new action occurs, we can invoke the reducer function to get the new state of the application.

To help create a more predictable interface, React has a built-in hook called `useReducer` that behaves like `useState`, but allows you to manage state using the reducer pattern.

The API for `useReducer` is similar to `Array.reduce`, but instead of just returning the state, `useReducer` also returns a way to update it.

```js
const [state, dispatch] = React.useReducer(reducer, initialState);
```

In fact, it returns a function called `dispatch` which, when called, will invoke the `reducer` function.

Let's take a look at a simple example of `useReducer` in action.

```js
import * as React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

const initialState = 0;

export default function Counter() {
  const [count, dispatch] = React.useReducer(reducer, initialState);

  const handleIncrement = () => dispatch({ type: "increment" });
  const handleDecrement = () => dispatch({ type: "decrement" });
  const handleReset = () => dispatch({ type: "reset" });

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
```

Here, you dispatch the type of action that occurred. Based on that action type, the `reducer` can decide how to update the state.

When invoked, whatever you pass to `dispatch` will be passed as the second argument to the `reducer` function. The first argument (`state`) will be passed implicitly by React and represents the current state of the reducer.

## useReducer vs useState

Like `useState`, `useReducer` allows you to add state to a functional component, which will be preserved across renders and will trigger a re-render when it changes. Unlike `useState`, `useReducer` allows such state to be managed using the reducer pattern.

This means that instead of having a collection of `setX` invocations, which is very common when using `useState`, we can simply dispatch the action type that occurred. Then, the `reducer` will encapsulate all the logic and imperative code.

In addition, `useReducer` offers a bit more flexibility than `useState` in that it allows decoupling the way state is updated from the action that triggered the update, typically leading to more declarative state updates.

> Finally, keep in mind that if several pieces of state update independently of each other (hover, select, etc.), `useState` is the best choice. If the update of one piece of state relies on another piece of state (typically a form component), it is best to use `useReducer`.
