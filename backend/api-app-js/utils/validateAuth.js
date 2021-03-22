const jwt = require('jsonwebtoken');
const JWT_SECRET = 'nodejs_express_mongodb_auth';
const Boom = require('@hapi/boom')

module.exports = (req, res,next) => {
    try {
        const token = req.headers['authorization'] ? req.headers['authorization'].replace('Bearer ', '') : undefined;
        const decodedToken = jwt.verify(token, JWT_SECRET);
        req.userData = decodedToken;
        next();
       
    } catch (error) {
        return res.send(Boom.forbidden('Unauthorized'));
        //next(error);
    }
}