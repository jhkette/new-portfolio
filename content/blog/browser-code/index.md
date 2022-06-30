---
title: Browser Code Editor
status: project
date: "2015-05-28T22:40:32.169Z"
code: React, Typescript
url: https://epic-bardeen-15eb55.netlify.app/
thumb: code1.jpeg
main: code.jpg
---

This is an online code editor built using Typescript with React. It was based on a short tutorial on how to use esbuild to create an online code editor. I expanded on this considerably to make an application written in Typescript with React. Redux is used to store state in the application.

It was a fun project with some obvious challenges. I learnt how to execute javascript code (securely) in a browser using an iframe. ‘Messages’ can be posted from the code editor to the Iframe; the Iframe itself has an event listener to ‘listen’ for the messages. The javascript communicated in the message then runs securely and independently in the Iframe window.
