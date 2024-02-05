// Lab 3.1. Chuyển đổi kiểu và ép kiểu
/*
let n = '9' - '5';
let k = '19' - '13' + '17';
let h = '19' - '13' + 17;
let i = '123' < 57;
let e = 5 + 6 + '4' + 9 - 4 - 2;

console.log(n,k,h,i,e);
*/

///////////////////////////////////////////////////////////////////////////////////////////////
// Lab 3.2. Toán tử bằng: == với ===
/*
const numNeighbours = prompt('How many neighbor countries does your country have?')

if(numNeighbours == 1){
  console.log('Only 1 border!');
}else if(numNeighbours>1){
  console.log('More than 1 border');
}else{
  console.log('No borders');
}
//Sử dụng === khi bạn muốn so sánh cả giá trị và kiểu dữ liệu mà không muốn ép kiểu tự động.
//Sử dụng == khi bạn chắc chắn về kiểu dữ liệu hoặc khi bạn cần ép kiểu tự động.
// không nên sử dụng toán tử === trong trường hợp này vì prompt sẽ trả về 1 string nên sử dụng === sẽ ra false
*/


////////////////////////////////////////////////////////////////////////////////////////////////
// Lab 3.3. Toán tử logic
/*
//2
let language = 'English';
let population = 20;
let isLand = true;
let country = 'Singapo';

if (language === 'English' && population < 50 && isLand === false) {
  prompt(`You should live in ${country} :)`)
} else {
  prompt(`${country} does not meet your criteria :(`)
}
*/


//////////////////////////////////////////////////////////////////////////////

// Lab 3.4. Câu lệnh switch
/*
let language = 'Arabic';
switch (language) {
  case "Chinese":
  case 'Mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'Spanish':
    console.log('2nd place in number of native speakers');
    break;
  case "English":
    console.log('3rd place');
    break;
  case "Hindi":
    console.log('Number 4');
    break;
  case "Arabic":
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
}
*/


///////////////////////////////////////////////////////////////////////////
// Lab 3.5. Toán tử điều kiện (ba ngôi)
/*
// let population = 90;
let population = 13;
// let population = 130;

let a =
  population > 33
    ? `Portugal's population is above average`
    : `Portugal's population is below average`
console.log(a);
*/


///////////////////////////////////////////////////////////////////////////////////////////
// Lab 3.6.1. Đội nào chiến thắng? (phần 1)

let poinDolphins = (96 + 108 + 89) / 3;
let poinKoalas = (88 + 91 + 110) / 3;
if (poinDolphins > poinKoalas) {
  console.log('Dolphins win!');
} else if (poinDolphins < poinKoalas) {
  console.log('Koalas win!');
} else {
  console.log('Both win the trophy!');
}
console.log('-------------------------------------');

// Bonus 1
let bonusDolphins1 = (97 + 112 + 101) / 3;
let bonusKoalas1 = (109 + 95 + 123) / 3;
if (bonusDolphins1 >= 100 && bonusDolphins1 > bonusKoalas1) {
  console.log('Dolphins win!');
} else if (bonusKoalas1 >= 100 && bonusDolphins1 < bonusKoalas1) {
  console.log('Koalas win!');
} else {
  console.log('Both win the trophy!');
}
console.log('--------------------------------------');
// Bonus 2
let bonusDolphins2 = (97 + 112 + 101) / 3;
let bonusKoalas2 = (109 + 95 + 106) / 3;
if (bonusDolphins2 >= 100 && bonusDolphins2 > bonusKoalas2) {
  console.log('Dolphins win!');
} else if (bonusKoalas2 >= 100 && bonusDolphins2 < bonusKoalas2) {
  console.log('Koalas win!');
} else if (bonusDolphins2 = bonusKoalas2 && bonusDolphins2 >= 100 && bonusKoalas2 >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No team won');
}

console.log('------------------------------------------');


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lab 3.6.2. Tip calculator (phần 1)
let bill = 275;
// let bill = 40;
// let bill = 430;
let tip =
  bill >= 50 && bill <= 300
    ? bill * 0.15
    : bill * 0.2;
let total = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);


