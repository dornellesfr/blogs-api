const { Category } = require('../models/index');

async function insertCategory(categoryName) {
  const result = await Category.create({ name: categoryName });
  const newCategory = { id: result.dataValues.id, name: categoryName };
  return newCategory;
}

async function getAllCategories() {
  const result = await Category.findAll();
  const allCategories = result.map((cat) => {
    const obj = {
      id: cat.dataValues.id,
      name: cat.dataValues.name,
    };
    return obj;
  });

  return allCategories;
}

module.exports = {
  insertCategory,
  getAllCategories,
};
