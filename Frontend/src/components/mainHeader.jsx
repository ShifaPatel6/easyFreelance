import React from 'react'
import { colors } from '../CommonCss/commoncss';
import usePlanStore from '../Store/PlanStore';
 const MainHeader = () => {
  const plan = usePlanStore((state)=> state.plan)
  const name = usePlanStore((state)=> state.name)
  
  return (
    <>
    
    <div className='h-14 ' style={{backgroundColor: colors.background, color: "white"}}>
      <div className='flex justify-between '>
        <div className='flex items-center gap-2 p-4'>
<div className="rounded-full  size-3 flex justify-center items-center" style={{backgroundColor: colors.lightBackground}}>
  <div className="rounded-full size-2 " style={{backgroundColor: colors.background}}>
  </div>
</div>
    <div style={{color:colors.lightBackground ,fontSize:"20px", fontWeight:"bold"}}>

    GigMate
    </div>
        </div>
        <div className='mt-2 mr-10 '>

   <button class="rounded-full p-2 h-10 text-slate-900 w-48 border border-slate-300"style={{backgroundColor:colors.lightBackground}} >{name} - {plan} plan</button>
        </div>

      </div>

    </div>
    

    </>
  )
}
export default MainHeader;