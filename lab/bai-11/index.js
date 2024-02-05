const poll = {
  question: "What is your favourite programming language? ",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  numberOfVotes: new Array(4).fill(0),

  registerNewAnswer: function () {
    const number = Number(
      prompt(`${this.question}\n${this.options[0]}\n${this.options[1]}\n${this.options[2]}\n${this.options[3]}\n(Write option number)`)
    );

    if (!isNaN(number) && number >= 0 && number <= 3) {
      this.numberOfVotes[number]++;
    } else {
      alert("Câu trả lời không hợp lệ");
    }
  },
  displayResults: function (type) {
    if (type === 'string') {
      console.log(`Poll result are ${this.numberOfVotes.join(',')}`);
    } else if (type === 'array') {
      console.log(this.numberOfVotes);
    }
  }
};
console.log(poll.numberOfVotes);
btnAnswer = document.getElementById("btn-answer");

btnAnswer.addEventListener('click', function () {
  poll.registerNewAnswer();
  poll.displayResults('array');
  poll.displayResults('string');
});

// Dữ liệu kiểm tra
const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

// Cập nhật số phiếu bầu và hiển thị kết quả
testData1.forEach((vote, index) => {
  poll.numberOfVotes[index] += vote;
});
poll.displayResults('array');
poll.displayResults('string');

// Reset số phiếu bầu
poll.numberOfVotes.fill(0);

testData2.forEach((vote, index) => {
  poll.numberOfVotes[index] += vote;
});
poll.displayResults('array');
poll.displayResults('string');
