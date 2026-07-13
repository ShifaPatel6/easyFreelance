const callGemini = require("../Helper/GeminiAi")
const supabase = require("../Db/Supabaseclient")
const express = require('express')
const router = express.Router()
const verifyUser = require('../middlewares/verifyUser')

router.post('/' , verifyUser ,async (req, res) => {

    const {dueDate ,clientName ,total} =req.body;
  const user_id = req.user.id;

  const { data, error: supabaseError } = await supabase
            .from('Invoices')
            .insert({
                user_id: user_id,
                input_text: brief,
                ai_output: aiResponse
            })


})