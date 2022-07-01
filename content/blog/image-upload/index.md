---
title: Image upload
status: project
appearence: 15
code: React, ml5.js
url: https://ml5imageclassifier.netlify.com/
thumb: cycle.jpeg
main: pompidou.jpeg
---

This photo gallery application was part of my work at Birkbeck. The application was made using PHP and MySQL and written in an OOP style.

I’ve made sure to consider the security implications of allowing users to upload files. I carefully checked the extension and mime type and checked other variables to ensure the user uploads a valid image. I also use prepared statements and parameterized queries to protect against any form of SQL injection.

The uploaded images are resized by the application – both to thumbnail and feature size. The user can also download the original file.

The application also includes a JSON web service, which allows the user to retrieve JSON data by entering the id of the photo at the end of a query string. For example: http://titan.dcs.bbk.ac.uk/~jkette01/upload/index.php?json=13

The code can be viewed here https://github.com/jhkette/image_upload_project
