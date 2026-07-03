const callGemini = require("../Helper/GeminiAi")
const supabase = require("../Db/Supabaseclient")
const express = require('express')
const router = express.Router()
const verifyUser = require('../middlewares/verifyUser')

 router.post('/' , verifyUser, async(req,res)=>{
 const{brief} =req.body
 const user_id = req.user.id;
 
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
   const { data, error } = await supabase
    .from('Analyzer')
    .insert({
        user_id: user_id,
        input_text: brief,
        ai_output: aiResponse
    })

if (error) {
    console.log('Insert error:', error)
    return res.status(500).json({ error: error.message })
}
res.json({ aiResponse, data })


})
module.exports = router;
