'use strict';
let arr = [];
let discriminant;

function solveEquation(a, b, c) {
  
  discriminant = b**2-4*a*c;
  if(discriminant === 0) {
    arr[0] = (-b/(2*a));
    }
  else {
    arr[0] = (-b + Math.sqrt(discriminant))/(2*a);
    arr[1] = (-b - Math.sqrt(discriminant) )/(2*a);
    } 
  return arr; // array

}


solveEquation(2, 7, 4);
console.log('arr:' + discriminant);







// function calculateTotalMortgage(percent, contribution, amount, date) {
//   let totalAmount;
// 

//   // код для задачи №2 писать здесь

//   return totalAmount;
// }
