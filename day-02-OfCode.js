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
