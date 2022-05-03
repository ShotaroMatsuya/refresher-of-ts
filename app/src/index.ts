import { User } from './models/User';

const collection = User.buildUserCollection();

let timer = setTimeout(() => {
  collection.on('change', () => {
    console.log(collection);
  });

  collection.fetch();
}, 3000);

// clearTimeout(timer);
