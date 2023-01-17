const userService = require('../services/user.service');
const { validateInsertLoginFields } = require('../utils/loginInsertValidation');

async function verifyInsertData(req, res, next) {
  const { email } = req.body;

  const validate = validateInsertLoginFields(req.body);
  const isEmailExists = await userService.emailExists(email);

  if (validate) return res.status(400).json({ message: validate });
  if (isEmailExists) return res.status(409).json({ message: 'User already registered' });

  next();
}

module.exports = {
  verifyInsertData,
};