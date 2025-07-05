function simulateAsyncJS() {
  console.log("Task 1 started");
  setTimeout(() => {
    console.log("Task 1 completed");
  }, 2000);
}
function fetchDataWithCallback(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "John Doe" };
      console.log("Data fetched successfully");
      resolve(callback(data));
    }, 2000);
  });
}

function rateLimiter(fn, limit) {
  return function (...arguments) {
    let called = false;
    setTimeout(() => {
      called = true;
    }, limit);
    if (called) {
      return fn(...arguments);
    } else {
      return "rate limit exceeded";
    }
  };
}

function memoize(fn) {
  const cache = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      let result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

function shape(color) {
  this.color = color;
}

shape.prototype.getColor = function () {
  return this.color;
};

function rectangle(color, width, height) {
  shape.call(this, color);
  this.width = width;
  this.height = height;
}

rectangle.prototype = Object.create(shape.prototype);
rectangle.prototype.constructor = rectangle;
rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

let person = {
  name: "John",
  introduce: function () {
    return `Hello, my name is ${this.name}`;
  },
};

let shailesh = {
  name: "Shailesh",
  age: 30,
};

shailesh.introduce = person.introduce.bind(shailesh);
shailesh.introduce(); // "Hello, my name is Shailesh"

let hari = {
  name: "hari",
};
person.introduce.call(hari); // "Hello, my name is hari"

console.log("\n\n\n\n\n\n");
function fetchSuccess() {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("fetchSuccess called");
      resolve("success;");
    }, 2000)
  );
}

function fetchFailure() {
  return new Promise((_, reject) =>
    setTimeout(() => {
      console.log("fetchFailure called");
      reject(new Error("failure;"));
    }, 1000)
  );
}

async function handlePromises() {
  try {
    const [success, failure] = await Promise.all([
      fetchSuccess(),
      fetchFailure(),
    ]);
    console.log(success);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("All promises handled");
  }
}

handlePromises();
console.log(
  "Promises are handled asynchronously, so this will log before the promises resolve or reject."
);
