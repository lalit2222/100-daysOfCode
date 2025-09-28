// rotate the array by n times [1,2,3,4,5] = [3,4,5,1,2]

let arr = [1, 2, 3, 4, 5];
let n = 2

for (let j = 1; j <= n; j++) {
  let firstVal = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = firstVal;
}

console.log(arr);
