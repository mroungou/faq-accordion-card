# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

### Links

- Solution URL: (https://github.com/mroungou/faq-accordion-card)
- Live Site URL: (https://mroungou.github.io/faq-accordion-card/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

- using JS to manipulate the DOM
- use of relative and absolute positioning



```js
document.addEventListener('DOMContentLoaded', function() {
    let questions = document.getElementsByClassName('concern');
    for (let i = 0; i < questions.length; i++) {
      questions[i].addEventListener('click', function() {
        this.classList.toggle('expanded');
      });
    }
  });
```
### Continued development

In the future I would like to work more on the JS logic as well as using more of JS for building the accordion using Vue or React.




