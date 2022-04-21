// const names: Array<string> = ['User1', 'User2'];
// // names[0].split(' ');

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then(data => {
//   // data.split(' ');
// });

// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

// use Generic types
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: 'Max' }, { age: 30 }));
const mergedObj = merge({ name: 'Max', hobbies: ['sports'] }, { age: 30 });
// console.log(mergedObj.name); //Property 'name' does not exist on type 'object'.
console.log(mergedObj.age);
