const jwt = require('../utils/jwt');

async function login(req, res) {
  const { email } = req.body;
  const { headers } = req;

  const token = jwt.jwtToken(email);

  headers.authorization = token;
  return res.status(200).json({ token });
}

module.exports = {
  login,
};