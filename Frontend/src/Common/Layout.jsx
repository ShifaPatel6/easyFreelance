import React from 'react'
import "../css/Layoutstyle.css"
export const Layout = ({children}) => {

  return (
    <>
    <div  className='max-width: 1536px header-sec p-6 justify-between display: flex' >

        <div className='items-center '>
            <h1>Logo</h1>

        </div>

        <div   className=' display: flex  gap-6 '>
    <h1> Header  </h1>
          <h1> Header  </h1>
             <h1> Header  </h1>
        </div>
      
      
        
        </div>
    <div>Sidebar</div>
    <div>{children}</div>
    </>
  )
}
