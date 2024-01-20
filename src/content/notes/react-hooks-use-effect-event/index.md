---
title: "React Hooks: useEffectEvent"
date: "2023-12-14"
---

> Note: the `useEffectEvent` hook is currently in alpha.

The purpose of `useEffect` is to synchronize a component with an external system. It removes the side effect from React's default rendering flow and executes it after the component has been rendered.

In fact, `useEffect` runs the effect once after the initial render of the component and then after each render if a value in its dependency array has changed since the previous render.

```jsx
React.useEffect(() => {
  analytics.track(id);
}, [id]);
```

You might encounter a situation where you want to access a reactive but non-synchronizing value within `useEffect`. For example, you need to pass some `state` information for your analytics.

```jsx
React.useEffect(() => {
  analytics.track(id, state);
}, [id, state]);
```

However, since `state` is a reactive value (it changes between renders), it is necessary to include it in the dependency array.

This approach is not ideal because every time the `state` changes, the effect will be re-executed and the analytics will not be accurate.

Basically, you need a way to tell React that you want to use a reactive value within `useEffect`, but that it has nothing to do with synchronizing the component and therefore should not be included in the dependency array.

This is where the `useEffectEvent` hook comes in:

```js
const onVisit = React.useEffectEvent((id) => {
  analytics.track(id, state);
});
```

This hook returns a function that abstracts the reactive but non-synchronizing value into its own event handler, which you can reuse within `useEffect` without having to include it in the dependency array.

```jsx
React.useEffect(() => {
  onVisit(id);
}, [id]);
```

To recap, think of `useEffectEvent` as a way to abstract reactive but non-synchronizing values from `useEffect`, similar to how an event handler abstracts a side effect from React's default rendering flow.
