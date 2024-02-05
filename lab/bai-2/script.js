// Lab 2.1. Các kiểu dữ liệu
/*
let isIsland = false;
let country = 'Việt Nam';

let population = 90;
let language;

console.log(isIsland);
console.log(country);
console.log(language);
console.log(population);
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

// Lab 2.2. Let, const và var
/*
const isIsland = false;
const country = 'Vietnamese;

const population = 90;
const language = 'Vietnamese';
*/


///////////////////////////////////////////////////////////////////////////////////////////////////
// Lab 2.3. Các toán tử cơ bản
/*
//1
const isIsland = 'không phải đảo';
const country = 'Vietnamese';

const population = 90;
const moi_mien = population / 2;
console.log( `mỗi miền có ${moi_mien} triệu người`);
//2
const tang_gia_tri = population + 1;

console.log(`có thêm 1 triệu người người vào thành ${tang_gia_tri} triệu người`);
const language = 'Vietnamese';

const phan_lan_population = 6;

if (population > phan_lan_population) {
  console.log('lớn hơn 6 triệu');
} else {
  console.log('ít hơn 6 triệu');
}
//3
const dan_so_trung_binh = 33;
if (population > dan_so_trung_binh) {
  console.log('nhiều hơn trung bình');
} else {
  console.log('ít hơn trung bình');
}
//4
const description = country + ' ' + 'and its' + ' ' + population + ' ' + 'million people speak' + ' ' + language;
console.log(description);

// Lab 2.4. String và Template Literal 
const description1 = `${country} and its ${population} million people speak ${language}`
console.log(description1);
*/

/////////////////////////////////////////////////////////////////////////
// Lab 2.5. Đưa ra quyết định: Câu lệnh if/else

let population = 90;
// let population = 13;
// let population = 130;

let country = 'Việt Nam';
if (population > 33) {
  console.log(`${country}'s population is above average`);
}else{
  console.log(`${country}'s population is ${33 - population}  million below average`);
}





////////////////////////////////////////////////////////////////////////////
// Lab 2.6.1. So sánh chỉ số BMI (phần 1)

// dữ liệu 1
let markCao = 1.69;
let markNang = 78;

let johnCao = 1.95;
let johnNang = 92;

// dữ liệu 2
// let markCao = 1.88;
// let markNang = 95;

// let johnCao = 1.76;
// let johnNang = 85;

let markHigherBMI = (markNang / (markCao * markCao)).toFixed(2);
let johnHigherBMI = (johnNang / (johnCao * johnCao)).toFixed(2);

if (markHigherBMI > johnHigherBMI) {
  console.log(true);
} else {
  console.log(false);
}
// Lab 2.6.2. So sánh chỉ số BMI (phần 2)
if (markHigherBMI > johnHigherBMI) {
  console.log(`Mark's BMI (${markHigherBMI}) is higher than John's (${johnHigherBMI})!`);
} else {
  console.log(`John's (${johnHigherBMI}) BMI is higher than Mark's (${markHigherBMI})!`);
}
