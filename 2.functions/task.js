// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;
  for(let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if(arr[i] > max) {
      max = arr[i];
    }
    if(arr[i] < min) {
      min = arr[i];
    }
     }
     avg = parseFloat((sum / arr.length).toFixed(2));
     return { min: min, max: max, avg: avg };
}





// Задание 2
arrOfArr = [[1, 2, 3, 4],
           [10, 20, -10, -20]];
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  
  return sum;
}

function makeWork(arrOfArr, function worker) {
  let max;
   for (let i = 0; i < arrOfArr.length; i++) {
    let arrSum = function(arrOfArr[i]);
    if (arrSum > max) {
      max = arrSum;
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  return getArrayParams(arr).max - getArrayParams(arr).min;
}
