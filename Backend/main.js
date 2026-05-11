const express = require('express');
const app =express();
const port = 5000;
const testConnection = require('./src/testconnect')

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Backend is running");
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
     testConnection();
    
})
