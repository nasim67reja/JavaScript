'use strict';
let targetNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.box').textContent = '?';
let score = 20;
let highscore = 0;
////cdeclare all classes ===>>>>
let text = document.querySelector('.text');
let box = document.querySelector('.box');
let scoreText = document.querySelector('.score');
let all = document.querySelector('.all');
let input = document.querySelector('.input');
let highscoreText = document.querySelector('.highscore');

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(input.value);
  if (!guessNumber) {
    text.textContent = '😢😢Not a Number';
  }
  /// if guessNumber is equal to correctNumber ====>>>
  else if (guessNumber === targetNumber) {
    box.textContent = targetNumber;
    text.textContent = '🏆🏆Correct Number!';
    scoreText.textContent = score;
    all.style.backgroundColor = 'green';
    if (score > highscore) {
      highscore = score;
      highscoreText.textContent = highscore;
    }
  }
  /// if guessNumber is not equal to targetNumber ====>>>
  else if (guessNumber !== targetNumber) {
    if (score > 0) {
      text.textContent =
        guessNumber > targetNumber ? '🙂🙂Too high!' : '😐😐Too low';
    } else {
      text.textContent = '😞😞You lost the game';
    }
    score--;
  }
});

///////// Again Button handler ====>>
document.querySelector('.again').addEventListener('click', function () {
  targetNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  text.textContent = 'Start guessing';
  scoreText.textContent = '';
  input.value = '';
  box.textContent = '?';
  all.style.backgroundColor = 'rgb(49, 47, 49)';
});
