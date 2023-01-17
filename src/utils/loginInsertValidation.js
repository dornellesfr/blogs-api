const Joi = require('joi');

const loginSchema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'string.min': '"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().email().required().messages({
    'string.email': '"email" must be a valid email',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': '"password" length must be at least 6 characters long',
  }),
  image: Joi.string(),
});

const validateInsertLoginFields = (login) => {
  const { error } = loginSchema.validate(login);
  // console.log(error);
  if (error) return error.details[0].message;
};

module.exports = {
  validateInsertLoginFields,
};