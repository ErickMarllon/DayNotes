const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://admin:admin@annotation.lai3agi.mongodb.net/';

const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
