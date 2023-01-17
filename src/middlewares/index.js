const { auth } = require('./auth.middleware');
const { validateLogin } = require('./login.middleware');
const { verifyInsertData } = require('./user.middleware');

module.exports = {
  auth,
  validateLogin,
  verifyInsertData,
};
