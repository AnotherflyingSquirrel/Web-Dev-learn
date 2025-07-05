export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function add(a, b) {
  return a + b;
}

export default function subtract(a, b) {
  return a - b;
}
