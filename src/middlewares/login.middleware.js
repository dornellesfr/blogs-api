const userService = require('../services/user.service');

async function validateLogin(req, res, next) {
  const { email, password } = req.body;
  
  const result = await userService.loginIsCorrect(email, password);

  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  if (result.message) {
    return res.status(400).json({ message: result.message });
  }
  
  next();
} 

module.exports = {
  validateLogin,
};