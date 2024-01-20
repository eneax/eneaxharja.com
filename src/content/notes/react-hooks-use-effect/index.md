---
title: "React Hooks: useEffect"
date: "2023-08-15"
---

React is a library for building user interfaces. One can summarize the entire purpose of React with the formula: `ui = function(state)`. The function that computes the UI based on the state should be a pure function. That is, when React renders a component, it needs to be able to get a description of the UI without encountering side effects.

A component has a side effect whenever it does something other than take some input (props and state), and calculate some output (UI). Common side effects include: making an API call to fetch data from a server, interacting with the DOM, or using browser APIs like `localStorage`.

## Rules for managing React effects

To ensure that the entire process of rendering a component is as fast as possible, React establishes rules on how to properly interact with side effects.

### Rule 1

The foundation of React is that a component should be a pure function:

> A component should render without running into side effects

When building complex applications, it is inevitable to have to interact with side effects. To solve this problem, React offers a way to escape the pure function paradigm and correctly interact with side effects.

### Rule 2

A common use case for a side effect is the interaction with browser APIs, and if you want to satisfy the first rule, you need to keep that side effect out of the rendering flow.

> If a side effect is triggered by an event, place it in an event handler

Suppose you want to build an application that displays a greeting to the user. The user can click a button to change the greeting. The application needs to remember the user's preferred greeting and display it when the user returns to the application, even after the browser is closed. To do this, the `localStorage` API can be very useful.

```jsx
import * as React from "react";

export default function App() {
  const [index, setIndex] = React.useState(0);

  const greetings = ["Hello", "Ciao", "Hola", "Bonjour", "Hallo"];

  const handleClick = () => {
    const nextIndex = index === greetings.length - 1 ? 0 : index + 1;
    setIndex(nextIndex);
    localStorage.setItem("index", nextIndex);
  };

  return <button onClick={handleClick}>{greetings[index]}</button>;
}
```

Note that the `localStorage` API is used within the `handleClick` event handler function, considering that it is a side effect and is triggered by the `onClick` event.

### Rule 3

Now that you can add a value in local storage, you need to retrieve it when you set the initial `index` value of the application.

> If a side effect is synchronizing a component with some outside system, place it inside useEffect

In the example illustrated in the second rule, you want to synchronize the component with the `localStorage` API. To do this, you need to use the `useEffect` hook. It allows you to remove the side effect from the React rendering flow and delay its execution until after the component is rendered.

```jsx
import * as React from "react";

export default function App() {
  const [index, setIndex] = React.useState(0);

  const greetings = ["Hello", "Ciao", "Hola", "Bonjour", "Hallo"];

  const handleClick = () => {
    const nextIndex = index === greetings.length - 1 ? 0 : index + 1;
    setIndex(nextIndex);
    localStorage.setItem("index", nextIndex);
  };

  React.useEffect(() => {
    const item = localStorage.getItem("index");

    if (item) {
      setIndex(Number(item));
    }

    console.log("effect render");
  }, []);

  console.log("initial render");

  return <button onClick={handleClick}>{greetings[index]}</button>;
}
```

The React `useEffect` hook accepts two arguments: a function and a dependency array. The function is the side effect you want to execute and is invoked after React renders. The dependency array is a list of values on which the side effect depends. The second argument is optional, but if you omit it, the side effect will be executed by default after every re-render.

Note that props, state, and any variable defined within a component are all considered reactive values that are used in the synchronization process and, therefore, must always be included in the dependency array if they are used in the effect.

The purpose of `useEffect` is to synchronize a component with an outside system. React should resync whenever a dependency needed by the effect changes.

## Advanced use cases

The most common side effect you will encounter when building products for the web is network requests.

### Fetching data from an API

Fetching data from an API represents the perfect use case for `useEffect`. In this case, you want to synchronize the component with the result of the API call.

Let's build a simple application that fetches data from the [PokeAPI](https://pokeapi.co/api/v2/) and displays some data about Pokemon. First, you need to create the function that calls the API:

```js
export async function fetchPokemon(name) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (response.ok) {
      return {
        error: null,
        response: await response.json(),
      };
    }

    throw new Error(`There was an error fetching the Pokemon: ${name}`);
  } catch (error) {
    return {
      error,
      response: null,
    };
  }
}
```

The `fetchPokemon` function accepts a `name` argument and returns an object with two properties: `error` and `response`. The `error` property is `null` if the API call was successful, otherwise it contains the error object. The `response` property is `null` if the API call failed, otherwise it contains the response object.

Now, you can use the React `useEffect` hook to synchronize the state of the component with the result of the call to the `fetchPokemon` API:

```jsx
import * as React from "react";

import { fetchPokemon } from "./api";

export default function App() {
  const [name, setName] = React.useState("pikachu");
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const handleFetchPokemon = async () => {
      setLoading(true);
      setError(null);

      const { error, response } = await fetchPokemon(name);

      if (error) {
        setError(error.message);
      } else {
        setData(response);
      }

      setLoading(false);
    };

    handleFetchPokemon();
  }, [name]);

  return <main>{JSON.stringify({ name, error, loading, data }, null, 2)}</main>;
}
```

The first argument of the `useEffect` hook is a function representing the side effect you want to execute. In this case, the side effect is an asynchronous function that calls the `fetchPokemon` API and updates the state of the component based on the result of the call. The second argument is the dependency array, which contains the `name` variable. This means that the side effect will be executed whenever the `name` variable changes.

### useEffect cleanup function

Sometimes, it may be necessary to set event listeners or timers in a component. In this case, you need to make sure that you clean them up when the component is removed from the DOM. Otherwise, you will have a memory leak.

If you return a function from `useEffect`, React will call it each time before calling the effect and then one last time when the component is removed from the DOM.

Here is an example of an application that uses the `visibilitychange` event of the `document` object to detect when the page is no longer visible.

```jsx
import * as React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState !== "visible") {
        setCount((c) => c + 1);
      }
    };

    console.log("addEventListener");
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      console.log("removeEventListener");
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <p>
      How many times have you tabbed away? <strong>{count}</strong>
    </p>
  );
}
```

Whenever you move away from the page, the `visibilitychange` event is triggered and the `count` state is incremented. To avoid memory leaks, you must remove the event listener when the component is removed from the DOM. To do this, you return a function from `useEffect` that removes the event listener.

Notice how in the dependency array you have to pass an empty array. This is because you only want to add the event listener once. If you were to pass `count` as a dependency, the existing event listener would be removed and a new one would be added each time the `count` state changed, as React would render the component again and re-invoke the effect.

There remains the problem of how to increment the `count` state when the document is no longer visible. To do this, you can use the updater function `setCount`, which receives the previous state as an argument `setCount((c) => c + 1)`. In this way, you can increment the `count` state without having to include it in the dependency array.

Remember that the purpose of `useEffect` is to synchronize a component with an outside system, in this case the `document` object. The `count` state is not part of the outside system, so it does not need to be included in the dependency array, since it is not necessary for React to re-execute the effect when it changes.

Another example for the cleanup function is to set a timer that updates the state of the component every second. Here is an example of an application that uses the `setInterval` function to display the current time:

```jsx
import * as React from "react";

export default function App() {
  const [time, setTime] = React.useState(null);

  React.useEffect(() => {
    const timerId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => window.clearInterval(timerId);
  }, []);

  if (time === null) return null;

  return <p>Current Time: {time.toLocaleTimeString()}</p>;
}
```

The `setInterval` function is used to create a timer that calls the `setTime` function with the current time every second. The `useEffect` hook returns a cleanup function that clears the timer using the `clearInterval` function when the component is removed from the DOM.
