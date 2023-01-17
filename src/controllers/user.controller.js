const jwt = require('../utils/jwt');
const userService = require('../services/user.service');

async function insertUser(req, res) {
  const { email } = req.body;
  const { headers } = req;

  await userService.insertUser(req.body);

  const token = jwt.jwtToken(email);

  headers.authorization = token;
  return res.status(201).json({ token });
}

async function getAllUsers(_req, res) {
  const result = await userService.getAllUsers();

  return res.status(200).json(result);
}

async function getUserById(req, res) {
  const { id } = req.params;
  const result = await userService.findUserById(id);

  if (result.message) return res.status(404).json(result);

  return res.status(200).json(result);
}

module.exports = {
  insertUser,
  getAllUsers,
  getUserById,
};