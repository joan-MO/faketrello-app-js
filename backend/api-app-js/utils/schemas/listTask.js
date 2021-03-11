const Joi = require('@hapi/joi');

const schema = Joi.object({
    title: Joi.string().required()
});

module.exports = schema;