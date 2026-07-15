
import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { supabase } from '../Supabse/supabseClient';
import { Link, Navigate } from 'react-router-dom';
import { colors, RegularButton } from '../CommonCss/commoncss';

export const Register = () => {
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [password , setPassword] = useState("");
    const[consirmPass ,setconfirmPass] =useState("")
    const [error ,setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const[loading , setLoading] = useState(false)

    const[showConfirmPass, setShowConfirmPass] =useState(false);

const handleSignup= async (e)=>{
  e.preventDefault();
  setLoading(true);
  setError(null);  

  const {data,error} = await supabase.auth.signUp({
    email,password,name
  })

   if (error) {
      setError(error.message)
      setLoading(false)
      return
    }
    const {error :dbError} = await supabase 
    .from('User')
    .insert({
      id: data.user.id,
      email:email,
      name:name,
      plan:'free'

    })
     if (dbError) {
      setError(dbError.message)
    } else {
     <Navigate to="/"/>
    }
  setLoading(false);

}
const disableHelper = !name || !email || !password || !consirmPass;
 
  return (
    <>
   <div className="flex flex-col justify-center items-center min-h-screen w-full">
  
  <h1 className="font-bold text-xl mb-4">Register Account</h1>

  <form onSubmit={handleSignup} className='flex flex-col gap-4 p-6 bg-gray-100 shadow-lg rounded-3xl max-w-sm w-full mx-auto'>
    
    <div className='flex flex-col gap-2'>
      <label className='font-semibold'>Name</label>
      <input
        type="text"
        placeholder="abc"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className='h-10 p-4 rounded-2xl w-full'
      />
    </div>

    <div className='flex flex-col gap-2'>
      <label className='font-semibold'>Email</label>
      <input
        type="email"
        placeholder="abc@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className='h-10 p-4 rounded-2xl w-full pr-10'
      />
    </div>
    <div className='text-red-600 text-sm'>
    {error}

    </div>

    <div className='flex flex-col md:flex-row gap-2'>
      <div className='flex flex-col gap-2 w-full'>
        <label className='font-semibold'>Password</label>
                <div className='relative flex items-center  '>

        <input
      type={showPassword ? "text" : "password"}
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='h-10 p-4 rounded-2xl w-full'
        />
         <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className='absolute right-1 text-gray-500 '
            disabled ={!password}

    >
      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
    </button>

      </div>
      <div className='text-xs text-red-600'>             
        {password.length < 6 && error}
</div>

       </div>
      <div className='flex flex-col gap-2 w-full'>
        <label className='font-semibold'>Confirm Password</label>
        <div className='relative flex items-center  '>
        <input
      type={showConfirmPass ? "text" : "password"}
          placeholder="confirm password"
          value={consirmPass}
          onChange={(e) => setconfirmPass(e.target.value)}
          required
          className='h-10 p-4 rounded-2xl w-full pr-10'
          
        />

  
       <button
      type="button"
      onClick={() => setShowConfirmPass(!showConfirmPass)}
      className='absolute right-1 text-gray-500 '
      disabled ={!consirmPass}
    >
      {showConfirmPass ? <EyeOff size={18} /> : <Eye size={18} />}
    </button>
    </div>
      </div>
    </div>

    <div className='flex justify-center mt-2'>
      <RegularButton className="rounded-full text-white w-36 h-12 font-semibold" onClick={handleSignup} disabled ={disableHelper}>
        {loading ? "loading..." : "Register"}
      </RegularButton>
    </div>
  
    <div className='flex justify-center'>
      <h3>Already have an account?   <Link to="/"  style={{color:colors.background}}>Login here</Link></h3>
    </div>

  </form>
</div>
    </>
  )
}
