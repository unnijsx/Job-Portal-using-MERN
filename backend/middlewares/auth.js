const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token.split(' ')[1], SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate token' });
    }
    req.user = decoded; // You can access user role, id etc. from req.user
    next();
  });
};

module.exports = verifyToken;
