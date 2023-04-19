let arr = [32, 64, 100, 128, 256, 512, 844, 999, 1024, 2048];
let numbers = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 100 && arr[i] <= 999) {
    numbers.push(arr[i]);
  }
}

console.log(numbers);
