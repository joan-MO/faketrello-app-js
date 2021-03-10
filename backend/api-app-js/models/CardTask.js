const moongose = require('mongoose');
const { Schema } = moongose;

const cardTaskSchemma = new Schema({
    title: {type: String, required: true },
    description: {type: String},
});

const CardTask = moongose.model('card-task', cardTaskSchemma);
module.exports = CardTask;