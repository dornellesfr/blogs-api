const { Router } = require('express');
const loginController = require('../controllers/login.controller');
const middleware = require('../middlewares/index');

const loginRouter = Router();

// FAZER AS ROTAS AQUI;
loginRouter.post('/', middleware.validateLogin, loginController.login);

module.exports = loginRouter;