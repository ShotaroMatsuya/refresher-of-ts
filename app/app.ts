// const person: {
//   name: string;
//   age: number;
// } = {
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Showtarou',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};

// person.role.push('admin');
// person.role = [0, 'admin', 'user'];

// let favoriteActivities: any[];
// favoriteActivities = ['Sports', 1];
let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!
}
