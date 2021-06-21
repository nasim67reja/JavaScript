'use strict';

const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const warning = document.querySelector('#warning');
const heading2 = document.querySelector('h2');
const pigGame = document.querySelector('.piggame');
const crossBtn = document.querySelector('.cross');
const main = document.querySelector('.main');
const heading1 = document.querySelectorAll('h1');
const player1Name = document.querySelector('#player-1');
const player2Name = document.querySelector('#player-2');
const rollBtn = document.querySelectorAll('.buttn');
let currentScoreDom = document.querySelectorAll('.currentscore');
let totalScoreDom = document.querySelectorAll('.totalscore');
let winerDom = document.querySelector('.winer');
const crsBtn2 = document.querySelector('.crsbtn');
const currentPlayerBox = document.querySelectorAll('.player');
let firstPlayer = '';
let secondPlayer = '';
let currentScore = 0;
let currenPlayer = 0;
let totalScore = [0, 0];

const welcomePigGame = function () {
  pigGame.classList.remove('hidden');
  main.classList.add('hidden');
  if (firstPlayer.length > 0 && secondPlayer.length > 0) {
    player1Name.textContent = firstPlayer;
    player2Name.textContent = secondPlayer;
  }
};

const btnClicked = function () {
  //// if user did n't press anything in to input box ===>>>
  if (input.value.length === 0 && warning.classList.contains('hidden')) {
    warning.classList.remove('hidden');
  }
  //// When user input something ==>>
  else if (input.value.length !== 0) {
    if (heading2.textContent === 'First Player : ') {
      heading2.textContent = 'Second Player :';
      firstPlayer = input.value;
      input.value = '';
    } else if (heading2.textContent === 'Second Player :') {
      secondPlayer = input.value;
      welcomePigGame();
    }
    if (!warning.classList.contains('hidden')) warning.classList.add('hidden');
  }
};

///// Next Button functionality====>>>
btn.addEventListener('click', btnClicked);
/////// Cross Button funcionality =====>>>
crossBtn.addEventListener('click', welcomePigGame);
///////////   Key board Functionality =======>>>>>
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') btnClicked();
  else if (e.key === 'Escape') welcomePigGame();
});

const activePlayer = function () {
  currentPlayerBox[currenPlayer].classList.add('bg');
  currentPlayerBox[currenPlayer].classList.add('opacity1');
  currentScoreDom[currenPlayer].textContent = '0';
  currenPlayer = currenPlayer === 0 ? 1 : 0;
  currentScore = 0;
  currentPlayerBox[currenPlayer].classList.remove('bg');
  currentPlayerBox[currenPlayer].classList.remove('opacity1');
};
// /// Role dice button handler ===>>
rollBtn[0].addEventListener('click', function () {
  let randomNumber = Math.trunc(Math.random() * 6) + 1;
  document.querySelector('.image').src = `img/dice-${randomNumber}.png`;
  currentScore += randomNumber;
  if (randomNumber !== 1) {
    currentScoreDom[currenPlayer].textContent = currentScore;
  } else {
    activePlayer();
  }
});

// //////// Hold Score button handler //////////////
rollBtn[1].addEventListener('click', function () {
  totalScore[currenPlayer] += currentScore;
  totalScoreDom[currenPlayer].textContent = totalScore[currenPlayer];
  if (totalScore[currenPlayer] >= 100) {
    winerDom.classList.remove('hidden');
    pigGame.classList.add('opacity');
    crsBtn2.classList.remove('hidden');
    let p2 = player2Name.textContent;
    let p1 = player1Name.textContent;
    document.querySelector('.playerwin').textContent =
      totalScore[0] > 100 ? p1 : p2;
  }
  activePlayer();
});
// //// Cross button 2 handler
crsBtn2.addEventListener('click', function () {
  crsBtn2.classList.add('hidden');
  winerDom.classList.add('hidden');
  pigGame.classList.remove('opacity');
  totalScoreDom[0].textContent = '0';
  totalScoreDom[1].textContent = '0';
  currentScore = 0;
  currenPlayer = 0;
  totalScore = [0, 0];
});
