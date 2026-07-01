const callGemini = require("../Helper/GeminiAi")
const supabase = require("../Db/Supabaseclient")
const express = require('express')
const router = express.Router()

router.post('/',async(req,res)=>{
    const{clientName,budget,label,brief,experience,timeline,skills} =req.body;

  const prompt = `Analyze this proposal format and generate professional level proposal for client ${clientName}. 
User details: budget: ${budget}, specialization: ${label}, brief: ${brief}, experience: ${experience}, timeline: ${timeline}, skills: ${skills}

Return JSON only, no extra text, no markdown:
{
  "cover_letter": "Dear [clientName], professional intro paragraph here...",
  "deliverables": ["item1", "item2", "item3"],
  "approach": ["step1", "step2", "step3"],
  "timeline": ["Week 1: ...", "Week 2: ...", "Week 3: ..."],
  "pricing": ["Total: Rs. X", "50% upfront: Rs. Y", "50% on delivery: Rs. Z"],
  "skills": ["skill1", "skill2", "skill3"]
}`

    const aiResponse = await callGemini(prompt)
    await supabase
    .from('ProposalWriter')
    .insert({
        client_name : clientName,
        label : label,
        ai_output:aiResponse
    })
    res.json({aiResponse})


})

module.exports = router;