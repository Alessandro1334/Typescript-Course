abstract class Vehicle {
  abstract wheels: number;

  start(): void {
    console.log("Brummm");
  }
}

class Car extends Vehicle {
  wheels: number = 4;
}

class Motorcycle extends Vehicle {
  wheels: number = 2;
}

let car = new Car();
car.wheels;
car.start();

let motorcycle = new Motorcycle();
console.log(motorcycle.wheels);
motorcycle.start();