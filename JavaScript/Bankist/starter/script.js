'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// 👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉 Open account button functionality :👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉

const openModal = function (e) {
  e.preventDefault(); // this will e prevent the default behaviour of a link btn
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(el => {
  el.addEventListener('click', openModal);
});
// old school way
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
// 👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉  Button scrolling : 👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords); // interested in top or y value. top will be the distance between the section1 and the top of visual screen

  // console.log(e.target.getBoundingClientRect()); // same as the section 1

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset); // it return the current scroll value. very interesting property

  // console.log(
  // 'height/width viewport',
  // document.documentElement.clientHeight,
  // document.documentElement.clientWidth
  // ); // it will return the current visual height and width

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // more modern way:
  section1.scrollIntoView({ behavior: 'smooth' });
});

// we can achieve is easily by using css  /* scroll-behavior: smooth; */
///////////////////////////////////////

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
//👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉 Page navigation👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });                      // this is right but imagine we need to add this handler function to 100+ element then the perfomence of the web will be very poor. that's why
// we need to attach the handler function in the parent element.Then the event will bubble up and we will catch the event in the parent section of the target element

// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// //////////////////////////////////////////////////////////////////////////////////////////
// //// 👉👉👉👉👉👉👉👉👉👉👉👉👉👉    Building The Tab component// //// 👉👉👉👉👉👉👉👉👉👉👉👉👉👉
const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  // event delegation for more see the lecture 189 or note
  const clicked = e.target.closest('.operations__tab'); // closest is use for span element
  // console.log(clicked);
  // Guard clause
  if (!clicked) return; //more modern way. if the clicked valu is null then the function will be imidiatly finished

  //Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  //Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

///////////////////////////////////////
///////////////////////////////////////
// 😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// 👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉 Selecting, Creating, and Deleting Elements 👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉
/*
// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

///////////////////////////////////////
// 😶😶😶😶😶😶😶😶😶😶😶😶😶😶😶😶😶😶
//  Styles, Attributes and Classes 

// Styles

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// 📝📝📝📝  Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// 📝📝📝📝   Non-standard
console.log(logo.designer); // return undefined
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));
// we can change the image with the help of getAttribute(change the src file) by clicking 
const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

// Don't use
logo.clasName = 'jonas';
*/

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
//👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉 Types of Events and Event Handlers

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading :D');
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
//};

///////////////////////////////////////
//👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉 Event Propagation in Practice👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉
/*
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget); // here e.target shows where the event is generated in this case nav__link element
  // e.currentTarget = the current target is indeed where the event handlers is attach
  console.log(e.currentTarget === this);

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});
*/
//////////////////////////////////////
///////////////////////////////////////

///////////////////////////////////////
// 👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉DOM Traversing 👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉👉

///////////
/* Dom Traversing means basically walking through the dom which means we can select and element based on another element and this is very importance because sometimes
we need to select  elements relative to a certain other element for example , a direct
child or a direct parent element or sometimes we don't even know the structure 
of the dom at runtime and all this cases we need dom traversing
*/
/*
const h1 = document.querySelector('h1');

//🔥🔥🔥 Going downwards: child
console.log(h1.querySelectorAll('.highlight'));     // querySelector also works on elements // it will work for all children but not for there which once are not children of h1
console.log(h1.childNodes);       // only for direct children. nodes can be anything
console.log(h1.children);         // gives only element(only for direct children)(html collection{live collection})
h1.firstElementChild.style.color = 'white';         // only first child will be white
h1.lastElementChild.style.color = 'orangered';       // this is for last child

//🔥🔥🔥 Going upwards: parents
console.log(h1.parentNode); // return direct parent
console.log(h1.parentElement);

//if we need the element which is not direct parent(no matter how far from dom tree) then we can use closest() method
// let's imagine we had multiple header class element but we need only those header which once are parent of h1 element.For this we can use closest method. it is like querySelector

h1.closest('.header').style.background = 'var(--gradient-secondary)'; // 📝📝📝 this is very important. understand this

h1.closest('h1').style.background = 'var(--gradient-primary)'; // that's gonne be the element itself

//🔥🔥🔥 Going sideways: siblings (we can access only direct siblings.previous and next one)
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children); // if we need all the sibling then we can use this trick
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
*/
///////////////////////////////////////
