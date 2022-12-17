const mongoose=require('mongoose');

const TaskSchema=new mongoose.Schema({
    name:{
    type:String,
    require:[true,'must be String'],
    trim:true,
    maxlength:[20,'must be under 20 elements']
},
    completed: {
        type:Boolean,
        default:false
    }
}
)
module.exports=mongoose.model('Task',TaskSchema)