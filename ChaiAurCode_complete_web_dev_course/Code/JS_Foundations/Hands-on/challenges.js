function filterNumbers(arr) {
  return arr.filter((item) => typeof item === "number" && !isNaN(item));
  //   if (!Array.isArray(arr)) {
  //     throw new TypeError("Input must be an array");
  //   }
  //   let result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (typeof arr[i] === "number" && !isNaN(arr[i])) {
  //       result.push(arr[i]);
  //     }
  //   }
  //   return result;
}

function flattenArray(arr) {
  if (typeof arr === "Array") {
    return arr.flat(Infinity);
  }
  throw new TypeError("Input must be an array");
}

function sumOfN(n) {
  if (typeof n !== "number") {
    throw new TypeError("Input must be a number");
  }
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function printMultiplicationTable(n) {
  if (typeof n !== "number") {
    throw new TypeError("Input must be a number");
  }
  let result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(`${n} * ${i} = ${n * i}`);
  }
  return result;
}

function countVowels(str) {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  const vowels = "aeiou";
  str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

function squareNumbers(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      throw new TypeError("All elements in the array must be numbers");
    }
  }
  return arr.map((num) => {
    if (typeof num === "number") {
      return num * num;
    }
  });
}

function filterEvenNumbers(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }

  return arr.filter((num) => typeof num === "number" && num % 2 === 0);
}
function sumPositiveNumbers(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }

  return arr
    .filter((num) => typeof num === "number" && num >= 0)
    .reduce((acc, num) => acc + num, 0);
}

function getNames(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }

  // return arr.filter((item) => typeof item === "string").map((name) => name.trim());
  arr.map((item) => {
    return item.name;
  });
}

function getLargestName(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }
  arr.reduce((longestName, currentName) => {
    if (typeof item !== "string") {
      throw new TypeError("All elements in the array must be strings");
    }
    if (currentName.length > longestName.length) {
      return currentName;
    }
  }, "");
}

const person = {
  name: "John",
  age: 30,
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};
// function introduce(name, age) {
//   function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   if (typeof name !== "string" || typeof age !== "number") {
//     throw new TypeError("Invalid input types");
//   }
//   return `Hello, my name is ${name} and I am ${age} years old.`;
// }

function outer() {
  function inner() {
    return "inner function called";
    // console.log("inside inner function");
  }
  return inner();
}
