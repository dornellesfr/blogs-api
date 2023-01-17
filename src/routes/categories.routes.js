const { Router } = require('express');
const middleware = require('../middlewares/index');
const categoriesController = require('../controllers/categories.controller');

const categoriesRouter = Router();

// FAZER AS ROTAS AQUI;
categoriesRouter.post('/', middleware.auth, categoriesController.insertCategorie);
categoriesRouter.get('/', middleware.auth, categoriesController.getAllCategories);

module.exports = categoriesRouter;