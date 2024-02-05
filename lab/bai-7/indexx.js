'use strict'
const again = document.querySelector('.again');
const body = document.querySelector('body');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const btncheck = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');

let luotchoi = 20;
let diemcao = 0;


let sobian = Math.trunc((Math.random() * 20) + 1);
console.log(sobian);
btncheck.addEventListener('click', function () {
  let sodoan = Number(guess.value);
  console.log(sodoan, typeof sodoan);
  if (!sodoan) {
    message.textContent = 'banggo ni kaite kudasai';
    body.style.backgroundColor = '#fd7'
  } else if (sodoan === sobian) {
    message.textContent = 'omedeto gozaimasu';
    body.style.backgroundColor = '#199';
    number.style.width = '500rem';
    if (luotchoi > diemcao) {
      diemcao = luotchoi;
      console.log(diemcao);
      highscore.textContent = diemcao;
    }
  } else if (sodoan > sobian) {
    if (luotchoi > 0) {
      message.textContent = 'takai desu  yo'
      luotchoi--;
      score.textContent = luotchoi;
    } else {
      message.textContent = 'makechatta';
      body.style.backgroundColor = '#fd0707'
    }
  } else if (sodoan < sobian) {
    if (luotchoi > 0) {
      luotchoi--;
      score.textContent = luotchoi;
      message.textContent = 'hikui dayo'
    } else {
      message.textContent = 'makechatta';
      body.style.backgroundColor = '#fd0707'
    }
  }
});
again.addEventListener('click', function () {

  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  number.textContent = '?';
  message.textContent = 'Start guessing...';
  score.textContent = 20;
  highscore.textContent = 0;
})