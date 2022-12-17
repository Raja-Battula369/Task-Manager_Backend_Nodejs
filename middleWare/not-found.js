
const notFound=(req,res,next)=> {
    res.status(404).send('Router doesnot exist');
}
module.exports=notFound;