import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
  encoding: 'utf8',
});

console.log(matches);
