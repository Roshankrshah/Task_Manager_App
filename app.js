const express = require('express');
const app = express(); 
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');

//middleware
app.use(express.json());


const port = 3000;

app.get('/hello',(req,res)=>{
    res.send("Task manager");
});

app.use('/api/v1/tasks',tasks);

const start = async ()=>{
    try{
        await connectDB()
        app.listen(port,console.log(`server is listening on https://localhost:${port}`));
    }catch(err){
        console.log(err);
    }
}

start()