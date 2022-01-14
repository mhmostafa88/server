const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: ""
  },
  points: {
    type: Number,
    required: true,
  },
  completedPoints: {
    type: Number,
    default: 0,
  }
});

const StoryModel = mongoose.model("stories",storySchema)
module.exports = StoryModel;