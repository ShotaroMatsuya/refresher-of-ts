import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildUser({ name: 'NAME23', age: 23 });

const root = document.getElementById('root')!;
const userEdit = new UserEdit(root, user);
userEdit.render();
console.log(userEdit);

// const collection = User.buildUserCollection();

// let timer = setTimeout(() => {
//   collection.on('change', () => {
//     console.log(collection);
//   });

//   collection.fetch();
// }, 3000);

// // clearTimeout(timer);
