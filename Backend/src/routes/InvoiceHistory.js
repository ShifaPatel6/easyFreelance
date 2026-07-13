const callGemini = require("../Helper/GeminiAi")
const supabase = require("../Db/Supabaseclient")
const express = require('express')
const router = express.Router()
const verifyUser = require('../middlewares/verifyUser')

// Route 1 — Sirf number generate karo
router.get('/generate-number', verifyUser, async (req, res) => {
  try {
    const user_id = req.user.id

    const { count } = await supabase
      .from('Invoices')
      .select('*', { count: 'exact' })
      .eq('user_id', user_id)

    const year = new Date().getFullYear()
    const invoiceNumber = `INV-${year}-${String(count + 1).padStart(3, '0')}`

    res.json({ 
      success: true,
      invoice_number: invoiceNumber 
    })

  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: error.message 
    })
  }
})

// Route 2 — savein DB
router.post('/save', verifyUser, async (req, res) => {
  try {
    const { clientName, dueDate, total, invoiceNumber } = req.body
    const user_id = req.user.id

    const { error } = await supabase
      .from('Invoices')
      .insert({
        user_id,
        invoice_number: invoiceNumber, // ← frontend se aayega
        client_name: clientName,
        due_date: dueDate,
        total
      })

    if (error) {
      return res.status(500).json({ 
        success: false,
        message: error.message 
      })
    }

    res.json({ 
      success: true,
      message: "Invoice saved!" 
    })

  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: error.message 
    })
  }
})

module.exports = router