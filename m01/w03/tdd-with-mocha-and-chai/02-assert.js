// this is my MATH LIBRARY
const math = require('./01-math');
const assert = require('assert');

// This assertion fails...
// assert.equal(2, 3);

// This is not so readable and easy to understand
const add_result = math.addNumbersInArray([1,2,3,4]);
assert.equal(add_result, 10);
assert.notEqual(add_result, 20);

// assert.strictEqual(1, '1');
