function outer() {
  let count = 4;
  return function () {
    count++;
    return count;
  };
}
let inner = outer();

console.log(inner());
outer.count = 4;
inner.count = 3;
console.log(inner());
outer.count = 4;
inner.count = 3;
console.log(inner());
// console.log(outer
