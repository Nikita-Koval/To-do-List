const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskScheme = new Schema({
    text: String,
    isCheck: Boolean
  });

module.exports = Task = mongoose.model('tasks', taskScheme);