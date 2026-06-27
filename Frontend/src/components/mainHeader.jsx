import React from 'react'
import { colors,SecondaryButton,StyledHeader } from '../CommonCss/commoncss';
import usePlanStore from '../Store/PlanStore';
 const MainHeader = () => {
  const plan = usePlanStore((state)=> state.plan)
  const name = usePlanStore((state)=> state.name)
  
  return (
    <>
    
    <StyledHeader >
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2 p-4'>
<div className="rounded-full  size-3 flex justify-center items-center" style={{backgroundColor: colors.lightBackground}}>
  <div className="rounded-full size-2 " style={{backgroundColor: colors.background}}>
  </div>
</div>
    <div style={{color:colors.lightBackground ,fontSize:"20px", fontWeight:"bold"}}>

    GigMate
    </div>
        </div>
        <div className=' mr-8'>

   <SecondaryButton  >{name} ({plan} plan)</SecondaryButton>
        </div>

      </div>

    </StyledHeader>
    

    </>
  )
}
export default MainHeader;