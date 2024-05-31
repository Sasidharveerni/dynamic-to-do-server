const express = require('express')

const router = express.Router();

const {readTask, createTask, updateTask, deleteTask} = require('../controllers/task')


router.get('/tasks', readTask)


router.post('/tasks', createTask)

router.patch('/tasks/:id', updateTask)

router.delete('/tasks/:id', deleteTask)

module.exports = router