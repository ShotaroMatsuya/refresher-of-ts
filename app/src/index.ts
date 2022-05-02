import { User } from './models/User';

const user = User.buildUser({ id: 1, name: 'test user', age: 23 });

let timer = setTimeout(() => {
  user.on('save', () => {
    console.log(user);
  });

  user.save();
}, 3000);

clearTimeout(timer);
