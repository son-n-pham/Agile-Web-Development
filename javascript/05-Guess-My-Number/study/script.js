'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.guess').value = 10;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (targetClass, message) {
  document.querySelector(`.${targetClass}`).textContent = `${message}`;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('message', '🤔 No guessing number.');
  } else if (guess === secretNumber) {
    displayMessage('message', 'Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayMessage('number', secretNumber);
    if (score > highScore) {
      highScore = score;
      displayMessage('highscore', highScore);
    }
  } else if (score > 0) {
    document.querySelector('.message').textContent =
      guess > secretNumber ? 'Too high!' : 'Too low!';
    score--;
    displayMessage('score', score);
  } else if (score === 0) {
    displayMessage('message', 'YOU LOSE THE GAME!!!');
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('number', '?');
  document.querySelector('.guess').value = '';
  displayMessage('message', 'Start guessing...');
  displayMessage('score', score);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
