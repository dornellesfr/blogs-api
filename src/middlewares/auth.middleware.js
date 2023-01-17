const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'secretJWT';

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  let payload;
  try {
    payload = jwt.verify(authorization, SECRET);
    req.user = payload;
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

module.exports = {
  auth,
};
