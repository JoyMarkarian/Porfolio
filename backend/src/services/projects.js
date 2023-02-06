const Joi = require("joi");

const validate = (data, type) => {
  return Joi.object({
    name: Joi.string().min(3).max(255).presence(type),
    description: Joi.string().min(3).max(255).presence(type),
    picture: Joi.string().min(3).max(255).presence(type),
    githubLink: Joi.string().min(3).max(255).presence(type),
  }).validate(data, { aborEarly: false }).error;
};
module.exports = validate;
