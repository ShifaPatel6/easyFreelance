import React from 'react'
import { supabase } from '../Supabse/supabseClient'
import { useNavigate } from 'react-router-dom'
import usePlanStore from '../Store/PlanStore'
import { SecondaryButton } from '../CommonCss/commoncss';
import useLoading from '../Hooks/LoadingHook';
import { Loader } from '../components/Loader';


const Logout = () => {
const clearUser = usePlanStore((state)=>state.clearUser)
  const navigate = useNavigate()
  const { isLoading, startLoading, stopLoading } = useLoading()

  const handleLogout = async () => {
    startLoading()
    await supabase.auth.signOut()
    clearUser() 
    navigate('/')
    stopLoading()
  }

  return (
    <>
        <div className=''>

           {isLoading && (
                  <div className='absolute z-10 flex inset-0 justify-center items-center py-4'>
                    <Loader variant="dot" />  
                  </div>
                )}

   <SecondaryButton onClick={handleLogout}>Logout</SecondaryButton>
    </div>
    
    
    </>
  )
}
export default Logout