// Lab 13.1: Tạo Object
/*
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
  //  tăng tốc độ lên 10
  this.accelerate = function () {
    this.speed += 10;
    console.log(`tốc độ hiện tại là ${this.speed} km/h`);
  }
  // giảm tốc độ
  this.brake=function(){
    this.speed -=5;
    console.log(`tốc độ hiện tại là ${this.speed} km/h`);
  }
}
const car1 = new Car('BWM', 120)
console.log(`xe ${car1.make} có tốc độ là ${car1.speed} km/h`);
car1.accelerate();
car1.brake();
console.log('---------------------------');
const car2 = new Car('Mercedes', 95)
console.log(`xe ${car2.make} có tốc độ là ${car2.speed} km/h`);
car2.accelerate();
car2.brake();
*/
// Lab 13.2: Sử dụng ES6 Class
/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  // phương thức accelerate
  accelerate() {
    this.speed += 10;
    console.log(`tốc độ sau khi tăng là ${this.speed} km/h`);
  }
  // phương thức brake
  brake() {
    this.speed -= 5;
    console.log(`tốc độ sau khi giảm là ${this.speed} km/h`);
  }
  // chuyển qa mile
  get speedUS() {
    const mile= this.speed / 1.6;
    console.log(`tốc độ của ${this.make} là ${mile} mile/h `);
  }
  // chuyển lại km
  set speedUS(chuyendoi) {
    this.speed = chuyendoi * 1.6;
  }
}
const car1 = new CarCl('BWM', 120)
console.log(`xe ${car1.make} có tốc độ là ${car1.speed} km/h`);
car1.accelerate();
car1.brake();
car1.speedUS;
console.log('---------------------------');
const car2 = new CarCl('Mercedes', 95)
console.log(`xe ${car2.make} có tốc độ là ${car2.speed} km/h`);
car2.accelerate();
car2.brake();
car2.speedUS;
*/
// Lab 13.3: Tính kế thừa

// Định nghĩa lớp Car

class Car {
  constructor(brand, speed) {
      this.brand = brand;
      this.speed = speed;
  }

  accelerate() {
      this.speed += 20;
      console.log(`${this.brand} going at ${this.speed} km/h`);
  }

  brake() {
      this.speed -= 20;
      console.log(`${this.brand} slowing down to ${this.speed} km/h`);
  }
}

// Lớp con EV kế thừa từ lớp Car
class EV extends Car {
  constructor(brand, speed, charge) {
      super(brand, speed);
      this.charge = charge;
  }

  chargeBattery(chargeTo) {
      this.charge = chargeTo;
      console.log(`Charging ${this.brand}'s battery to ${this.charge}%`);
  }

  accelerate() {
      super.accelerate();
      this.charge -= 1;
      console.log(`with a charge of ${this.charge}%`);
  }
}

// Tạo đối tượng electric car
const electricCar = new EV("Tesla", 120, 23);

// Thử nghiệm phương thức accelerate
electricCar.accelerate();

// Thử nghiệm phương thức brake
electricCar.brake();

// Thử nghiệm phương thức chargeBattery
electricCar.chargeBattery(90);

// ===================================================================================================
//Lab 13.4: Tính kế thừa sử dụng ES6

// Định nghĩa lớp CarCl
/*
class CarCl {
  constructor(brand, speed) {
      this.brand = brand;
      this.speed = speed;
  }

  accelerate() {
      this.speed += 20;
      console.log(`${this.brand} going at ${this.speed} km/h`);
      return this;
  }

  brake() {
      this.speed -= 20;
      console.log(`${this.brand} slowing down to ${this.speed} km/h`);
      return this;
  }
}

// Lớp con EVCI kế thừa từ lớp CarCl

class EVCI extends CarCl {
  #charge; // Thuộc tính private

  constructor(brand, speed, charge) {
      super(brand, speed);
      this.#charge = charge;
  }

  accelerate() {
      super.accelerate();
      console.log(`with a charge of ${this.#charge}%`);
      return this;
  }

  chargeBattery(chargeTo) {
      this.#charge = chargeTo;
      console.log(`Charging ${this.brand}'s battery to ${this.#charge}%`);
      return this;
  }
}

// Tạo đối tượng EVCI
const electricCar = new EVCI("Rivian", 120, 23);

// Thử nghiệm chaining
electricCar.accelerate().brake().chargeBattery(90).accelerate();
*/