---
title: HTML emailer
status: project
appearence: 4
code: HTML emailer
url: https://emailerdemo.netlify.com/
thumb: emailerthumb.png
main: emailer.png
---

This is a responsive emailer that works across all major email clients. As in all emailers, I use HTML tables to control the layout.

Most emailers will need to have a section that has two or three columns. The most effective way to make these sections responsive is to create a container table then add nested tables inside a 100% width <td> cell of the parent table.

For example each nested table would have a width of 280px for a ‘two column’ emailer layout. Media queries can then be used to make the nested table 100% width for tablets or mobile devices. This makes the tables stack ontop of one another, creating an effective responsive design.

This [wireframe sketch](https://drive.google.com/file/d/1oWLCq9gBrdBnuwGndb8txGIzLhstVbbC/view) shows how I laid out the email above.
