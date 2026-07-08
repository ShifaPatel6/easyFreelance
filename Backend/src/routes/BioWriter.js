const callGemini = require("../Helper/GeminiAi")
const supabase = require("../Db/Supabaseclient")
const express = require('express')
const router = express.Router()
const verifyUser = require('../middlewares/verifyUser') 

router.post('/',verifyUser, async (req, res) => {
    const{tone , jobTitle , skills , exp , userName} = req.body;
    const user_id = req.user.id;

  const prompt = `You are an expert personal branding copywriter. Your task is to write 3 distinct, highly effective social media bios for a user.

User Profile:
- Name: ${userName}
- Job Title: ${jobTitle}
- Core Skills: ${Array.isArray(skills) ? skills.join(", ") : skills}
- Experience: ${exp} years
- Target Tone: ${tone} (Options: Professional, Minimal, Friendly, Confident)

Emoji & Styling Rules:
1. Use exactly one professional emoji as a bullet point for each skill or achievement.
2. STRICTION OPTION FOR LINE BREAKS: Press Enter twice after every single bullet point. Every bullet point item must be separated by a double newline (\\n\\n) so there is a clean blank line between points.



Platform Constraints:
- Instagram: Under 150 characters. Use short, stacked lines separated by 1 clean emoji per line. Must end with a clear Call-to-Action pointing down (e.g., 👇).
- LinkedIn: Write a 2-3 paragraph summary. Use bold headings and functional emojis (like 🔹 or ✅) for listing key achievements or skills break line after every  🔹 or ✅ .
- Freelance (Upwork/Fiverr): Start with a killer hook line using an emoji. Detail how your ${exp} years of experience can solve client problems. Use checkmark emojis for listing core deliverables.
Output Requirements:
Return a clean, valid JSON object ONLY. Do not wrap the JSON in markdown backticks (\`\`\`json). 
Ensure you insert dual escaped newlines (\\\\n\\\\n) between distinct bullet entries.

JSON Structure:
{
  "instagram_bio": "Line 1\\nLine 2\\nLine 3 (Max 150 chars total)",
  "linkedin_bio": "Paragraph 1\\n\\n🔹 Bullet Point 1\\n\\n🔹 Bullet Point 2\\n\\nParagraph 2",
  "freelance_bio": "Hook Line\\n\\n✅ Deliverable 1\\n\\n✅ Deliverable 2"
}`;

try{


  const aiResponse = await callGemini(prompt);
    if(aiResponse && aiResponse.error){

        return res.status(500).json({ 
              success: false, 
              message: "Didn't get valid response from AI.",
              details: aiResponse.rawText 
          });
    }

  
      const { data, error: supabaseError } = await supabase
          .from('BioWriter')
          .insert({
              user_id: user_id,
              ai_output: aiResponse,
              skills_input : Array.isArray(skills) ? skills.join(", ") : skills,
  
          });
           if(supabaseError){

        return res.status(500).json({ 
               success: false, 
               message: "Failed to insert data.",
               error: supabaseError.message
           });
        }
           
        return res.status(201).json({ 
            success: true, 
            aiResponse ,
            message: "Bio generated and saved successfully."
        });
        console.log(data,"data is here");
}


        catch(error){
    console.error(error,"unexpected error occurred");
    return res.status(500).json({ 
        success: false, 
        message: "An unexpected error occurred.",
        error: error.message
    });

}
})

module.exports = router;