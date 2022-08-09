/* eslint-disable indent */
const Joi = require('joi');

const schema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
  deadline: Joi.string().pattern(/^\d{2}\/\d{2}\/\d{4}$/),
  notes: Joi.array().items(
    Joi.object({
      title: Joi.string().required(),
      body: Joi.string().required(),
    }),
  ),
}).required();

module.exports = schema;
