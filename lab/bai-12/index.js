// Lab 12.1: Phân loại thú cưng
function checkDogs(dogJulia, dogKate) {
  // tạo bản sao của arr Julia
  const newDogJulia = dogJulia.slice();
  // xóa phần tử đầu và cuối của dữ liệu newDogJulia
  newDogJulia.pop();
  newDogJulia.shift();
  // tạo arr mới có cả 2 dữ liệu
  const allDogs = newDogJulia.concat(dogKate);

  allDogs.forEach((ageDog, index) => {
    const age = ageDog >= 3 ? `an adult, and is ${ageDog} years old` : 'still a puppy';
    console.log(`Dog number ${index + 1} is ${age}`);
  })
}
// Dữ liệu 1
console.log('Dữ liệu 1:');
julia1 = [3, 5, 2, 12, 7];
kate1 = [4, 1, 15, 8, 3];
checkDogs(julia1, kate1)
console.log('-----------------------------------------');
console.log('Dữ liệu 2');
julia2 = [9, 16, 6, 8, 3];
kate2 = [10, 5, 6, 1, 4];
checkDogs(julia2, kate2)
// ==========================================================================
// Lab 12.2: Chuyển đổi tuổi thú cưng
/*
function calcAverageHumanAge(age) {
  // tính tuổi của chó theo năm tuổi người
  const humanAge = age.map(age => age <= 2 ? age * 2 : 16 + age * 4);
  // lấy chó 18 tuổi trở lên
  const chotruongthanh = humanAge.filter(age => age >= 18);
  // tính tuổi trung bình của các chó trưởng thành
  const trungbinhcong = chotruongthanh.reduce((sobandau, tuoicho) => sobandau + tuoicho, 0);
  const tinhtrungbinh = trungbinhcong / chotruongthanh.length;
  console.log(Math.round(tinhtrungbinh));
}
console.log('--------------------------------------------');
console.log('dulieu1');
dulieu1 = [5, 2, 4, 1, 15, 8, 3];
calcAverageHumanAge(dulieu1);
console.log('--------------------------------------------');
console.log('dulieu2');
dulieu2 = [16, 6, 10, 5, 6, 1, 4];
calcAverageHumanAge(dulieu2);
*/
// Lab 12.3: Sử dụng Arrow Function

// Lab 12.3: Sử dụng Arrow Function

function calcAverageHumanAge(age) {
  const tinhtoan = age
    .map(age => age <= 2 ? age * 2 : 16 + age * 4)
    .filter(age => age >= 18)
    .reduce((sum, age, _, {length}) => sum + age / length, 0);
  console.log(Math.round(tinhtoan));
}
console.log('--------------------------------------------');
console.log('dulieu1');
dulieu1 = [5, 2, 4, 1, 15, 8, 3];
calcAverageHumanAge(dulieu1);
console.log('--------------------------------------------');
console.log('dulieu2');
dulieu2 = [16, 6, 10, 5, 6, 1, 4];
calcAverageHumanAge(dulieu2);
