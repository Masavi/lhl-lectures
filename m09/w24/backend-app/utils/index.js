const jwt = require('jsonwebtoken');

module.exports = {
  createToken: (userData) => {
    try {
      const payload = {
        id: userData.id,
        email: userData.email,
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
      }

      const token = jwt.sign(payload, 'MY_PRIVATE_KEY')
      // const token = jwt.sign(payload, process.env.JWT_SECRET)
      return token;
    } catch (error) {
      console.log('There was an error signing the JWT!');
      return undefined;
    }
  }
};