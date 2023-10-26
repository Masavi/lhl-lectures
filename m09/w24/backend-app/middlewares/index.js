const jwt = require('jsonwebtoken');

module.exports = {
  verifyToken: (req, res, next) => {
    // HEADERS SENT FROM THE CLIENT
    // "Authorization" "Bearer token"
    try {
      if (!req.headers.authorization) res.status(403).json({ error: 'Authorization header must be provided!' });
      const { authorization } = req.headers;
      // Authorization should contain the string "Bearer xxx.yyy.zzz"
      const token = authorization.split(" ")[1];
      const verifiedToken = jwt.verify(token, 'MY_PRIVATE_KEY');
      // const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
      req.token = verifiedToken;
      next();
    } catch (error) {
      res.status(403).json({ message: 'token verification failed :(' })
    }
  }
};