const Story = require('../models/story');
const express = require('express');
const router = express.Router();

const { getAllStories, createStory, getStory, updateStory, deleteStory} = require('../controllers/stories')



router.route('/').get(getAllStories).post(createStory)
router.route('/:id').get(getStory).patch(updateStory).delete(deleteStory);

module.exports = router;