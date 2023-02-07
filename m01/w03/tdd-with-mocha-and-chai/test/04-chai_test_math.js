const math = require('../01-math');
const expect = require('chai').expect;

describe('Testing the addNumbersInArray method from math.js', () => {
  
  it('should add [1,2,3] and return a 6', () => {
    const add_result = math.addNumbersInArray([1,2,3]);
    expect(add_result).to.be.a('number');
    expect(add_result).to.equal(6);
  })

  it('should add [1,2,3] and NOT return a 10', () => {
    const add_result = math.addNumbersInArray([1,2,3]);
    expect(add_result).to.be.a('number');
    expect(add_result).to.not.equal(10);
  })

})



describe('Testing the addTwoNumbers method from math.js', () => {
  
  it('should add 3,6 and return a 9', () => {
    const add_result = math.addTwoNumbers(3,6);
    expect(add_result).to.be.a('number');
    expect(add_result).to.equal(9);
  })


})