const moongose = require('mongoose');
const { Schema } = moongose;

const userSchema = new Schema({
    username: {type: String, required: true, unique: true },
    password: {type: String, required: true },
},{timestamps: true});

const User = moongose.model('User', userSchema);
module.exports = User;