const express = require('express');
const app =express();
const port = 5000;
const testConnection = require('./src/testconnect')
const briefAnalyzerRouter = require('./src/routes/BriefAnalyzer')

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Backend is running");
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
     testConnection();
    
})

app.use('/briefAnalyzer', briefAnalyzerRouter);
