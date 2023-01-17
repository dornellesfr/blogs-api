const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'secretJWT';
const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '35d',
};

const jwtToken = (email) => {
  const token = jwt.sign({ email }, SECRET, JWT_CONFIG);
  return token;
};

module.exports = {
  jwtToken,
};
