// sum the number like 123 = 6


let prompt = require('prompt-sync')()

let num = Number(prompt("Enter the number : "))

let sum = 0

while(num>0){
    let rem = num % 10 
    sum += rem 
    num = Math.floor(num/10)
}
console.log(sum);
