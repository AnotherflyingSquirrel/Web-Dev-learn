function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  return "hello";
};

let shailesh = new Person("Shailesh", 25);

let yugansh = new Person("Yugansh", 25, "Developer");
console.log(shailesh); // Person { name: 'Shailesh', age: 25 }
console.log(yugansh.__proto__.__proto__); // Person { name: 'Yugansh', age: 25 }
// console.log(shailesh instanceof Person); // true
console.log(yugansh.sayHello()); // true

function Computer(brand, cpuThreads, ram) {
  if (!new.target) {
    throw new Error("Computer constructor must be called with 'new'");
  }
  this.brand = brand;
  this.cpuThreads = cpuThreads;
  this.ram = ram;
}
Computer.prototype.getSpecs = function () {
  return `Brand: ${this.brand}, CPU Threads: ${this.cpuThreads}, RAM: ${this.ram}GB`;
};
let macbook = new Computer("Apple", 8, 16);
console.log(macbook.getSpecs()); // Brand: Apple, CPU Threads: 8, RAM: 16GB
let lenovoLaptop = Computer("Lenovo", 8, 16);

console.log(lenovoLaptop.getSpecs()); // Brand: Lenovo, CPU Threads: 8, RAM: 16GB
