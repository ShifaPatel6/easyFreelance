import React from 'react'
import WorkedItemCompo from './WorkedItemCompo';
import { useState } from 'react';
import {RegularButton} from '../CommonCss/commoncss' 

 const InvoiceCompo = () => {
  return (
  <>
  <div className='w-full h-auto p-6'>

  <div className ='flex justify-between items-center w-full'>
    <div className='flex flex-col '>
 <div>name</div>
    <div>upi add</div>
    </div>
   
 <div className='flex flex-col '>
 <div>invocie</div>
    <div>Invoice Id</div>
    </div>  
    </div>
     <div className ='flex justify-between mt-9 items-center w-full'>
    <div className='flex flex-col '>
 <div>Billed to</div>
    <div>Clent name</div>
    </div>
   
 <div className='flex flex-col '>
 <div>invocie date</div>
    <div>Invoice Id</div>
    </div>  
      
 <div className='flex flex-col '>
 <div>due date</div>
    <div>Invoice Id</div>
    </div>  
    </div>

  </div>
  <div>
    <WorkedItemCompo showAddbtn={false} isPreview={false}/>
  </div>
  <div className='flex flex-col'>
   <div>
    Payment Details
    </div> 
   <div>
     priya@upi
    </div>
<div>
    Payment within 14 days. Thank you for the project!
    </div>
  </div>
  <div className='flex flex-col gap-6 w-full'>

  <RegularButton className ='h-10 px-6'>
Download Pdf
  </RegularButton>
    <RegularButton className ='h-10 px-6'>
Copy invoice text
  </RegularButton>
  </div>
  
  </>
  )
}
export default InvoiceCompo;