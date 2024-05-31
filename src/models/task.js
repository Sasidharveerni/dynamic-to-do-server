const mongoose = require('mongoose');

const TASKS = mongoose.model('task', {
    ind: Number,
    title: String,
    description: String,
    timestamp: String,
    isPending: Boolean,
    isProgress: Boolean,
    isCompleted: Boolean
})

module.exports = {TASKS}