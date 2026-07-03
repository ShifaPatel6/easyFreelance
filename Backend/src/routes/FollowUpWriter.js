const callGemini = require("../Helper/GeminiAi")
const supabase = require("../Db/Supabaseclient")
const express = require('express')
const router = express.Router()

router.post('/', verifyUser, async(req, res) => {
    // Implementation for follow-up writer
    const{tone,clientName,invoiceAmount,label,userName,Duedate} = req.body

    const user_id = req.user.id;

    const prompt = `Write a follow-up email to ${clientName} regarding the invoice of amount ${invoiceAmount} with a ${tone} tone. The invoice is labeled as ${label} and is due on ${Duedate}. The email should be addressed from ${userName}. Return JSON only, no extra text:
    {
        "email_subject": "Subject here",
        "email_body": "Body here"
    }`
   const response= await callGemini(prompt);

   await supabase.from('FollowupWriter').insert({
    user_id: user_id,
    email_draft: prompt,
    
   })

});