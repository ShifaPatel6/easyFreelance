const callGemini = require("../Helper/GeminiAi")
const supabase = require("../Db/Supabaseclient")
const express = require('express')
const router = express.Router()
const verifyUser = require('../middlewares/verifyUser') 

router.post('/', verifyUser, async (req, res) => {
    const { tone, clientName, invoiceAmount, label, userName, Duedate } = req.body
    const user_id = req.user.id;

  const prompt = `You are a professional billing assistant. Write a structured follow-up email regarding an invoice.

Input Details:
- Recipient (Client Name): ${clientName}
- Sender (User Name): ${userName}
- Amount: $${invoiceAmount}
- Due Date: ${Duedate}
- Status/Label: ${label}
- Tone Required: ${tone} (Options might be: Friendly, Firm, Urgent, or Professional)

Strict Content Rules based on Tone:
1. If tone is "Friendly": Keep it polite, helpful, and assume they just forgot.
2. If tone is "Firm": Be direct, state how many days overdue it is, and drop conversational fillers.
3. If tone is "Urgent": Highlight the critical delay, demand immediate action, and keep it extremely short.

Output Requirements:
Return a clean JSON object ONLY. Do not wrap the JSON in markdown backticks (\`\`\`json). 
Use standard '\\n' inside the string fields for line breaks so that it remains a valid JSON.

JSON Structure:
{
  "email_subject": "Write a punchy subject line based on the tone",
  "email_body": "Write the email message body here. Use '\\n' for paragraph breaks. Do not include salutations or closing signatures here.",
  "closing": "Write the closing salutation and sender name here (e.g., 'Sincerely,\\n${userName}')"
}`;


    try {
        const aiResponse = await callGemini(prompt)
         if(aiResponse && aiResponse.error){

        return res.status(500).json({ 
              success: false, 
              message: "Didn't get valid response from AI.",
              details: aiResponse.rawText 
          });
    }

        const { data, error: supabaseError } = await supabase
            .from('FollowupWriter')
            .insert({
                user_id: user_id,
                email_draft: aiResponse   
            })

        
    if(supabaseError){

        return res.status(500).json({ 
               success: false, 
               message: "Failed to insert data.",
               error: supabaseError.message
           });
        }

          
        return res.status(201).json({ 
            success: true, 
            aiResponse 
        });

    } catch(error){
    console.error(error,"unexpected error occurred");
    return res.status(500).json({ 
        success: false, 
        message: "An unexpected error occurred.",
        error: error.message
    });

}
})

module.exports = router;