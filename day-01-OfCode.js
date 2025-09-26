// day - 1
// reverse number like _=> 1234 :4321
let prompt = require("prompt-sync")();
let num = Number(prompt("enter a number : "));

let revNum = 0;
while (num > 0) {
  let rem = num % 10;
  revNum = revNum * 10 + rem;
  num = Math.floor(num / 10);
}
console.log(revNum);
