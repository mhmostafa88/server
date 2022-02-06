const Story = require('../models/story');

const getAllStories = async (req, res) => {
  try {
      const stories = await Story.find({})
      res.status(200).json({ stories })
  } catch (error) {
      res.status(500).json({ msg: error })
  }
};

const createStory = async (req, res) => {
  try {
    const story = await Story.create(req.body);
    res.status(201).json({ story });
  } catch (error) {
      res.status(500).json({msg:error})
  }
};

const getStory = async (req, res) => {
    try {
        const {id:storyID} = req.params
        const story = await Story.findOne({_id:storyID})
        if(!story){
            return res.status(404).json({msg: `No task with id: ${storyID}`})
        }
        res.status(200).json({ story });
    } catch (error) {
        res.status(500).json({msg: error})
    }
};

const updateStory = async (req, res) => {
  try {

    const { id: storyID } = req.params;

    const story = await Story.findOneAndUpdate({ _id: storyID }, req.body, {
      new: true,
      runValidators: true
    })

    if(!story) {
      return res.status(404).json({ msg: `No story with id : ${storyID}`})
    }
    res.status(200).json({ story })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const deleteStory = async (req, res) => {
  try {
    const { id: storyID } = req.params;
    const story = await Story.findOneAndDelete({ _id: storyID })
    if(!story) {
      return res.status(404).json({ msg: `No story with id : ${storyID}`})
    }
    res.status(200).json({ story })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
};

module.exports = {
  getAllStories,
  createStory,
  getStory,
  updateStory,
  deleteStory,
};
