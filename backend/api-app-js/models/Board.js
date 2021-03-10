const moongose = require('mongoose');
const { Schema } = moongose;

const boardSchema = new Schema({
    title: {type: String, required: true },
    list_tasks: [{type: Schema.Types.ObjectId, ref:'list-task', autopopulate: true  }]
});

boardSchema.plugin(require('mongoose-autopopulate'));

const Board = moongose.model('Board', boardSchema);
module.exports = Board;