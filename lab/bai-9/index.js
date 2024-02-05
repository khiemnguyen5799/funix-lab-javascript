'use strict';
const player0El = document.querySelector('.player--0');
const score0El = document.querySelector('#score--0');
const current0El = document.getElementById('current--0');


const player1El = document.querySelector('.player--1');
const score1El = document.getElementById('score--1');
const current1El = document.getElementById('current--1');


const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// tạo biến để cài đặt lại game mới
const init = function () {
  //  diểm số
  scores = [0, 0];
  // điểm số hiện tại
  currentScore = 0;
  // hành động của người chơi
  activePlayer = 0;
  playing = true;


  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  // Thêm class ở DOM vào class ở HTML
  diceEl.classList.add('hidden');

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}
init();
// tạo biến đẻ gọi hàm
const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`)
    .textContent = 0;

  //toggle Nếu lớp đã tồn tại, nó sẽ được xóa; nếu không tồn tại, nó sẽ được thêm vào.
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};



// chức năng lăn của xúc xắc
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Cuộn xúc sắc ngẫu nhiên
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Hiện thị xúc sắc
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. kiểm tra xúc sắc 1:
    if (dice !== 1) {
      // thêm xúc sắc vào số điểm hiện tại
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`)
        .textContent = currentScore;
      // thay đổi điểm số của ng chơi 

    } else { //  true thì chuyển qa ng khác
      // Đưa điểm số bản thân về 0 
      document.getElementById(`current--${activePlayer}`)
        .textContent = 0
      switchPlayer();

    }
  }
});


// giữ điểm sô
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1.cộng điểm hiện tại vào điểm của ng chơi đang hoạt động
    scores[activePlayer] += currentScore;
    // scores[1]=scores[1]+currentScore
    document.getElementById(`score--${activePlayer}`)
      .textContent = scores[activePlayer];
    document.getElementById(`current--${activePlayer}`)
      .textContent = 0

    // 2. Kiểm tra đã ít nhất là 100
    if (scores[activePlayer] >= 100) {
      // Kết thúc game
      playing = false;
      diceEl.classList.add('hidden');


      document.querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Chuyển qua người kế tiếp
      switchPlayer();
    }
  }
});




//  Cài lại New Game
btnNew.addEventListener('click', init);
