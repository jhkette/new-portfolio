---
title: Wordle clone
status: project
appearence: 1
code: React
url: https://worldleclone.netlify.app/
thumb: wordle.webp
main: words.jpg
---

This is a wordle clone made in React. All the features of the wordle game are present.

- Guessed letters in the correct position of the correct word are marked green.
- Letters that are present in the correct word but not in the correct place are marked yellow.
- If there are more versions of the letter in the guessed word than the correct word only one letter will appear in yellow.
- If the guessed word in not valid an error message is shown accomponied with a shake animation.
- If the guesses are completed or the correct word is guessed a modal is shown.

These features were relatively complicated to programme. I placed all this logic in a wordle hook and imported the hook with relevant functions in the components that dealt with the game logic.
