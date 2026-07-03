const supabase = require("../Db/Supabaseclient")


const verifyUser = async (req, res, next) => {
    const authHeader = req.headers.authorization
    console.log('1. Auth header:', authHeader)   // ye print ho raha hai?

    if (!authHeader) {
        return res.status(401).json({ error: 'Token nahi mila' })
    }

    const token = authHeader.split(' ')[1]
    console.log('2. Token:', token)   // ye print ho raha hai?

    const { data: { user }, error } = await supabase.auth.getUser(token)
    console.log('3. User from Supabase:', user)   // ye print ho raha hai? ya null aa raha hai?
    console.log('4. Error from Supabase:', error)  // koi error toh nahi aa raha?

    if (error || !user) {
        return res.status(401).json({ error: 'Token invalid hai' })
    }

    req.user = user
    console.log('5. req.user set kiya:', req.user)   // ye print ho raha hai?
    next()
}
module.exports = verifyUser