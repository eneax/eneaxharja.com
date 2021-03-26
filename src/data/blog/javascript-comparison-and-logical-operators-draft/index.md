---
title: JavaScript Comparison and Logical Operators
date: "2020-05-09"
description: ""
tags: ["javascript"]
---

## Understanding Boolean Values

A `Boolean` is a JavaScript data type that can have only two values: `true` or `false`.
These two states are `mutually exclusive` and therefore, they cannot both occur at the same time.

Example:

```js
function welcomeToBooleans() {
  return true
}
```

Note: `Boolean` values are never written with quotes.

## Use Conditional Logic with If Statements

Every time we have to make a decision in our JavaScript code, we use to `if` keyword.
It tells JavaScript to execute the code defined in the curly braces if a certain condition is met.

These conditions are known as `Boolean conditions` and they can have only two values: `true` or `false`.

Example:

```js
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true"
  }
  return "No, that was false"
}
```

As we can see from the example above, `wasThatTrue` is `true` so our `trueOrFalse` function will return the string `"Yes, that was true"`.
The second `return` statement `"No, that was false"` will not execute.

## Comparison with the Equality Operator

In JavaScript, the equality operator `==` compares two values and returns `true` if they're equivalent or `false` if they are not.

```js
function test(num) {
  if (num == 12) {
    return "Equal"
  }
  return "Not Equal"
}

test(10)
```

As we can see from the code above, the `test` function checks if the value of `num` is equal to `12`, and if this is `true`, it returns `Equal`. In our case, we pass the `Number` `10` to the `test` function, so it returns `Not Equal`.

Although the previous example looks pretty straight forward, there is one more thing to consider when using the `equality operator` and that's `type coercion`.
`Type Coercion` means that, if JavaScript need to compare two different data types (`numbers` and `strings`), it has to convert one type to another.

For instance:

```js
1 == 1 // true
1 == 2 // false
1 == "1" // true
"3" == 3 // true
```

Note: keep in mind that the equality operator (`==`) is different from the assignment operator (`=`), which is used to assign the value at the `right` of the operator to a variable in the `left`.

## Comparison with the Strict Equality Operator

While the equality operator (`==`) converts both values that we want to compare to a common type, the strict equality operator (`===`) does not perform a type conversion.

Example:

```js
17 === 17 // true
17 === "17" // false
```

In the second example, `17` is a `Number` type and `'17'` is a String type; so the strict equality operator considers them unequal.

Note: In JavaScript, we can determine the type of a variable using the `typeof` operator:

```js
typeof 17 // returns 'number'
typeof "17" // returns 'string'
```

## Practice comparing different values

We can summarize the difference between `==` and `===` in the following example:

```js
3 == "3" // returns true because JavaScript converts the value on the right of the operator from string to number
3 === "3" // returns false because the types are different and JavaScript does not perform type conversion
```

## Comparison with the Inequality Operator

The inequality operator (`!=`) is the opposite of the equality operator.
It means 'Not Equal' and it returns `false` in the cases where the equality operator would return `true`.

Moreover, just like the equality operator, the inequality operator performs a `type conversion` while comparing.

Examples:

```js
1 != 2 // true
1 != "1" // false
1 != true // false
```

## Comparison with the Strict Inequality Operator

The strict inequality operator (`!==`) is the opposite of the strict equality operator.
It means 'Strictly Not Equal' and it returns `false` in the cases where the strict equality operator would return `true`.

Moreover, just like the strict equality operator, the inequality operator doesn't performs a `type conversion` while comparing.

Examples:

```js
1 !== 2 // true
1 !== "1" // true
1 !== true // true
```

## Comparison with the Greater Than Operator

The greater than operator (`>`) compares the values of two numbers and returns `true` if the number to the left is greater than the number to the right. Otherwise, it returns `false`.

Just like the `equality operator`, also `greater than` operator converts data types of values while comparing.

Examples:

```js
17 > 1 // true
17 > "1" // true
1 > 17 // false
"1" > 17 // false
```

## Comparison with the Greater Than Or Equal To Operator

The `greater than or equal to` operator (`>=`) compares the values of two numbers.
If the number to the left is greater than or equal to the number to the right, it returns `true`. Otherwise, it returns `false`.

The `greater than or equal to` operator converts data types while comparing.

Examples:

```js
17 >= 17 // true
17 >= "1" // true
1 >= 17 // false
"17" >= 20 // false
```

## Comparison with the Less Than Operator

The `less than` operator (`<`) compares the values of two numbers.
If the number to the left is less than the number to the right, it returns `true`. Otherwise, it returns `false`.

The `less than` operator converts data types while comparing.

Example:

```js
1 < 2 // true
"2" < 17 // true
3 < 3 // false
3 < 1 // false
"3" < 1 // false
```

## Comparison with the Less Than Or Equal To Operator

The `less than or equal to` operator (`<=`) compares the values of two numbers.
If the number to the left is less than or equal to the number to the right, it returns `true`.
Otherwise, it returns `false`.

The `less than or equal to` operator converts data types while comparing.

Examples:

```js
2 <= 5 // true
"2" <= 2 // true
5 <= 5 // true
5 <= 2 // false
"17" <= 4 // false
```

## Comparisons with the Logical And Operator

The logical `and` operator (`&&`) returns `true` if and only if the operands to the left and right of it are `true`.
This operator is very useful when we need to compare more than one thing at a time.

As we can see from the example below, the `testLogicalAnd` function will return `"Yes"` if and only if the `val` value is between 25 and 50:

```js
function testLogicalAnd(val) {
  if (val >= 10 && val <= 20) {
    return "Yes"
  }

  return "No"
}

testLogicalAnd(10)
```

## Comparisons with the Logical Or Operator

The logical `or` operator (`||`) returns `true` if either of the operands is `true`. Otherwise, it returns `false`.

From the example below we can see that the `testLogicalOr` function will return `"Outside"` if `val` is either less than 10 `or` greater than 20.

```js
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside"
  }

  return "Inside"
}

testLogicalOr(15)
```

## Introducing Else Statements

An `if/else` statement gives us the possibility to return two separate code blocks.
When a condition for an `if` statement is `true`, the first code block is executed.
If, however, the condition is `false`, an alternate code block will execute instead of the first code block.

Example:

```js
function testElse(val) {
  var result = ""

  if (val > 5) {
    result = "Bigger than 5"
  } else {
    result = "5 or Smaller"
  }

  return result
}

testElse(4)
```

## Introducing Else If Statements

If we have to deal with more than two possible conditions, we can chain the `if` statements together with `else if` statements.

When dealing with multiple conditions, the statements `if` and `else if` need to follow a particular order, depending on the result that we want to return from a function.

Example:

```js
function testElseIf(val) {
  if (val < 5) {
    return "Less than 5"
  } else if (val < 10) {
    return "Less than 10"
  } else {
    return "Greater than or equal to 10"
  }
}

testElseIf(7)
```