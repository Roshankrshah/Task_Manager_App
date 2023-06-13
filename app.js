const express = require('express');
const app = express(); 
const tasks = require('./routes/tasks');

//middleware
app.use(express.json());


const port = 3000;

app.get('/hello',(req,res)=>{
    res.send("Task manager");
});

app.use('/api/v1/tasks',tasks);

app.listen(port,console.log(`server is listening on https://localhost:${port}`));