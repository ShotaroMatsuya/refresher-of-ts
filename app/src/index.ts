import { UserForm } from './views/UserForm';
// import { User } from './models/User';

const formEl = document.getElementById('root')! as HTMLFormElement;
const userForm = new UserForm(formEl);
userForm.render();

// const collection = User.buildUserCollection();

// let timer = setTimeout(() => {
//   collection.on('change', () => {
//     console.log(collection);
//   });

//   collection.fetch();
// }, 3000);

// // clearTimeout(timer);
