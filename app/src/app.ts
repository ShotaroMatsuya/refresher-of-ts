const userName = 'Show';
// userName = 'ShowTarou';
let age = 30;

age = 29;
var result;

// function add(a: number, b: number) {
//   result = a + b;
//   return result;
// }

// this works
// if (age > 20) {
//   var isOld = true;
// }

// this not work
// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

const add = (a: number, b: number = 1) => a + b;
console.log(add(2, 5));

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => console.log(event));
}

printOutput(add(5));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];

activeHobbies.push(...hobbies);

const person = {
  name: 'Show',
  age: 30,
};

const copiedPerson = { ...person };
