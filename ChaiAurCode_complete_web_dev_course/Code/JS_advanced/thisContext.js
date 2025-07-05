const Person = {
  name: "John Doe",
  age: 30,
  greet: function (goodbye) {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.\n${goodbye}\n`
    );
  },
};

let shailesh = {
  name: "Shailesh",
  age: 25,
};

// Using call to invoke the greet method with shailesh's context
Person.greet.call(shailesh,"sayonara"); // Hello, my name is Shailesh and I am 25 years old.


// Using apply to invoke the greet method with shailesh's context
Person.greet.apply(shailesh,["seeya"]); // Hello, my name is Shailesh and I am 25 years old.
// Using bind to create a new function with shailesh's context
let shaileshGreet = Person.greet.bind(shailesh,["cha"]); // Hello, my name is Shailesh and I am 25 years old.
shaileshGreet(); // Hello, my name is Shailesh and I am 25 years old.

