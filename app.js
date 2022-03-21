const express=require('express');
const app=express();
const task=require('./routes/task.js');
const connectDB=require('./db/connect.js');
const notFound = require('./middleware/not-found');
const error = require('./middleware/error-handler');
require('dotenv').config();
app.use(express.static('./fronEnd'));
app.use(express.json());
app.use('/api/v1/tasks',task);
app.use(notFound);
app.use(error);
const port=5000;
const start=async ()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log(`server listening at port ${port}`));
    }catch(error){
        console.log(error);
    }
}
start();