/*
// Lab 5.1. Giới thiệu về Object
const myCountry = {
  country: 'Việt Nam',
  capital: 'Hà Nội',
  language: 'Vietnamese',
  population: 90,
  neighbours: ['lào', 'trung quốc', 'campuchia'],
  describe: function () {
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, 3 neighbouring countries ${this.neighbours} and a capital called ${this.capital}`);
  },
  checkIsland: function () {
    console.log(this.neighbours.length === 0 ? true : false);
  }
}

// Lab 5.2. Dấu chấm với dấu ngoặc 
// sử dụng object của lab 5.1
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, 3 neighbouring countries ${myCountry.neighbours} and a capital called ${myCountry.capital}`);

const upPopulation = myCountry.population + 2;
console.log(`Dân số sau khi tăng thêm 2 triệu người là: ${upPopulation} triệu`);
const downPopulation = myCountry['population'] - 2;
console.log(`Dân số sau khi giảm đi 2 triệu người là: ${downPopulation} triệu`);


// Lab 5.3. Phương thức Object
myCountry.describe();
myCountry.checkIsland();

*/

/*=============================================================================================================*/
/*
// Lab 5.4. Vòng lặp For
for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}
*/

/*======================================================================================================================*/

// Lab 5.5. Lặp trong array, break và continue
/*
// 1.Hãy lấy lại array 'populations' từ bài lab trước.
const population = [90, 336, 125, 1410];
console.log(population);
// 2.for
const percentages2 = [];

function percentageOfWorld1(populations) {
  return `${(populations * (100 / 7900)).toFixed(2)}%`;
}
for (let i = 0; i < population.length; i++) {
  percentages2.push(percentageOfWorld1(population[i]));
}
console.log(percentages2);
console.log('---------------------------------');
*/
// lab 4
/*
function percentageOfWorld1(country, population) {
  function percentageOfWorld2() {
    return (population / 7900 * 100).toFixed(1);
  }
  console.log(`${country} has ${population} million people, which is about  ${percentageOfWorld2()}% of the world`);
}
const percentages = [
  { name: 'vietnam', population: 90 },
  { name: 'china', population: 1410 },
  { name: 'USA', population: 336 },
  { name: 'japan', population: 125 },
];
percentages.map(function output(thamso) {
  percentageOfWorld1(thamso.name, thamso.population)
})
*/

//Lab 5.6. Vòng lặp ngược và Vòng lặp trong vòng lặp (15 phút)
//1. lưu trữ
const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia']
];
// 2.in ra phần tử số 2
// cách 1:sử dụng filter và foreach
let filteredNeighbours = listOfNeighbours.filter(neighbour => neighbour.length >= 2);
console.log(filteredNeighbours);
filteredNeighbours.forEach(neighbour => {
  for (let i = 1; i < neighbour.length; i++) {
    console.log(neighbour[i]);
  }
})

console.log('--------------------------------------');
// cách 2:sử dụng for
// biến cờ kiểm soát xuất hiện cả phần else
let bienco = false;
for (let i = 0; i < listOfNeighbours.length; i++) {
  if (listOfNeighbours[i].length >= 2) {
    for (k = 1; listOfNeighbours[i].length > k; k++) {
      console.log(listOfNeighbours[i][k]);
    }
    bienco = true;
  } else if (!bienco) {
    console.log('không có nước nào!');
  }
}

//cách 3

for (let i = 1; i <= 1; i++) {
  console.log(`-------------- các nước lân cận`);

  for (let o = 2; o < listOfNeighbours[0].length; o++) {
    console.log(`các nước là ${listOfNeighbours[0]}`);
  }
  for (let e = 2; e < listOfNeighbours[1].length; e++) {
    console.log(`các nước là ${listOfNeighbours[1]}`);
  }
  for (let a = 2; a < listOfNeighbours[2].length; a++) {
    console.log(`các nước là ${listOfNeighbours[2]}`);
  }
}

// Lab 5.7. Vòng lặp While (10 phút)
const populations = [90, 336, 125, 1410];
let percentageOfWorld1 = population => `${(population * (100 / 7900)).toFixed(2)}%`;
let i = 0;
let percentages3 = [];
while (i < populations.length) {
  let tinhtile = percentageOfWorld1(populations[i]);
  percentages3.push(tinhtile);
  i++;
}
console.log(percentages3);

//Lab 5.8.1. So sánh chỉ số BMI (phần 3)
const mark = {
  fullname: 'Mark Miller',
  mass: 78,
  height: 1.69,
  bmi: 0, //thuộc tính lưu giá trị bmi
  // phương thức giá trị bmi
  calcBmi: function () {
    return (this.mass / (this.height * this.height)).toFixed(2);
  }
}
const john = {
  fullname: 'John Smith',
  mass: 92,
  height: 1.95,
  bmi: 0,
  calcBmi: function () {
    return (this.mass / (this.height ** 2)).toFixed(2);
  }
}

let bmiMark = mark.calcBmi();
let bmijohn = john.calcBmi();

if (bmiMark > bmijohn) {
  console.log(`${mark.fullname}'s BMI (${bmiMark}) is higher than ${john.fullname}'s (${bmijohn})`);
} else {
  console.log(`${john.fullname}'s BMI (${bmijohn}) is higher than ${mark.fullname}'s (${bmiMark})`);
}
// Lab 5.8.2. Cải thiện Tip calculator
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
}
for (let i = 0; bills.length > i; i++) {
  let tip = calcTip(bills[i]);
  let total = tip + bills[i];
  console.log(`Bill: ${bills[i]}, Tip: ${tip}, Total: ${total}`);
  tips.push(tip);
  totals.push(total)
}
// bonus
function calcAverage(arr) {
  // kiểm tra xem nếu đây là mảng rỗng
  if (arr.length === 0) {
    return 0;
  }
  //  tính tổng bằng phương thức reduce
  let sum = arr.reduce((sobandau, giatri) => sobandau + giatri, 0);
  //  tính trung bình 
  let trungbinh = sum / arr.length;

  return trungbinh;
}
let trungbinhBill = calcAverage(bills)
let trungbinhtip = calcAverage(tips)
let trungbinhtotal = calcAverage(totals)
console.log(`
Giá trị trung bình của Bill là: ${trungbinhBill}
Giá trị trung bình của Tip là: ${trungbinhtip}
Giá trị trung bình của Total là: ${trungbinhtotal}
`);
