const { GoogleGenerativeAI } = require('@google/generative-ai')

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

const callGemini = async (prompt) => {
  const model = genAI.getGenerativeModel({   model: "gemini-3.5-flash", 
        generationConfig: { responseMimeType: "application/json" } })
  const result = await model.generateContent(prompt)
   const text = result.response.text()

  // clean JSON and emove backticks
  const cleaned = text.replace(/```json|```/g, '').trim()
  return JSON.parse(cleaned)
}

module.exports = callGemini