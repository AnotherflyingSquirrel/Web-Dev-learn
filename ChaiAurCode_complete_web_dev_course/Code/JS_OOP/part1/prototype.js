let computer = {
  // brand: "Apple",
  cpuThreads: 8,
  ram: 16,
};
let lenovoLaptop = {
  brand: "Lenovo",
  screen: "15.6 inch",
  __proto__: computer, // setting the prototype to computer object
};
console.log(JSON.stringify(lenovoLaptop.__proto__)); // {}
