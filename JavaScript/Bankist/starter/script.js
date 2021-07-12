'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
const navLinks = document.querySelector('.nav__links');
const navLink = document.querySelectorAll('.nav__link');
// navber button smooth  ness handler function
// navLink.forEach(el => {
//   el.addEventListener('click', function (e) {
//     console.log(this);
//     e.preventDefault();
//     const tar = this.getAttribute('href');
//     document.querySelector(tar).scrollIntoView({ behavior: 'smooth' });
//   });
// });
//////////////////////////////////////////
/*
There are two term :
1. Add event Listener to common parent element
2 . Determine what elelment originated the event
*/
navLinks.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e.target);
  if (e.target.getAttribute('class') === 'nav__link') {
    // jonas code if(e.target.classList.contains('nav__link'))
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
const btnScrolled = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
// btn scrolled event handler funtionality
btnScrolled.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' }); // we can apply the scrolling in css and that is a better way for old browser
  // console.log('current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  // const slcords = section1.getBoundingClientRect();
  // window.scrollTo(slcords.left, slcords.top); // this is old school way
  // here the window scroll depend on the distanc between section and top of the screen. if we don't scroll first this system works fine but before clicking the button if we scroll little bit the system works not properly becasue it will works on the distance between top screen and section means the window scroll on the bases of the distance when we scroll before click the distance also decrease that's why after clicking the window did't get the section term properly. we can solve this problem by( adding the scroll to the distance)
  // window.scrollTo(
  //   slcords.left + window.pageXOffset,
  //   slcords.top + window.pageYOffset
  // ); // this is old school way  we can do better
  /* window.scrollTo({
    left: slcords.left + window.pageXOffset,
    top: slcords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  console.log(slcords);
  console.log(e.target.getBoundingClientRect()); // this method is relative to visual view port
  // console.log(btnScrolled.getBoundingClientRect());
  console.log('current scroll (X/Y)', window.pageXOffset, window.pageYOffset); // it returns how much scroll are happened into x axis and y axis
  console.log(
    'height/ width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  ); // it returns the visual hieght and width of the window */
});

//////////// Operations section :
const tabBtn = document.querySelectorAll('.operations__tab');
const tabBtnContainer = document.querySelector('.operations__tab-container');
const operationContent = document.querySelectorAll('.operations__content');

tabBtnContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked.getAttribute('data-tab'));
  if (!clicked) return;
  // active tab
  tabBtn.forEach(b => b.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  operationContent.forEach(t =>
    t.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clicked.getAttribute('data-tab')}`)
    .classList.add('operations__content--active');
});
/////////////////////////////////////////////////////////////////////
// Sticky navigation :
const nav = document.querySelector('.nav');
const navSituated = section1.getBoundingClientRect();
window.addEventListener('scroll', function () {
  if (window.scrollY > navSituated.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
