const express=require('express');
const {getAllTasks,getTask,updateTask,deleteTask,createTask}=require('../controller/apiTaskManager');
const router=express.Router();

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);


module.exports=router;

