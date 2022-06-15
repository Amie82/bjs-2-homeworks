'use strict';
let arr = [];
let finArr = [];
let a = 1;
let b = 5;
let c = 2;
function solveEquation(a, b, c) {
  
  arr = b**2-4*a*c;
  
// код для задачи
  return arr; // array
}


arr = solveEquation(a, b, c);
console.log('arr:' + arr);


if(arr < 0) {
   console.log('Корней нет, пустой массив:' + arr);
}

else if(arr === 0) {
  finArr[0] = (-b/(2*a));
console.log('Корень один: ' + finArr);
}
else {
  finArr[0] = [(-b + Math.sqrt(arr))/(2*a)];
  finArr[1] = [(-b - Math.sqrt(arr) )/(2*a)];
console.log('Больше нуля: ' + finArr);
}



// function calculateTotalMortgage(percent, contribution, amount, date) {
//   let totalAmount;
// 

//   // код для задачи №2 писать здесь

//   return totalAmount;
// }
