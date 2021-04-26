'use strict'

const mongoose = require('mongoose');

mongoose.connection.on('error', err => {
    console.log('Error connection', err);
    process.exit(1);
});

mongoose.connection.once('open', () => {
    console.log('Connect to MongoDB in', mongoose.connection.name);
})

mongoose.connect('mongodb://localhost:27017/faketrello', {useNewUrlParser: true, useUnifiedTopology: true,   useCreateIndex: true});

module.exports = mongoose.connection;