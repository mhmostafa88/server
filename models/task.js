const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  storyId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  employee: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const TaskModel = mongoose.model('tasks', taskSchema);
module.exports = TaskModel;
