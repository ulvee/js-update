const arr = [3, 5, 8, 2, 13, 7, 16, 21, 28];

let oddNumber = 0;
let evenNumber = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    evenNumber += arr[i];
  } else {
    oddNumber += arr[i];
  }
}

let subtraction = evenNumber - oddNumber;

console.log("Total: " + subtraction);
