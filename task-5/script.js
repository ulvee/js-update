let arr1 = [4, 5, 9, 6, 11, 2, 17, 14, 23, 31, 48];
let arr2 = [7, 4, 2, 30, 48, 54, 9, 14];

for (let i = 0; i < arr1.length; i++) {
  let n = false;
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      n = true;
      break;
    }
  }
  if (!n) {
    console.log(arr1[i]);
  }
}
