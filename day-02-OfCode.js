// Automorphic Number

// 5*5 = 25 = automorphic number
// 8 * 8 = 72 = not automorphic number
let prompt = require("prompt-sync")();
let num = Number(prompt("Enter a number : "));
let sq = num * num,
  count = 0,
  copy = num;
while (num > 0) {
  let rem = num % 10;
  count++;
  num = Math.floor(num / 10);
}

let matchNumber = sq % Math.pow(10, count) === copy;

matchNumber
  ? console.log("automorphic numebr ")
  : console.log("not automorphic number ");

// strong numebr = 145 => 1 + 24 + 120 = 145 :::: strong number

let num2 = Number(prompt("Enter a number : "));
let sum = 0,
  copy1 = num2;
while (num2 > 0) {
  let fact = 1;
  let rem = num2 % 10;
  for (let i = 1; i <= rem; i++) {
    fact *= i;
  }
  sum += fact;
  num2 = Math.floor(num2 / 10);
}
console.log(copy1 == sum ? "strong number" : "not strong number ");
