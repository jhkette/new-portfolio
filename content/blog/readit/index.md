---
title: Reddit clone
status: project
date: "2015-05-28T22:40:32.169Z"
code: React
description: I wanted to improve my Typescript skills, particularly when working with React. I decided to make a Reddit clone using TypeORM and React with Typescript.

url: http://13.58.89.147/
thumb: reddit.jpeg
main: large.jpeg
---
 I wanted to improve my Typescript skills, particularly when working with React. I decided to make a Reddit clone using TypeORM and React with Typescript.

TypeORM is an ORM  (ie a type of tool that maps entities with database tables) that can run in NodeJS. It is written in Typescript. I made the server side of the application using this tool and Node/Express. TypeORM allowed me to create entities, which essentially map a Typescript class onto a database table. Node/Express was used to create a server and routing for various API endpoints that would be used client-side.

The React client was written in Typescript. I made use of a a library called SWR, a React Hooks library for data fetching. The library caches requests, ensuring the number of requests made to the server are kept to a minimum.

I was pleased with the end result. In all the clone has authentication, subs can be created, posts can be written and comments can be written on posts. Posts are associated with certain subs, in a one to many relationship. In addition, posts can also be voted on and the cumulative number of votes by all users are shown.

I deployed the site on AWS. As it’s simply a clone – I haven’t applied for a domain name or an HTTPS certificate.