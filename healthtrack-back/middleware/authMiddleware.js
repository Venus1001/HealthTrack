const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).send({ message: 'No token, authorization denied' });
  }
  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    console.log(`Decoded token -> ${JSON.stringify(decoded)}`);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;