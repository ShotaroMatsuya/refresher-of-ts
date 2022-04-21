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

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

console.log(extractAndConvert({ name: 'Max' }, 'name'));

// primitive typeでは有用(arrayやobjでは使わないほうが良い)
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('User1');
textStorage.addItem('User2');
textStorage.removeItem('User1');
console.log(textStorage.getItems());

// const objStorage = new DataStorage<object>();
// const user1Obj = { name: 'user1' };
// objStorage.addItem(user1Obj);
// objStorage.addItem({ name: 'user2' });

// objStorage.removeItem(user1Obj); // this obj is technically a brand new object in a memory and has a different address
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['User1', 'user2'];
names.push('user3');
names.pop();
