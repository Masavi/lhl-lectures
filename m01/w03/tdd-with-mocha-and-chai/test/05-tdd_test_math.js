const math = require('../01-math');
const expect = require('chai').expect;

describe('Testing the isOdd method from math.js', () => {
  it('should return false when providing the number 2', () => {
    const result = math.isOdd(2);
    expect(result).to.be.a('boolean');
    expect(result).to.equal(false);
  })

  it('should return true when prividing the number 3', () => {
    const result = math.isOdd(3);
    expect(result).to.be.a('boolean');
    expect(result).to.equal(true);
  })

  it('should return an error when prividing something that isnt a number', () => {
    const result = math.isOdd('dog');
    expect(result).to.be.a('string');
    expect(result).to.equal('this is an error :(');
  })
})