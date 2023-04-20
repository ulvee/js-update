function calculateSubtraction(arr) {
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
  }
  let arr = [1, 2, 3, 4, 5, 6];
  calculateSubtraction(arr);