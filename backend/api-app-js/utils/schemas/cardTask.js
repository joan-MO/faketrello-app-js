const Joi = require('@hapi/joi');

const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string()
});

module.exports = schema;