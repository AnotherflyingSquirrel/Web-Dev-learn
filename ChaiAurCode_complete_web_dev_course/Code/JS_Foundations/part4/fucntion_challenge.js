function makeTea(typeOfTea) {
  if (typeof typeOfTea === "string") {
    return `Making ${typeOfTea}`;
  } else {
    return "cant make that";
  }
}
teaOrder = makeTea("black tea");
// console.log(makeTea("green tea"));

// function teaOrderConfirmation(teaType) {
//   return `Your order for ${teaType} has been confirmed.`;
// }
function orderTea(teaType) {
  function teaOrderConfirmed(teaType) {
    return `Your order for ${teaType} has been confirmed.`;
  }
  if (typeof teaType === "string") {
    return teaOrderConfirmed(teaType);
  }
}
console.log(orderTea("green tea"));
// console.log(teaOrderConfirmed("green tea"));

// console;

const calculateTotal = (price, quantity) => {
  return price * quantity;
};

let totalCost = calculateTotal(5.99, 3);
// console.log(`Total cost: $${totalCost.toFixed(2)}`);

// higher order functions/first class functions
function sayHello(name) {
  return `Hello, ${name}!`;
}

function greetUser(name, greetingFunction) {
  return greetingFunction(name);
}

let greeting = greetUser("Alice", sayHello);
console.log(greeting);

function createTeaMaker(isAllowed) {
  if (!isAllowed) {
    return function makeTea(typeOfTea) {
      return "You are not allowed to make tea.";
    };
  }
  let score = 100;
  return function makeTea(typeOfTea) {
    if (typeof typeOfTea === "string") {
      return `Making ${typeOfTea} ${score} points`;
    } else {
      return "Can't make that";
    }
  };
}
let teaMaker = createTeaMaker(true);
console.log(teaMaker);
// console.log(JSON.stringify(teaMaker)); // This will not affect the closure's score
// for (const element of teaMaker) {
//     // if (Object.hasOwnProperty.call(teaMaker, key)) {
//         console.log(`${element}: `);

//     // }
// }
teaMaker.score = 500;
console.log(toString(teaMaker.score));
// console.table(Object.getPrototypeOf(teaMaker)); // This will not affect the closure's score
createTeaMaker.score = 200; // This won't affect the closure's score
// console.log(teaMaker("black tea"));
console.log(createTeaMaker.score);
