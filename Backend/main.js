const express = require('express');
const app =express();
const port = 5000;
const testConnection = require('./src/testconnect')
const briefAnalyzerRouter = require('./src/routes/BriefAnalyzer')
const ProposalWriterRouter = require('./src/routes/ProposalWriter')
const FollowUpWriterRouter = require('./src/routes/FollowUpWriter')
const BioWriterRouter = require('./src/routes/BioWriter')
const InvoiceSaveRouter = require('./src/routes/InvoiceHistory')
const cors = require('cors')


app.use(cors({
    origin: 'http://localhost:5173', // Aapka frontend URL
    methods: ['GET', 'POST'],        // Jo methods aap allow karna chahte hain
    credentials: true                // Agar cookies ya headers bhej rahe hain
}));

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Backend is running");
})



app.use('/BriefAnalyzer', briefAnalyzerRouter);
app.use('/ProposalWriter', ProposalWriterRouter);
app.use('/FollowUpWriter', FollowUpWriterRouter);  
app.use('/BioWriter', BioWriterRouter);
app.use('/Invoice',InvoiceSaveRouter)

module.exports= app