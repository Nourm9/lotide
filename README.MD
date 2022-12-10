# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @Nourm9/lotide`

**Require it:**

`const _ = require('@Nourm9/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* [function] : [description]
* `assertArraysEqual`: asserts that 2 arrays are equal
* `assertEqual`: asserts that 2 values are equal
* `assertObjectsEqual`: asserts that 2 objects are equal
* `countLetters`: returns number of letters in a string
* `countOnly`: takes values and returns the count for how many times value occurs.
* `eqArrays`: compares if 2 arrays are equal
* `eqObjects`: compares if 2 objects are equal
* `findKey`: looks through object and returns the first instance for which a callback is truthy.
* `findKeyByValue`: scans through object by key and returns the value that matches given argument
* `flatten`:flattens nested arrays and returns single array. 
* `head`: returns first element of an array
* `index`: includes list of all lotide functions as an object for modular export and import. 
* `letterPositions`: function that returns all the indices in the string where each character is found
* `map`:  makes a new returned array that adds the results of callback function on every element 
* `middle`: returns the middle elements of a given array
* `tail`: returns every element of a given array except the first element of the given array
* `takeUntil`: returns elements of an array based on callback argument
* `without`: takes out elements from a given array