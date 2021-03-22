var express = require('express');
var router = express.Router();
const User = require('../../models/User');
const userSchemaValidation = require('../../utils/schemas/user')
const validate = require('../../utils/validateData');
const jwt = require('jsonwebtoken');
const { encryptPassword, comparePassword} = require('../../utils/bcrypt');

const JWT_SECRET = 'nodejs_express_mongodb_auth';


router.post('/register',validate(userSchemaValidation), async (req, res, next) => {

  try {
    const { username, password } = req.body;
    const encryptedPassword = await encryptPassword(password);
    const newUser = new User({ username, password: encryptedPassword });
    await newUser.save();
    res.send(`${newUser.username} registered`);

  } catch (error) {
    next(error.message);
  }
  
});

router.post('/login',validate(userSchemaValidation), async (req, res, next) => {

  try {
    const { username, password } = req.body;
    const userFound = await User.findOne({ username });

    if (!userFound) {
        return res.send('User not registered');
    }
    const isCorrectPassword = await comparePassword(password, userFound.password);

    if (!isCorrectPassword) {
        return res.send('Password incorrect');
    }

    const token = jwt.sign(JSON.stringify(userFound), JWT_SECRET);

    res.json({message:`${userFound.username} welcome`, token})

  } catch (error) {
    next(error.message);
  }
  
});


module.exports = router;