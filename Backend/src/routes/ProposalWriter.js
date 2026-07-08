const callGemini = require("../Helper/GeminiAi")
const supabase = require("../Db/Supabaseclient")
const express = require('express')
const router = express.Router()
const verifyUser = require('../middlewares/verifyUser')

router.post('/',verifyUser,async(req,res)=>{
    const{clientName,budget,label,brief,experience,timeline,skills,userName} =req.body;
    
    const user_id = req.user.id; 
const prompt = `You are an elite, top-rated freelance consultant and business writer. Your task is to generate a comprehensive, high-converting project proposal for the client.

Client & Project Context:
- Client Name: ${clientName}
- Project Brief/Requirements: ${brief}
- Proposed Budget: ${budget}
- Project Timeline: ${timeline}

Freelancer Profile (User Details):
- Freelancer Name: ${userName}
- Domain/Specialization: ${label}
- Industry Experience: ${experience} years
- Core Skills: ${Array.isArray(skills) ? skills.join(", ") : skills}

Strict Language Mirroring Rules:
1. **Detect Input Language:** Analyze the language and script of the provided Client Brief ("${brief}").
2. **Match Context & Script:** Write all text content inside the JSON values using the exact same language and script style as the Client Brief. If the brief is in English, reply in English. If it is in Hinglish (Roman script Hindi), write everything in professional Hinglish. If it is in Devanagari Hindi, write everything in Devanagari.

Strict Content & Formatting Rules:
1. **NO NESTED ARRAYS:** Do not use arrays, lists, or square brackets [ ] anywhere inside the JSON values. All values must be flat text strings.
2. **Double Newlines for Spacing:** For sections with multiple items, separate each distinct point with a highly professional emoji (like 🔹, ✅, 📈, or 💰) and insert a double newline (\\n\\n) after every single point. This is critical for clear visual structure on the frontend.
3. **High-Level Professionalism:** Avoid generic placeholders. The content must sound custom-tailored, authoritative, and deeply strategic based on the freelancer's ${experience} years of experience.

Output Requirements:
Return a clean, valid JSON object ONLY. Do not wrap the JSON in markdown backticks (\`\`\`json).

JSON Structure:
{
  "cover_letter": "Write a compelling, high-converting introductory cover letter addressing ${clientName}. Establish trust immediately, acknowledge their specific problem from the brief, and pitch why ${userName} is the perfect fit. Use '\\n\\n' for paragraph breaks.",
  
  "deliverables": "🔹 Clear project deliverable one description.\\n\\n🔹 Clear project deliverable two description.\\n\\n🔹 Clear project deliverable three description.",
  
  "approach": "📈 Step 1 (Discovery/Planning): Detailed strategy statement.\\n\\n📈 Step 2 (Execution/Development): Detailed execution statement.\\n\\n📈 Step 3 (Testing/Launch): Detailed quality assurance statement.",
  
  "timeline": "📅 Phase 1 (${timeline} breakdown): Milestone focus description.\\n\\n📅 Phase 2: Implementation and milestone review description.",
  
  "pricing": "💰 Total Project Fee: ${budget}\\n\\n💰 Payment Milestone 1 (50% Upfront): Work initiation deposit.\\n\\n💰 Payment Milestone 2 (50% Upon Delivery): Final project hand-off.",
  
  "skills_used": "✅ Key Skill 1: How it will be applied to this brief.\\n\\n✅ Key Skill 2: How it solves their problem.\\n\\n✅ Key Skill 3: Technical advantage provided."
}`;


try{

    const aiResponse = await callGemini(prompt)
    if (aiResponse.error) {
        return res.status(500).json({ 
            success: false, 
            message: "Didn't get valid response from AI.",
             error: "Internal Server Error"
        });
    }
    const { data, error } =await supabase
    .from('ProposalDb')
    .insert({
                        user_id: user_id,

        client_name : clientName,
        project_title : label,
        ai_output:aiResponse
    })

    if(error){
        console.error(error);
        res.status(500).json({ error:"Database insert failed" });
        return;
    }
    res.json({aiResponse})
}

    catch(error){
        console.error(error);
        res.status(500).json({error,
    message:"Something went wrong while processing the request."
        });
    }
})

module.exports = router;