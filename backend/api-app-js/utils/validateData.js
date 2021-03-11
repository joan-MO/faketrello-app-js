const Boom = require('@hapi/boom')
module.exports = (schema) => {
    return async (req, res, next) => {
        try {
        console.log(schema);
        await schema.validateAsync(req.body);
        next();
        } catch (error) {
            res.send(Boom.badData(error));
        }
    }
}