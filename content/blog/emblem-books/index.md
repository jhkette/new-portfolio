---
title: Emblem Books
status: project
appearence: 17
code: HTML,CSS
url: https://emblem-books.netlify.com/
thumb: oldbooks.jpeg
main: vintage.jpeg
---

This was part of an assigned projected as part if my work at Birckbeck. The emphasis was placed on creating an accessible, usable responsive website, which matched [storyboards](https://drive.google.com/file/d/1rnq6YsqdPlnj6LI4yHY6AIF4KNvhbihP/view) that had been designed earlier .

Accessibility
I made careful use of semantic HTML, such as section, article, aside header and nav to describe content. Headings were used to provided a clear hierarchy of information to the user. In addition, I also added aria landmarks throughout the site – to ensure assistive technologies would be able to read the content. Finally, a skip navigation was added. I used absolute positioning to position the link to the extreme left ensure it wasn’t visible.

I also took several steps to ensure tables, forms and lists were as accessible as possible:

Descriptive lists had titles with ids and their descriptions with ‘aria-labelled-by’ attributes.
Form fields had labels with ids that matched the name of the form field.
Form controls were made as clear and as accessible as possible.
I also used the scope attribute to describe the table’s contents.
A more detailed write up of how I considered issues of browser compatibility and accessibility when making the site can be found here.

Javascript
I subsequently added some Javascript to the project. This enabled me to hide/reveal the navigation using a simple hamburger menu. Again, I used relevant aria labels to describe this navigation to the user. I also added a stripped down ‘sticky’ version of the menu, which was presented to the user when they scrolled down. When the user scrolls to the top of the content the full navbar is presented again.

I simply toggled some nav classes to achieve this. In addition I added a debounce function to ensure the scroll event wasn’t firing to often and slowing down the website. Finally, I added a simple carousel which allowed me to present a series of images and accompanying calls to action to the user.
