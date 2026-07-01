const callGemini = require("../Helper/GeminiAi")
const supabase = require("../Db/Supabaseclient")
const express = require('express')
const router = express.Router()


 router.post('/' , async(req,res)=>{
 const{brief , user_id} =req.body

const prompt = `Analyze this client brief: ${brief}
Return JSON only, no extra text:
{
  "what_they_want": "summary here",
  "missing_info": ["point1", "point2"],
  "deliverables": ["item1", "item2"],
  "questions": ["question1s", "question2"],
  "complexity": "Low/Medium/High",
  "price_range": "estimated range"
}`

const aiResponse = await callGemini(prompt)
    await supabase
    .from('Analyzer')
    .insert({
        user_id : user_id,
        input_text : brief,
        ai_output:aiResponse
    })

    res.json({aiResponse})

})
module.exports = router;
