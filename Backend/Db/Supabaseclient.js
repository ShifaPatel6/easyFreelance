import {createClient} from '@supabase/supabase-js'
const SupabaseUrl = process.env.SUPABASE_URL
const SupabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY

export const supabse = createClient(SupabaseUrl,SupabaseKey)