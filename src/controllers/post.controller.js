const postService = require('../services/post.service');

async function getAllPosts(_req, res) {
  const result = await postService.getAllPosts();

  return res.status(200).json(result);
}

module.exports = {
  getAllPosts,
};