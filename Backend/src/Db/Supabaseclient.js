const { createClient } = require('@supabase/supabase-js');
const SupabaseUrl = process.env.SUPABASE_URL
const SupabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY

 const supabase = createClient(SupabaseUrl,SupabaseKey);
 module.exports = supabase;