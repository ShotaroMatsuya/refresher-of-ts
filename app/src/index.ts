import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({ name: 'NAME', age: 20 });

const formEl = document.getElementById('root')! as HTMLFormElement;
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
