---
title: Testing framework
status: project
date: "2015-11-28T22:40:32.169Z"
appearence: 6
description: This is a simple Javascript testing framework running on Node.js. I’ve tried to make a simpler version of Mocha.js, after reading a detailed article on how Mocha.js worked.
url: https://github.com/jhkette/algorithms-data-structures-testing
code: Node.js
thumb: pencils.jpeg
main: testing.jpeg
---

This is a simple Javascript testing framework running on Node.js. I’ve tried to make a simpler version of Mocha.js, after reading a detailed article on how Mocha.js worked.

I’ve added a ‘beforeeach’ hook, which allows a function to run before a test is executed. I’ve also added a ‘render’ function – this allows tests to be run on Javascript which interacts with the DOM. I’ve used the JSDOM library to load the DOM (ie a html file in the documents being tested) then test the Javascript that interacts with it. Finally, I’ve added an ‘it’ function, similar to the ‘it’ function in Mocha.js. This runs a function and tests it agasint an expected value from a given input.

In addition i’ve used Chalk to ‘colour’ the console logs for each test.

The sub folders in the repo are all various common Javascript problems/ algorithms (such as binary search, ‘the most common element in an array’ etc). I use the testing framework as a handy way to get instant feedback on common Javascript problems.
