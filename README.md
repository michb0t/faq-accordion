# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). 
Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot
![desktop-view](https://user-images.githubusercontent.com/81781093/135547396-7f81acc1-0022-4660-b29e-63a2df704b79.png)
![mobile-view](https://user-images.githubusercontent.com/81781093/135547989-035b3de8-06f1-45b1-8aac-51bfef59c545.png)

### Links

- Solution URL: [Link to Github Solution](https://github.com/michb0t/faq-accordion)
- Live Site URL: [Link to Live URL](https://michb0t.github.io/faq-accordion/)

## My process

### Built with

- HTML
- CSS
- Javascript


### What I learned

- CSS: I learned a little more about positioning elements on the page. Positions of child elements are relative to their parent elements, so if we don't set a position on the parent element, the child element will look for the next level above until it finds a position.

```css
.mob_images {
    position: absolute;
    right: 30%;
    height: 0;
}

.icon-women {
    position: relative;
    top: -6.7rem;
    left: 1.5rem;
}

.icon-shadow {
    position: relative;
    top:-12rem;
    left: 3rem;
}
```

Accordion javascript using less than 10 lines of code - This was a fun challenge to learn a commonly used component on websites. Use cases include FAQs, hide/show content (online education providers), e-commerce and so many more!

```js

const qcard = document.querySelectorAll(".q-card")
const arrows = document.querySelectorAll(".arrow")

for (let i = 0; i < qcard.length; i++) {
    qcard[i].addEventListener("click", function() {
        this.classList.toggle("active")
    })
}

```

## Author

- github - [michb0t](https://github.com/michb0t)
- Frontend Mentor - [@michb0t](https://www.frontendmentor.io/profile/michb0t)
- Twitter - [@michbot7](https://www.twitter.com/michbot7)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**
