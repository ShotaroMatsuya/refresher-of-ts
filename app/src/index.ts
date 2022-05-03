import { User, UserProps } from './models/User';
import { Collection } from './models/Collection';

const collection = new Collection<User, UserProps>(
  'http://localhost:3030/users',
  (json: UserProps) => User.buildUser(json)
);

let timer = setTimeout(() => {
  collection.on('change', () => {
    console.log(collection);
  });

  collection.fetch();
}, 3000);

// clearTimeout(timer);
