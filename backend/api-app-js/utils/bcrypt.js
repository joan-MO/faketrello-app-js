const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

const getSalt = async () => {
    return await bcrypt.genSaltSync(+SALT_ROUNDS);
};

const encryptPassword = async (password) => {
    const salt = await getSalt();
    return await bcrypt.hashSync(password, salt);
}

const comparePassword = async (passwordFromClient, encryptedPassword) => {
    return await bcrypt.compareSync(passwordFromClient, encryptedPassword);
}
module.exports = { encryptPassword, comparePassword };