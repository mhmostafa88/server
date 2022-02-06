const express = require('express');
const router = express.Router();

const {
  getAllTasks,
  getStoryTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  deleteStoryTasks
} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id')
  .get(getTask)
  .post(createTask)
  .patch(updateTask)
  .delete(deleteTask)
router.route('/story/:id').get(getStoryTasks).delete(deleteStoryTasks);

  module.exports = router;