const { createClient } = require('@supabase/supabase-js')
const dotenv = require('dotenv')

dotenv.config()

const supabaseClient= createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_PUBLISHABLE_KEY
)

async function Users(){
    const {data , error} = await supabaseClient
      .from('User')
      .select('*')
   
    
    console.log(data , error);
    if(error){
    console.log("DB didnt connect",error);
    
}else{
    console.log("Supabase Connected Succesfully");
    
}
}

module.exports = Users;