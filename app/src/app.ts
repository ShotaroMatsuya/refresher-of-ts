const userName = 'Show';
// userName = 'ShowTarou';
let age = 30;

age = 29;
var result;

function add(a: number, b: number) {
  result = a + b;
  return result;
}

// this works
// if (age > 20) {
//   var isOld = true;
// }

// this not work
// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);
