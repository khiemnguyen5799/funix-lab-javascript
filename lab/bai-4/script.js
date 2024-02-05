// Lab 4.1. Hàm
/*
console.log('Hàm 4.1 =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
function describeCountry(country,population,capitalCity){
  console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`);
}
describeCountry('Việt Nam',90,'Hà Nội');
describeCountry('Japan',125,'Tokyo');
describeCountry('USA',336,'Washington DC');
*/


/////////////////////////////////////////////////////////////////////////////////////////////
// Lab 4.2. Khai báo hàm với biểu thức hàm

// Khai báo Hàm
/*
function percentageOfWorld1(country, population) {
  const phanTram = (population / 7900 * 100).toFixed(1);
  console.log(`${country} có ${population} triệu người, chiếm ${phanTram}% dân số thế giới`);
}
percentageOfWorld1('Việt Nam', 90);
percentageOfWorld1('Japan', 125);
percentageOfWorld1('Việt Nam', 336);

// Biểu thức hàm
const percentageOfWorld2 = function percentageOfWorld1(country, population) {
  const phanTram = (population / 7900 * 100).toFixed(1);
  console.log(`${country} có ${population} triệu người, chiếm ${phanTram}% dân số thế giới`);
}
percentageOfWorld2('Trung quốc', 1410);
percentageOfWorld2('Ấn độ', 1416);
percentageOfWorld2('Anh quốc', 84);

*/

/////////////////////////////////////////////////////////////////////////////////////
// Lab 4.3. Hàm mũi tên
/*
const percentageOfWorld3 = (country, population) =>{
  const phanTram = (population / 7900 * 100).toFixed(1);
  console.log(`${country} có ${population} triệu người, chiếm ${phanTram}% dân số thế giới`);
}
percentageOfWorld3('Việt Nam', 90);
percentageOfWorld3('Japan', 125);
percentageOfWorld3('Việt Nam', 336);
*/

/////////////////////////////////////////////////////////////////////////////////////////////////
// Lab 4.4. Hàm gọi hàm
/*
const percentageOfWorld1 = (country, population) => {
  function describePopulation() {
    const phanTram = (population / 7900 * 100).toFixed(1);
    return phanTram;
  }
  console.log(`'${country} has ${population} million people, which is about  ${describePopulation()}% of the world'.`);
}
percentageOfWorld1('VietNam', 90);
percentageOfWorld1('China', 1410);
percentageOfWorld1('USA', 336);
*/

///////////////////////////////////////////////////////////////////////////////////
// Lab 4.5. Giới thiệu về Array
/*
//1
const populations = [90, 336, 125, 1410];
//2
let checkpo = populations.length === 4;
console.log(checkpo);
//3
function percentageOfWorld1(country,population){
function percentageOfWorld2(){
  return (population / 7900 * 100).toFixed(1);
}
  console.log(`${country} has ${population} million people, which is about  ${percentageOfWorld2()}% of the world`);
}
const percentages = [
  {name:'vietnam',population:90},
  {name:'china',population:1410},
  {name:'USA',population:336},
  {name:'japan',population:125},
];
percentages.map(function output(thamso){
  percentageOfWorld1(thamso.name,thamso.population)
})

*/

//////////////////////////////////////////////////////////////////////////////////////
// Lab 4.6. Các phép toán cơ bản với array
/*
//1.tạo mảng
const neighbours = ['Laos', 'Sweden', 'Campuchia', 'China'];
// 2.thêm vào
neighbours.push('Utopia');

// 3.giảm đi
neighbours.pop()

console.log(neighbours);
// 4.kiểm tra có  'Germany' hay ko
const checkCountry = neighbours.includes('Germany');
if (checkCountry) {
  console.log('yes');
} else {
  console.log('Probably not a central European country :D');
}
//5. Đổi tên
const changeName = neighbours.indexOf('Sweden');
if (changeName !== -1) {
  neighbours[changeName] = 'Republic of Sweden';
  console.log(neighbours);
} else {
  console.log('không tồn tại!');
}
*/

////////////////////////////////////////////////////////////////////////////////////////////////
// Lab 4.7.1. Đội nào chiến thắng? (phần 2)
// 1.Tạo hàm mũi tên 'calcAverage' để tính trung bình của 3 điểm số.
const calcAverage = scores => {
  /*
    // cách 1 sử dụng vòng lặp for để duyệt qua mạng
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
      sum += scores[i];
    }
  */
  // cách 2: sử dụng phương thức reduce
  const tinhdiem = scores.reduce((index, current) => {
    return index + current;
  })
  // 2.Sử dụng hàm để tính trung bình của cả hai đội.
  const diemtrungbinh = (tinhdiem / scores.length).toFixed(1);
  return diemtrungbinh;
}
//3.Tạo hàm 'checkWinner'
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win!(${avgDolphins} vs.${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win!(${avgDolphins} vs.${avgKoalas})`);
  } else {
    console.log('No wins !');
  }
}
// Dữ liệu 1: 
const Dolphins1 = [44, 23, 71];
const Koalas1 = [65, 54, 49];
const avgDolphins1 = calcAverage(Dolphins1);
const avgKoalas1 = calcAverage(Koalas1);
console.log(avgDolphins1, avgKoalas1);
checkWinner(avgDolphins1, avgKoalas1);
console.log('----------------------------------');
// Dữ liệu 2:
const Dolphins2 = [85, 54, 41];
const Koalas2 = [23, 34, 27];
const avgDolphins2 = calcAverage(Dolphins2);
const avgKoalas2 = calcAverage(Koalas2);
// console.log(avgDolphins2,avgKoalas2);
checkWinner(avgDolphins2, avgKoalas2);
//////////////////////////////////////////////////////////////////////////////////////////////
// Lab 4.7.2. Xây dựng Tip calculator (phần 2)

const calcTip = a => a >= 50 && a <= 300 ? a * (15 / 100) : a * (20 / 100)

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log('tip');
console.log(tips);
console.log('total');
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(total);


