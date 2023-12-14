---
title: "React Hooks: useState"
date: "2023-07-27"
---

React is a library for building complex user interfaces from individual components, where each component can manage its own state.

When managing state, you face the challenge of persisting values between different function invocations (or renders in React). In JavaScript, each function invocation is an isolated environment with its own scope and context. This means that any variable declared inside a function is destroyed as soon as the function has finished executing.

To solve this problem, React provides a built-in hook called `useState` that can be accessed via `React.useState`.

> Think of hooks as special functions that allow you to get help directly from React.

Hooks have the following rules:

- they must begin with the word `use`;
- they must be called at the top level of the component, similar to how you import modules at the top of your file;
- they cannot be called in loops, conditions, or nested functions.

With the help of `useState` it is possible to preserve a value across component renders. This hook receives a single argument, the initial value of that piece of state, and returns an array with the first item being the state value itself, and the second item being a way to update that state (the updater function).

```js
const stateArray = React.useState("initial state value");
const state = stateArray[0];
const setState = stateArray[1];

console.log(state); // "initial state value"
setState("new state value");
console.log(state); // "new state value"
```

Since `useState` returns an array, one can use array destructuring by assigning the first item to `state` and the second item to `setState`:

```jsx
const [state, setState] = React.useState("initial state value");

console.log(state); // "initial state value"
setState("new state value");
console.log(state); // "new state value"
```

Now, let's build a simple `Counter` application that keeps track of how many times a user has clicked on a button.

```jsx
import * as React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => setCount(count + 1);

  return <button onClick={handleClick}>{count}</button>;
}
```

This approach allows preserving the `count` value between different invocations of the `Counter` function (or different renders of the `Counter` component). Each time the user clicks the button, React increments the `count` value by `1`, renders the `Counter` component again by getting a description of the UI based on the current `count` state, then updates the DOM where appropriate.

## Lifting State Up

So far you have seen how to update the state with primitive values, such as strings and numbers. However, when building real-world applications, you will often need to update the state with more complex data, such as objects and arrays.

In addition, you often have to deal with situations where the state is shared among multiple components or the state you want to update is in a different location from the event handlers updating that piece of the state.

Whenever you find yourself in the situation of having a state on which multiple components depend, you need to move that state to the nearest parent component and then pass it down via `props` to the components that need it.

This process is called "lifting state up" and is a common pattern in React. However, it has the disadvantage of leading to the separation of the state from the event handlers that update it (decoupling process).

The solution is to create an updater function where the state is located (parent component), and then pass that function via `props` to the child component so that it can invoke it. Then, you can pass data back to the parent component by passing an argument to the updater function.

> Whenever you want to update the state, you have to do so where it lives.

## Updating Object State

Now that you know how to update the state with primitive values and are more familiar with the lifting state process, let's look at how to update the state with objects.

```js
const [user, setUser] = React.useState({
  name: "Mario",
  handle: "@mario",
  email: "mario@player-one.com",
});
```

The `user` state is an object with three properties: `name`, `handle`, and `email`. To update the state, you need to pass to `setUser` a new object that merges the existing object with the new one:

```js
const handleUpdateName = (event) => {
  const updatedUser = {
    ...user, // spread the existing user object
    name: event.target.value, // update the name property with the new value
  };

  setUser(updatedUser);
};
```

## Updating Array State

The process of updating array state is similar to updating an object state, but instead of using the spread operator (`...`) to spread the existing object, it is used to spread the existing array.

Updating array state is a common task and it consists of three use cases:

1. adding elements,
2. removing elements,
3. updating elements.

In all these cases, you need to use a built-in JavaScript array method to create a new array with the updated values. You should never modify (or mutate) the original array.

### Adding Elements to an Array

To add an element to an array, use the JavaScript spread operator (`...`) to spread all the existing elements in a new array with the new element.

```js
const handleAddTodo = (todo) => {
  const newTodos = [
    ...todos, // spread all the existing todos
    todo, // add the new todo
  ];

  setTodos(newTodos);
};
```

### Removing Elements from an Array

To remove an element from an array, use the JavaScript `filter` method to create a new array, filtering out the element to be removed.

```js
const handleRemoveTodo = (id) => {
  const newTodos = todos.filter((todo) => todo.id !== id);
  setTodos(newTodos);
};
```

### Updating Elements in an Array

To update an array element, use the JavaScript `map` method to create a new array, updating the specific element as necessary.

```js
const handleUpdateTodo = (updatedTodo) => {
  const newTodos = todos.map((todo) => {
    return todo.id === updatedTodo.id ? updatedTodo : todo;
  });
  setTodos(newTodos);
};
```

## Advanced use case with `useState`

You might encounter a rare situation when your initial state is the result of a calculation:

```js
const [state, setState] = React.useState(getInitialState);
```

In this case, you can pass a function to `useState`, which is only called during the initial render to get the initial state. React ignores `getInitialState` during successive renders.
