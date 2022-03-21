const mongoose =require('mongoose');

const connectDB=(URL)=>{
    return mongoose
    .connect(URL,
       {useNewUrlParser:true,
       useCreateIndex:true,
       useFindAndModify:false,
       useUnifiedTopology: true ,}).then(()=>{console.log("Connected to DB....")});
}
module.exports=connectDB;
