const {TASKS} = require('../models/task')

const readTask = async (req, res) => {
    try {
     const tasks = await TASKS.find();
     res.json({
         status: 'Success',
         data: tasks
     })
    } catch (error) {
     res.status(500).json({
         status: 'Failure',
         message: 'Something went wrong'
     })
    }
 }
 
 const createTask = async (req, res) => {
     try {
         const {ind, title, description, timestamp, isPending, isProgress, isCompleted} = req.body;
         await TASKS.create({ind, title, description, timestamp, isPending, isProgress, isCompleted})
         res.json({
             status: 'Success',
             message: 'task added successfully'
         })
     } catch (error) {
         res.status(500).json({
             status: 'Failure',
             message: 'Something went wrong',
             error: `${error}`
         })
     }
 }
 
 const updateTask = async (req, res) => {
     try {
         const {id} = req.params;
         const {title, description, timestamp, isPending, isProgress, isCompleted, } = req.body;
         await TASKS.findByIdAndUpdate(id, {title, description, timestamp, isPending, isProgress, isCompleted, })
         res.json({
             status: 'product updated successfully',
         })
     } catch (error) {
         res.status(500).json({
             status: 'Failure',
             message: 'Something went wrong'
         })
     }
 }
 
 
 const deleteTask = async (req, res) => {
     try {
         const {id} = req.params;
         await TASKS.findByIdAndDelete(id)
         res.json({
             status: 'task deleted successfully',
         })
 
     } catch (error) {
         res.status(500).json({
             status: 'Failure',
             message: 'Something went wrong'
         })
     }
 }
 
 
 module.exports = {
     readTask,
     createTask,
     updateTask,
     deleteTask
 }