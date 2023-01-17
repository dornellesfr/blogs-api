const snakeize = require('snakeize');
const camelize = require('camelize');
const { User } = require('../models/index');

async function findUserById(id) {
  const result = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!result) return { message: 'User does not exist' };
  const usersCamelize = camelize(result.dataValues);
  return usersCamelize;
}

async function loginIsCorrect(userEmail, userPassword) {
  const result = await User.findAll({ where: {
      email: userEmail,
      password: userPassword,
    },
  });
  if (result.length > 0) return result;
  return { message: 'Invalid fields' };
}

async function insertUser(
  { displayName: userName, email: userEmail, password: userPassword, image: userImage = null },
) {
  const creating = {
    displayName: userName, email: userEmail, password: userPassword, image: userImage,
  };
  await User.create(snakeize(creating));
}

async function emailExists(userEmail) {
  const result = await User.findAll({ where: {
      email: userEmail,
    },
  });

  if (result.length < 1) return false;
  return true;
}

async function getAllUsers() {
  const result = await User.findAll({ attributes: { exclude: ['password'] } });
  const users = result.map((user) => user.dataValues);
  const usersCamelize = camelize(users);
  return usersCamelize;
}

module.exports = {
  findUserById,
  loginIsCorrect,
  insertUser,
  emailExists,
  getAllUsers,
};