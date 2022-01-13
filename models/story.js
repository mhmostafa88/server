const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  // id, title, description, points, completedPoints
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  completedPoints: {
    type: Number,
    required: true,
  },
});

const StoryModel = mongoose.model("stories",storySchema)
module.exports = StoryModel;