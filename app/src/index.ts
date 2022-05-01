import { User } from './models/User';

const user = new User({ id: 1 });

let timer = setTimeout(() => {
  user.events.on('change', () => {
    console.log('change!');
  });
  user.events.trigger('change');
}, 3000);

// clearTimeout(timer);
