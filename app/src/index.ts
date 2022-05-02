import { User } from './models/User';

const user = new User({ id: 1 });

let timer = setTimeout(() => {
  user.on('change', () => {
    console.log(user);
  });

  user.fetch();
}, 3000);

// clearTimeout(timer);
