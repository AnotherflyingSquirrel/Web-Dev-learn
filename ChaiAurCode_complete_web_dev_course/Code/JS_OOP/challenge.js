class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  static isVehicle(obj) {
    return obj instanceof Vehicle;
  }

  getDetails() {
    return `Make: ${this.make} Model: ${this.model}`;
  }
}
class Car extends Vehicle {
  constructor(make, model) {
    super(make, model);
  }
  startEngine() {
    return "Engine started";
  }
}
Vehicle.prototype.move = function () {
  return "The Vehicle is moving";
};

// Car.prototype.move = function () {
//   return "The car is driving";
// };

let myCar = new Car("Toyota", "Corolla");
// console.log(myCar.getDetails()); // Make: Toyota Model: Corolla
// console.log(myCar.startEngine()); // Engine started
// console.log(myCar.move()); // The car is driving
// console.log(Object.getPrototypeOf(Vehicle).name); // true

let myVehicle = new Car("Honda", "Civic");
// console.log(Vehicle.isVehicle(myVehicle)); // Make: Honda Model: Civic

class BankAccount {
  #_balance = 0;

  constructor(accountNumber) {
    this.accountNumber = accountNumber;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this.#_balance += amount;
    return `Deposited ${amount}. New _balance#_balance: ${this.#_balance}`;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive");
    }
    if (amount > this.#_balance) {
      throw new Error("Insufficient funds");
    }
    this.#_balance -= amount;
    return `Withdrew ${amount}. New _balance#_balance: ${this.#_balance}`;
  }

  get balance() {
    return `Current _balance#_balance: ${this.#_balance}`;
  }
}

class Shape {
  //   area = 0;
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    // super();
    this.radius = radius;
    this.type = "Circle";
  }

  area() {
    // return `Area: ${this.area}`;
    return Math.PI * radius * radius;
  }
}
class Rectangle extends Shape {
  constructor(length, width) {
    // super();
    this.length = length;
    this.width = width;
    this.type = "Rectangle";
    // this.area = length * width;
  }

  area() {
    return this.length * this.width;
  }
}
