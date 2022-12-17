const Task=require('../model/db-model');
const asyncWrapper=require('../middleWare/asyncW');

const getAllTasks=asyncWrapper(async(req,res)=>{
    const tasks=await Task.find();
    res.status(200).json({tasks})
});

const getTask=asyncWrapper(async(req,res)=> {
    const {id}=req.params
    const task= await Task.findById(id);
    res.status(200).json({task})
});

const createTask=asyncWrapper(async(req,res)=>{
    const task=await Task.create(req.body)
    res.status(201).json({task});
});

const deleteTask=asyncWrapper(async(req,res)=> {
    const {id}=req.params
    const task=await Task.findByIdAndDelete(id)
    
    res.status(200).json({task})
});

const updateTask=asyncWrapper(async(req,res)=>{
    const {id}=req.params
    const task=await Task.findByIdAndUpdate(id,req.body,{
        new: true,
        runValidators:true
    });
    
    res.status(200).json({task})
});

module.exports={getAllTasks,getTask,createTask,updateTask,deleteTask};