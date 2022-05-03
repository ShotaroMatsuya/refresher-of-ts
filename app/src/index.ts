import { Collection } from './models/Collection';

const collection = new Collection('http://localhost:3030/users');

let timer = setTimeout(() => {
  collection.on('change', () => {
    console.log(collection);
  });

  collection.fetch();
}, 3000);

// clearTimeout(timer);
