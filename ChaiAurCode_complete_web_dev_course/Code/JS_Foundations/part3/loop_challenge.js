let x = 1;
let sum = 0;
while (x <= 5) {
  sum += x;
  x++;
}
// console.log(`The sum of numbers from 1 to 5 is: ${sum}`);

x = 6;
let numArray = [];
while (--x != 0) {
  numArray.push(x);
}
// console.log(`The array of numbers from 5 to 1 is: ${numArray}`);

let tea = "";
let teaCollection = [];
// do {
//   tea = prompt("Enter a tea flavor (or 'stop' to finish):");
//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop");

x = 1;
sum = 0;
do {
  sum += x;
  x++;
} while (x <= 3);
// console.log(`The sum of numbers from 1 to 3 is: ${sum}`);

let arry = [1, 2, 3, 4, 5, 6];
let multipliedNumbers = [];
for (let i = 0; i < arry.length; i++) {
  multipliedNumbers.push(arry[i] * 2);
}
const cityBucketList = [
  "Cape Town",
  "Vancouver",
  "London",
  "Kyoto",
  //   "Tokyo",
  "Paris",
];
let cityList = [];
for (let i = 0; i < cityBucketList.length; i++) {
  cityList.push(cityBucketList[i]);
}
// console.log(`The list of cities is: ${cityList}`);

let teaArray = [
//   "10words required",
  "green tea",
  "black tea",
  "chai",
  "oolong tea",
];
let teaArray2 = [];
for (
  let i = 0;
  teaArray[i].toLowerCase() != "chai" && i < teaArray.length;
  i++
) {
  teaArray2.push(teaArray[i]);
}
// console.log(`The tea flavors before chai are: ${teaArray2}`);
let teaArray3 = [];
teaArray.forEach((tea) => {
  if (tea === "chai") {
    console.log("found chai, stopping the loop.");
    return;
  }
  console.log(`Adding tea flavor: ${tea}`);
  teaArray3.push(tea);
  return 2;
});
// console.log(teaArray3);
let teaArray4 = [];
for (const tea of teaArray) {
  if (tea.length >= 10) {
    console.log(`Skipping long tea flavor: ${tea}`);
    break;
  }
  teaArray4.push(tea);
}
console.log(teaArray4);
