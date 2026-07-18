import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { supabase } from '../Supabse/supabseClient'
import { Link, useNavigate } from 'react-router-dom'
import { colors } from '../CommonCss/commoncss'
import usePlanStore from '../Store/PlanStore'

export const Login = () => {
  const [email, setEmail]       = useState("")
  const [password, setPassword] = useState("")
  const [error, setError]       = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading]   = useState(false)
  const navigate = useNavigate()
  const setPlan = usePlanStore((state)=> state.setPlan)


  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

   const { data, error } = await supabase.auth.signInWithPassword({
  email,
  password
})

if (error) {
  setError(error.message)
} else {
  const { data: UserData, error: userError } = await supabase
    .from('User')
    .select('name')
    .eq('id', data.user.id) 
    .single()

  if (userError || !UserData) {
    setError('Could not fetch user profile')
    setLoading(false)
    return
  }

  const name = UserData.name.split(' ')[0]
  setPlan(name)
  navigate('/BriefAnalyzer')
}
setLoading(false)
}
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">
      <h1 className="font-bold text-xl mb-4">Login</h1>

      <form onSubmit={handleLogin}
        className='flex flex-col gap-4 p-6 bg-gray-100 shadow-lg rounded-3xl max-w-sm w-full mx-auto'>

        {/* Email Field */}
        <div className='flex flex-col gap-2'>
          <label className='font-semibold'>Email</label>
          <input
            type="email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='h-10 p-4 rounded-2xl w-full'
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label className='font-semibold'>Password</label>
          <div className='relative flex items-center'>
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
              className='absolute right-2 text-gray-500'
              disabled={!password}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className='text-xs text-red-600'>{error}</div>
        )}

        {/* Submit Button */}
        <div className='flex justify-center mt-2'>
          <button
            type="submit"
            className="rounded-full text-white w-36 h-12 font-semibold"
            style={{backgroundColor:colors.background}}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
        </div>

        <div className='flex justify-center'>
          <h3>Don't have an account?{' '}
            <Link to="/register"  style={{color:colors.background}}>Register here</Link>
          </h3>
        </div>

      </form>
    </div>
  )
}