---
title: 'Code Structure'
date: '2020-02-21'
description: ''
tags: ['javascript']
---

When writing blocks of code, we need to consider how to best leverage the features of a programming language to create clean and structured code.
It means being able to create clear and readable code and organize files and folders in a logical and intuitive way.

But first of all let's have a look on what actually blocks of code are made of.

## Statements

One of the first concepts that we learn in JavaScript is statements.
In a programming language, we call 'statements' the list of 'instruction' that we give to a computer to 'execute'.

A statement example is the `alert()` method, which shows the message "Hello, world!".

```js
alert('Hello, world!');
```

In our code, we can have as many statements as we want, but it's important to write them on separate lines,
in order to make the code more readable:

```js
alert('Hello, world!');
alert('🖐️ 🌐');
```

As you can see from the example above, statements are usually separated with semicolon.

## Semicolons

Semicolons in JavaScript is a topic where developers get very opinionated on what's the right approach to adopt.
This happens because semicolons can be omitted at the end of a statement.
However, if you want to write JS code without semicolons, you need to use line breaks.

The code below, for instance, works perfectly fine:

```js
alert('Hi');
alert('there');
```

In this example, the line break is considered as an 'implicit' semicolon, which will be inserted automatically.

There are also cases where a new line does not mean a semicolon:

<!-- prettier-ignore -->
```js
alert(1 
+ 1
+
1);
```

This code will run without issues and it will output 3, since JavaScript sees that the line ends with a plus `+` operator, so it interprets the expression as incomplete and does not insert any semicolon here.

Although in this case, JavaScript made the right call, there might be other cases where we might not get the desired result.
For this reason, if you are a beginner in JavaScript, use the semicolons while you get more familiar with the language.

## Comments

Comments represent code that the JavaScript engine ignores completely.
You can write comments in any place of your code block, since they do not affect the execution of the script.

They represent a great way to describe what the code does to give more insights on the complex areas of your codebase.
You can leave comments also to remind yourself or other developers to refactor some particular functions in the near future, or simply to temporarily disable a part of code.

Let's have a look now at how you can leave comments into your JavaScript file.

### One-line comment

It starts with two forward slash characters `//` and anything else that comes after it is a comment.
The location of this type of comment depends on your preference of codebase style.
It can occupy an entire line of its own, or follow a statement.

Here are few examples on this type of comment:

```js
// This comment occupies an entire line
alert('Example where comment occupies an entire line!');
```

or

```js
// This comment follows the statement
alert('Example where the comment follows the statement');
```

### Multiline comments

This type of comment starts with a forward slash and an asterisk `/*` and ends with an asterisk and a forward slash `*/`.
Anything that you include inside the two asterisks will be ignored when the code will run.

```js
/*
This is a multiline comment.
It spans on two different lines.
*/

alert('Hi');
alert('There');
```

Keep in mind that you cannot have multiline comment inside another multiline comment.

```js
/*
  /* This is a nested comment! */
*/
alert('No nested comments!');
```

The above code, for instance, will return an error `Uncaught SyntaxError: Unexpected token '*'`.

## Eslint and Prettier

Going over your code base and fixing missing commas, semicolons or broke comments can be time consuming.
Nowadays, this process can be automated with tools like Eslint and Prettier.

Even if it can be frustrating in the beginning to, not only setup, but also to fix all the highlighted warnings that you might get,
in the long time it will be worth it.

It will help you prevent bugs that might originate by typos, comments not properly closed and many more common errors that tend to happen when coding. So just start with one configuration and modify it to fit your personal coding style.

If you need some inspiration, have a look at my [dotfiles](https://github.com/eneax/dotfiles) and check my [eslint-config-eneax](https://github.com/eneax/eslint-config-eneax) package.
