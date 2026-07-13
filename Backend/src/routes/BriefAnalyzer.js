const callGemini = require("../Helper/GeminiAi")
const supabase = require("../Db/Supabaseclient")
const express = require('express')
const router = express.Router()
const verifyUser = require('../middlewares/verifyUser')

router.post('/', verifyUser, async (req, res) => {
    const { brief } = req.body
    const user_id = req.user.id;

    const prompt = `You are an adaptive AI project assistant. Your primary instruction is to analyze the language and script of the provided Client Brief, and match it 100% in your JSON response fields.

Client Brief:
"${brief}"

Strict Language Mirroring Rules (CRITICAL):
1. **Analyze the Input Language:** Check if the Client Brief is written in English, Pure Hindi (Devanagari), Hinglish (Roman script Hindi), Spanish, or any other language.
2. **Mirror the Script & Language:** Every string value inside the JSON keys MUST be written in the exact same language and script as the Client Brief. 
   - If brief is in Hinglish (e.g., "mujhe website chahiye"), write all answers in Hinglish.
   - If brief is in pure English (e.g., "I need a website"), write all answers in English.
   - If brief is in Devanagari (e.g., "मुझे वेबसाइट चाहिए"), write all answers in Devanagari.

Formatting Rules:
1. DO NOT use arrays, lists, or square brackets [ ] anywhere in the JSON response.
2. Write items as a flat text block. Separate each point with a relevant emoji (🔹, ✅, ❓) and a double newline (\\n\\n) after every single point.

Output Requirements:
Return a clean, valid JSON object ONLY. Do not wrap the JSON in markdown backticks (\`\`\`json).

JSON Structure:
{
  "what_client_want": "Summary text matching the input language and script.",
  "missing_info": "🔹 Point one.\\n\\n🔹 Point two.",
  "deliverables": "✅ Deliverable one.\\n\\n✅ Deliverable two.",
  "questions to ask client": "❓ Question one.\\n\\n❓ Question two.",
  "Project Complexity": "Low/Medium/High (Translate this status word to the input language if appropriate, or keep it standard)",
  "price_range": "Estimated budget range (Use currency symbol matching the input context, e.g., $ or ₹)"
}`

    try {
        const aiResponse = await callGemini(prompt)

        if (aiResponse && aiResponse.error) {
            return res.status(500).json({
                success: false,
                message: "Didn't get valid response from AI.",
                details: aiResponse.rawText
            });
        }

        const { data, error: supabaseError } = await supabase
            .from('Analyzer')
            .insert({
                user_id: user_id,
                input_text: brief,
                ai_output: aiResponse
            })

        if (supabaseError) {
            return res.status(500).json({
                success: false,
                message: "Failed to insert data.",
                error: supabaseError.message
            });
        }

        return res.status(201).json({
            success: true,
            aiResponse,
            data
        });

    } catch (error) {
        console.error(error, "unexpected error occurred");
        return res.status(500).json({
            success: false,
            message: "An unexpected error occurred.",
            error: error.message
        });
    }
})  // ← yeh closing tha jo galat jagah tha

router.get('/history', verifyUser, async (req, res) => {
    const user_id = req.user.id;

    try {
        const { data, error }=  await supabase
            .from('Analyzer')
            .select('input_text, ai_output, created_at')
            .eq('user_id', user_id)
            .order('created_at', { ascending: false })
                
            if (error) {
                    return res.status(500).json({
                        success: false,
                        message: "Failed to fetch history.",
                        error: error.message
                    });
                }
        const cleanOutput = data.map(item=>{
            const parsedData = JSON.parse(item.ai_output) //object
            const cleaned ={}

            Object.keys(parsedData).forEach(key=>{
                cleaned[key]=String(parsedData[key])
                 .replace(/🔹|✅|❓|⚠️|💡|🔸/g, '')
          .replace(/[*#`~]/g, '')
          .trim()
        // console.log(cleaned,"clean OP");
    })
    
                return {
            input_text: item.input_text,
            ai_output: cleaned,
            created_at: item.created_at
        }
        
})                  
return res.status(200).json({
    success: true,
    data:cleanOutput
    
});
           
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "An unexpected error occurred."
        });
    }
})

module.exports = router;