function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { getRandomInt, add, subtract };
