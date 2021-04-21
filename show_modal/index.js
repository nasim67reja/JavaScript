'use strict';

let buttons = document.querySelectorAll('.button');
let showModal = document.querySelector('.show_modal');
let ovarLay = document.querySelector('.ovarlay');
let closeModal = document.querySelector('.close_modal');

const openModal = function () {
  showModal.classList.remove('hidden');
  ovarLay.classList.remove('hidden');
};
const closeModalFunction = function () {
  showModal.classList.add('hidden');
  ovarLay.classList.add('hidden');
};
//// open Modal ===>>
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', openModal);
}
///// close modal ==>>
closeModal.addEventListener('click', closeModalFunction);
ovarLay.addEventListener('click', closeModalFunction);

////// esc key event  ====>>
document.addEventListener('keydown', function (e) {
  // console.log(e.code);
  // console.log(e.key);
  if (e.code === 'Escape' && !showModal.classList.contains('hidden'))
    closeModalFunction();
});
