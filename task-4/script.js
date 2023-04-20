function reverseArray(arr) {
  let reverseArr = [];
  
  for (let i = arr.length - 1; i >= 0; i--) {
  reverseArr.push(arr[i]);
  }
  
  return reverseArr;
  }
  
  let myArr = [5, 10, 15, 20, 25, 30];
  let reverseArr = reverseArray(myArr);
  console.log(reverseArr);