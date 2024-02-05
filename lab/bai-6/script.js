const dulieu1 = [17, 21, 23];
const dulieu2 = [12, 5, -5, 0, 4];
function printForecast(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`... ${arr[i]}ºC in ${i + 1}day ... `);
  }
}
console.log(printForecast(dulieu1));
console.log(printForecast(dulieu2));
