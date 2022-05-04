import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({ name: 'NAME22', age: 22 });

const formEl = document.getElementById('root')!;
const userForm = new UserForm(formEl, user);
userForm.render();

// const collection = User.buildUserCollection();

// let timer = setTimeout(() => {
//   collection.on('change', () => {
//     console.log(collection);
//   });

//   collection.fetch();
// }, 3000);

// // clearTimeout(timer);
