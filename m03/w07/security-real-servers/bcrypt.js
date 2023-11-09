const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;
const PASSWORD = 'CourageTheCowardlyDog';
const ANOTHER_PASSWORD = '123';

console.log('Original password:', PASSWORD);

const salt = bcrypt.genSaltSync(SALT_ROUNDS);
console.log('Salt:', salt);

const hash = bcrypt.hashSync(PASSWORD, salt);
console.log('Hashed password:', hash);

const isMatch = bcrypt.compareSync(ANOTHER_PASSWORD, hash);
console.log('isMatch?', isMatch);