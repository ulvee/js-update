function filterRange(arr, minRange, maxRange) {
  let numbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= minRange && arr[i] <= maxRange) {
      numbers.push(arr[i]);
    }
  }

  return numbers;
}

let arr = [32, 64, 100, 128, 256, 512, 844, 999, 1024, 2048];
let numbersRange = filterRange(arr, 100, 999);
console.log(numbersRange);
