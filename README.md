# Frontend Mentor - Manage landing page solution

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](/desing/FireShot-Manage%20.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS
- [Tailwindcss](https://tailwindcss.com) - CSS framework

### What I learned

First I did this project with tailwind because I want to know how it works, therefore I learned a lot about tailwind. What I can highlight the most is the use of areas that I had never used before and I think it is a great function of the tailwind components.

```html
<form
  id="subscription-form"
  class="flex gap-4 w-full min-w-[100px] [grid-area:form]"
></form>
<div
  lass="flex flex-wrap gap-4 justify-between w-full [grid-area:social-media]"
></div>
<a href="#" class="[grid-area:logo]"></a>
<p
  class="text-dark-grayish-blue text-center [grid-area:copy] md:text-right"
></p>
```

```css
.footer-area {
  grid-template-areas:
    "form"
    "navigation"
    "social-media"
    "logo"
    "copy";
}
.footer-area-md {
  grid-template-areas:
    "logo           navigation   form"
    "social-media   navigation   copy";
}
```

### Continued development

As I mentioned previously, it is one of my first projects with tailwind, therefore I consider myself a novice with it, I will continue to focus on learning its functionality in new projects, since I am looking to apply it together with the [Astro] (https://astro.build) framework.

### Useful resources

- [SwiperJS](https://swiperjs.com) - This helped me generate the testimonials slider faster. I really liked this library and will use it in the future.

## Author

- Website - [Diego Aguilar Zeledón](#)
- Frontend Mentor - [@slinky97](https://www.frontendmentor.io/profile/slinky97)
