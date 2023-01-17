const { Router } = require('express');
const middleware = require('../middlewares/index');
const userController = require('../controllers/user.controller');

const userRouter = Router();

// FAZER AS ROTAS AQUI;
userRouter.post('/', middleware.verifyInsertData, userController.insertUser);
userRouter.get('/', middleware.auth, userController.getAllUsers);
userRouter.get('/:id', middleware.auth, userController.getUserById);

module.exports = userRouter;