///////array
const cars = ["Toyota", "Kubota", "Mazda"];
const planes = [];
planes[4] = "F16";
planes[1] = "Boing 747";
console.log(cars);
console.log(planes);
const cities = new Array("Buriram", 3100);
console.log(cities[1]);

/// Array Method
let car = cars.pop();
console.log(car);
cars.push("Honda");
console.log(cars);
cars.shift();
console.log(cars);
cars.unshift("Tata");
console.log(cars);

const jpCars = cars.slice(1, 3);
console.log(jpCars);
cars.splice(1, 1, "Subaru", "Lexus");
console.log(cars);

const mixArr = cars.concat(planes);
console.log(mixArr);
const mixString = mixArr.toString();
console.log(mixString);

for (let value of mixArr) {
  console.log(value);
}

console.log(mixArr.length);
for (let index of mixArr.keys()) {
  console.log(index);
}

let text = "";
mixArr.forEach(conString);
console.log(text);

function conString(value, index, array) {
  text += value + ":";
}

const numbs = [10, 20, 15, 5, 2];
const numbs2 = numbs.map(multi2);
console.log(numbs2);

function multi2(value, index, array) {
  return value * 3;
}

const over15 = numbs2.filter(over15fn);
console.log(over15);

function over15fn(value) {
  return value > 15;
}

let sum = numbs.reduce(addNumbs);
console.log(sum);

function addNumbs(total, value) {
  return total + value;
}

//check every value in array => true / false
let over10 = numbs.every(over10fn);
console.log(over10);

function over10fn(value) {
  return value > 10;
}

let someOver10 = numbs.some(over10fn);
console.log(someOver10);

let first = numbs.find(over10fn);
console.log(first);

let firstIndex = numbs.findIndex(over10fn);
console.log(firstIndex);

const alphabet = "ABCDEF";
let arrAlph = Array.from(alphabet);
console.log(arrAlph);
