const { Router } = require('express');
const middleware = require('../middlewares/index');
const postController = require('../controllers/post.controller');

const postRouter = Router();

// FAZER AS ROTAS AQUI;
postRouter.get('/', middleware.auth, postController.getAllPosts);

module.exports = postRouter;