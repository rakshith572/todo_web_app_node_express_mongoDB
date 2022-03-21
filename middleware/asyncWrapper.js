const asyncWrapper=(fn)=>{
    return async (req,res,next)=>{
        try{
            await fn(req,res,next);
        }catch(errors){
            console.log(errors)
            next(errors);
        }
    }
}
module.exports=asyncWrapper;