import { User } from './models/User';

const user = new User({ id: 1 });

let timer = setTimeout(() => {
  user.set({ name: 'NEW NAME', age: 9999 });
  user.save();
}, 2000);

clearTimeout(timer);
