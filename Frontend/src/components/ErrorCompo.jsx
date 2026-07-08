
import React from 'react'

 const ErrorCompo = ({error}) => {
  return (
    <>
    <div className='text-red-600 bg-white  overflow-auto flex justify-center items-center border-2 border-red-600 rounded-2xl p-2 w-auto md:w-1/2 mx-auto'>
      {error}
    </div>
    
    </>
  )
}
export default ErrorCompo;