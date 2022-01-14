const Story = require('../models/story');

const getAllStories = (req, res) => {
  res.send('get all stories');
};

const createStory = async (req, res) => {
  try {
    const story = await Story.create(req.body);
    res.status(201).json({ story });
  } catch (error) {
      res.status(500).json({msg:error})
  }
};

const getStory = (req, res) => {
  res.json({ id: req.params.id });
};

const updateStory = (req, res) => {
  res.send('update story');
};

const deleteStory = (req, res) => {
  res.send('delete story');
};

module.exports = {
  getAllStories,
  createStory,
  getStory,
  updateStory,
  deleteStory,
};
