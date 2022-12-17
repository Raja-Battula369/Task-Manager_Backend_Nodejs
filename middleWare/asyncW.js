
const asyncWrapper=(fn)=>{
    return async(req,res,next)=> {
        try {
            await fn(req,res,next) 
        }
        catch(error) {

            
            return res.status(404).json({msg:'id is not found'})
            next()
        }
    }
}

module.exports=asyncWrapper;