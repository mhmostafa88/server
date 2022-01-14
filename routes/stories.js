const Story = require('../models/story');
const express = require('express');
const router = express.Router();

const { getAllStories, createStory, getStory, updateStory, deleteStory} = require('../controllers/stories')



router.route('/').get(getAllStories).post(createStory)
router.route('/:id').get(getStory).patch(updateStory).delete(deleteStory);

// router.post("/", async(req, res) => {
//     try {
//         const story = await new Story(req.body).save();
//         res.send(story);
//     } catch (error) {
//         res.send(error)
//     }
// })

// router.get("/", async(req, res) => {
//     // res.send("get all stories")
//     try {
//         const stories = await Story.find();
//         res.send(stories);
//     } catch (error) {
//         res.send(error)
//     }
// })

// router.put("/:id", async(req, res) => {
//     try {
//         const story = await Story.findOneAndUpdate({_id: req.params.id},
//             req.body)
//             res.send(story)
//     } catch (error) {
//         res.send(error)
//     }
// })

// router.delete("/:id", async(req, res) => {
//     try {
//         const story = await Story.findByIdAndDelete(req.params.id);
//         res.send(story)
//     } catch (error) {
//         res.send(error)
//     }
// })

module.exports = router;