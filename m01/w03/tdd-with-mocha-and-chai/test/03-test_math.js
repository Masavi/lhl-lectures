const math = require('../01-math');
const assert = require('assert');
// object de-structuring -> ES6
// const { equal, notEqual } = require('assert');

describe('Testing the addNumbersInArray method from math.js', () => {
  
  it('should add [1,2,3] and return a 6', () => {
    const add_result = math.addNumbersInArray([1,2,3]);
    assert.equal(add_result, 6);
  })

  it('should add [1,2,3] and NOT return a 10', () => {
    const add_result = math.addNumbersInArray([1,2,3]);
    assert.notEqual(add_result, 10);
  })

})
