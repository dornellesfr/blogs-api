const { Category, BlogPost, User } = require('../models/index');

async function getAllPosts() {
  const result = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return result;
}

module.exports = {
  getAllPosts,
};
