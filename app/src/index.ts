import { User } from './models/User';

const user = new User({ id: 1, name: 'newer name', age: 0 });

let timer = setTimeout(() => {
  user.on('save', () => {
    console.log(user);
  });

  user.save();
}, 3000);

clearTimeout(timer);
