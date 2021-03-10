const moongose = require('mongoose');
const { Schema } = moongose;

const listTaskSchema = new Schema({
    title: {type: String, required: true },
    card_tasks: [{type: Schema.Types.ObjectId, ref:'card-task', autopopulate: true  }]
});

listTaskSchema.plugin(require('mongoose-autopopulate'));

const ListTask = moongose.model('list-task', listTaskSchema);
module.exports = ListTask;