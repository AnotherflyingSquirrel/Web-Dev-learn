function Person(name, age) {
  this.name = "John Doe";
  this.age = 30;
}
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};
let shailesh = new Person("Shailesh", 25);
shailesh.greet(); // Hello, my name is John Doe and I am 30 years old.
