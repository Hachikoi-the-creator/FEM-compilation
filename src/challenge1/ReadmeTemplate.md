# Table of contents
- [Table of contents](#table-of-contents)
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
**Interactive rating component**
Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

<!-- ![Big screen view](./img/big.png) -->
![Mobile view](./img/mobile.png)

### Links

- Github URL: [Add solution URL here](https://github.com/Hachikoi-the-creator/Front-end__3preview-cars)
- Live Site URL: [Add live site URL here](https://practical-mirzakhani-101c4c.netlify.app/)

## My process

- First I made the markup whit what I thought was necessary, and filed the P whit some lorem
- After that, I managed to get everything ready to work whit SASS
- Then I made the grid for the 3 columns
- Before the columns were actually ready, I added the correct colors
- After everyhing was looking fine on mobile I went on to fix the bigger screen, and a little f back and forth from mobile to bigger screen
- Then I forgot about watching my SASS folder and messed up a lot, having to import the fonts all over again
- After finishing, I commited the last version

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- SASS 
- Mobile-first workflow
- Fonts-used
  - [Big Shoulders](https://fonts.google.com/specimen/Big+Shoulders+Display) 
  - [Lexend Deca](https://fonts.google.com/specimen/Lexend+Deca)

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

**SASS**

- Used modular SASS for the first time
  
```scss
// I made use of the :nth-child, 
// I was looking for something likes this days ago, but forgot it lol
:nth-child(2){
    background-color: $suv-color;
    // Also just implemented my first mixin
    @include buttonsColors($suv-color);
  }
/* ------------------------ */
// Used @use & @forward instead of 
// the decrecated @import, after learning what was it
@use "index" as *;
@forward 'mixins';
```



### Continued development

I want to keep working on:
- SASS and build more confidence end fluency
- Work whit more JS
- Make more use of the CSS Querys

### Useful resources

- [Validate HTML](https://validator.w3.org/#validate_by_input) - Found it in front-end-mentor comments
- [Validate CSS](https://jonassebastianohlsson.com/specificity-graph/) - Found it in front-end-mentor comments

## Author

- Frontend Mentor - [@Hachikoi-the-creator](https://www.frontendmentor.io/profile/Hachikoi-the-creator)
- Twitter - [@8koi2](https://twitter.com/8koi2)
- Github - [Hachikoi-the-creator](https://github.com/Hachikoi-the-creator)

## Acknowledgments

I got the idea to center everything from a Short of [Kevin Powell](https://www.youtube.com/kepowob)
- The parent must be either flex or grid, and use margin:auto in the child div

