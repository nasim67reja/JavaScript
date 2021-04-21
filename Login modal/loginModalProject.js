'use strict';

// let loginbtn = document.querySelectorAll('.btn');
// let loginModal = document.querySelector('.loginModal');
// let crossbtn = document.querySelector('.crossbtn');
// let modalbtn = document.querySelectorAll('.modalbtn');

// const openModal = function () {
//   loginModal.classList.remove('hidden');
// };
// const closeModal = function () {
//   loginModal.classList.add('hidden');
// };

// loginbtn[0].addEventListener('click', openModal);
// crossbtn.addEventListener('click', closeModal);
// modalbtn[0].addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   console.log(e.code);
//   console.log(e.key);
//   if (e.key === 'Escape' && !loginModal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

let loginBtn = document.querySelectorAll('.btnh');
let loginModal = document.querySelector('.parentlogin');
let header = document.querySelector('.parenthead');
let crossBtn = document.querySelector('.crossbtn');

loginBtn[0].addEventListener('click', function () {
  loginModal.classList.remove('hidden');
  header.classList.add('blur');
});

crossBtn.addEventListener('click', function () {
  loginModal.classList.add('hidden');
  header.classList.remove('blur');
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && header.classList.contains('blur')) {
    loginModal.classList.add('hidden');
    header.classList.remove('blur');
  }
});
