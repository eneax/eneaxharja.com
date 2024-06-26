---
title: "JavaScript Strings"
date: "2020-06-21"
tags: ["javascript"]
---

A string is a series of zero or more characters grouped together inside single or double quotes.

<!-- prettier-ignore -->
```js 
var myFirstName = 'Enea';
var myLastName = "Xharja";
```

In order to define a `string`, we must do it by starting and ending with either single or double quotes.
Problems, however, might arise, if we have to include a literal quote `"` or `'` inside the `string`:

<!-- prettier-ignore -->
```js 
var myStringVariable = "I am a "double quoted" string inside "double quotes"."; 
```

The code above will generate an error on the console: `Uncaught SyntaxError: Unexpected identifier`, since JavaScript doesn't know where the string variable ends.

To fix this problem, we can escape the quote from being considered as the end of the string quote by using the backslash `\` in front of the quote:

<!-- prettier-ignore -->
```js 
var myStringVariable = "I am a \"double quoted\" string inside \"double quotes\"."; 
```

JavaScript supports both single and double quotes, as long as we start and end the string variable with the same type of quotes. Moreover, we can fix the issue of using a literal quote inside a string variable, thanks to the backslash `\` character.

It's important to not abuse backslash `\` character; since it can make our code more difficult to read.
For this reason, we can always use single quotes for our string variables and use double quote only when needed inside the variable, like in the code below:

```js
var myStringVariable =
  '<a href="http://www.example.com" target="_blank">Example Link</a>';
```

### Escape Sequences in Strings

Other than quotes, in JavaScript, we can escape many other characters inside a string.
The main reason to do this is to use multiple quotes in a string without JavaScript misinterpreting our code.

```markdown
| Code | Output          |
| ---- | --------------- |
| \'   | single quote    |
| \"   | double quote    |
| \\   | backslash       |
| \n   | newline         |
| \r   | carriage return |
| \t   | tab             |
| \b   | word boundary   |
| \f   | form feed       |
```

Example:

```js
var myStringVariable = "FirstLine\n\t\\SecondLine\nThirdLine";

/*
"FirstLine
	\SecondLine
ThirdLine"
*/
```

### Concatenating Strings with Plus Operator

In JavaScript, however, we can use the `+` operator also inside a `String` value, and in that case it's called `concatenation operator`.

This operator is very helpful to concatenate together multiple strings in order to build a new one.

```js
var myStr = "This is the start. " + "This is the end.";
// "This is the start. This is the end."
```

### Concatenating Strings with the Plus Equals Operator

We can concatenate strings together also by using the `+=` operator.
This practice can be very helpful if we have to break a long string over several lines or to perform string manipulations using JavaScript.

```js
var myStringVariable = "This is the first sentence. ";
myStringVariable += "This is the second sentence.";
```

### Constructing Strings with Variables

The `+` operator can be used not only to concatenate `Strings`, but also to build a new string by inserting one or more variables into it.

```js
var myName = "Enea";
var myAge = 28;

var myCustomString =
  "Hi, my name is " + myName + " and I am " + myAge + " years old!";
// "Hi, my name is Enea and I am 28 years old!"
```

### Appending Variables to Strings

We can append variables to a string using the plus equals `+=` operator.

```js
var favoriteFood = "pizza";
var myString = "My favorite food is: ";

myString += favoriteFood;
// "My favorite food is: pizza"
```

### Find the Length of a String

If we want to calculate the length of a `String`, we can write `.length` at the end of the string variable or string literal.

```js
"Enea Xharja".length; // 11

var lastNameLength;
var lastName = "Xharja";
lastNameLength = lastName.length; // 6
```

### Use Bracket Notation to Find the First Character in a String

In JavaScript, we use `bracket notation` to get a character at a specific index within a string. Moreover, instead of starting to count at 1, we start at 0. This is referred to as `Zero-based indexing`.

```js
var firstLetterOfLastName = "";
var lastName = "Xharja";

firstLetterOfLastName = lastName[0]; // "X"
```

For example, the character at index 0 in the word "Charles" is "C". So if `var firstName = "Charles"`, you can get the value of the first letter of the string by using `firstName[0]`.

### Understand String Immutability

In JavaScript, `String` are `immutable`. This means that they cannot be modified once created.

For instance:

```js
var myStringVariable = "Jello World";

// First character will still be "J"
myStringVariable[0] = "H";

// Right way to mutate a string
myStringVariable = "Hello World";
```

As we can see from the code above, `String immutability` doesn't mean that the string variable cannot be changed, just that the single individual character of a `string literal` cannot be changed.

That's why the only way we can change `myStringVariable` is to assign it with a completely new string:

```js
myStringVariable = "Hello World";
```

### Use Bracket Notation to Find the Nth Character in a String

We can use `bracket notation` also to get a particular character's position within a string.

```js
var lastName = "Xharja";

var thirdLetterOfLastName = lastName[2]; // "a"
```

### Use Bracket Notation to Find the Last Character in a String

Bracket Notation allows us to make also some basic logic and find the last letter of a string. We can do it by subtracting one from the string's length.

```js
var lastName = "Xharja";

var lastLetterOfLastName = lastName[lastName.length - 1]; // "a"
```

### Use Bracket Notation to Find the Nth-to-Last Character in a String

In the same way we calculated the last character in a string, we can retrieve also the Nth-to-last character.

```js
var lastName = "Xharja";

var secondToLastLetterOfLastName = lastName[lastName.length - 2]; // "j"
```
