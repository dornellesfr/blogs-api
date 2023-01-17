const categorieService = require('../services/categories.service');

async function insertCategorie(req, res) {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });

  const result = await categorieService.insertCategory(name);
  return res.status(201).json(result);
}

async function getAllCategories(_req, res) {
  const result = await categorieService.getAllCategories();

  return res.status(200).json(result);
}

module.exports = {
  insertCategorie,
  getAllCategories,
};
