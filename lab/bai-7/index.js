'use strict';


//  thuật toán số ngẫu nhiên , trong đó 'trunc' làm mất số thập phân
let secritNumber = Math.trunc(Math.random() * 20) + 1;
// (Math.random() * 20) nó sẽ chạy từ 0 đến 19.99999999999999999999999....
// Math.trunc phương thức này sẽ loại bỏ số thập phân vì thế nó sẽ chạy từ 0 đến 19 vậy nên phải cộng thêm 1
console.log(secritNumber);
// thêm điểm số bị giảm mỗi lần đoán sai rồi thêm vào hàm bên dưới
let score = 20;
let highscore = 0;



// tạo hàm và tru cập đoán số bằng 'lắng nghe sự kiện 'click''
// java sẽ xác định sự kiện khi bạn 'click'
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //  Khi không có đầu vào 
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';


    // khi người chơi thắng
  } else if (guess === secritNumber) {
    document.querySelector('.message').textContent = '🎊🎉 Correct Number!';

    // thêm biến đc tính toán ở trên gán vào trình thay đổi nội dung html
    document.querySelector('.number').textContent = secritNumber;


    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '500rem';


    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;

    }


    // Khi người chơi đoán cao 
  } else if (guess > secritNumber) {

    // thêm if vào trog khung else if này để khi thua trò chơi sẽ chạy thông báo
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;

    } else {
      document.querySelector('.message').textContent = 'Bạn thua rồi 💣';

      document.querySelector('.score').textContent = 0;

    }

    // Khi người chơi đoán thấp

  } else if (guess < secritNumber) {

    //  tương tự như trên
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;

    } else {
      document.querySelector('.message').textContent = 'Bạn thua rồi 💣';

      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // score = 20;
  secritNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});