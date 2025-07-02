let teaFlavors = ["green tea", "black tea", "oolong tea"];
let teaFl = new Array("green tea", "black tea", "oolong tea");
const firstTea = teaFlavors[0];

let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";

const teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
teaOrders[2] = "matcha latte";
const lastOrder = teaOrders.push("earl grey");
console.log(`Last order: ${teaOrders[2]}`);

let europeanCountries = ["France", "Germany", "Italy"];
let asianCountries = ["Japan", "China", "India"];
let allCountries = europeanCountries.concat(asianCountries);
console.log(allCountries);

let cityBucketList = [
  "Cape Town",
  "Vancouver",
  "London",
  "Kyoto",
  //   "Tokyo",
  "Paris",
];
// const predicateLondon((x) => x === "London");
let isLondonInList = cityBucketList.findIndex((x) => x === "London");
console.log(isLondonInList);
let isTokyoInList = cityBucketList.includes("Tokyo");
console.log(isTokyoInList);
