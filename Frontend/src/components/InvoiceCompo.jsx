import React from 'react'
import {RegularButton} from '../CommonCss/commoncss' 
import useInvoiceStore from '../Store/WorkedItemStore'

 const InvoiceCompo = ({userDetail,clientDetail}) => {
  const items = useInvoiceStore((state)=>state.items)
 const getSubTotal = useInvoiceStore((state) => state.getSubTotal)
const getGst      = useInvoiceStore((state) => state.getGst)
const getTotal    = useInvoiceStore((state) => state.getTotal)
    

  return (
  <>
  <div className='w-full h-auto p-6'>

  <div className ='flex justify-between items-center w-full'>
    <div className='flex flex-col text-wrap'>
 <div>{userDetail.name ||"Your name"}</div>
    <div>{userDetail.email ||" Your email"}</div>
    </div>
   
 <div className='flex flex-col '>
 <div>invocie</div>
    <div>Invoice Id</div>
    </div>  
    </div>
     <div className ='flex justify-between mt-9 items-center w-full '>
    <div className='flex flex-col '>
 <div>Billed to</div>
<div className='break-words w-full'>
  {clientDetail.name || "Client name"}
</div>    
<div className='break-words w-full'>{clientDetail.company || "Company name "}</div>
    </div>
 <div className='flex flex-col '>
 <div>Invocie date</div>
    <div>{clientDetail.invoiceDate || "Invoice date"}</div>
    </div>  
      
 <div className='flex flex-col '>
 <div>Due date</div>
    <div>{clientDetail.DueDate || "Due date"}</div>
    </div>  
    </div>
  </div>
  <div className=' gap-6 '>
    <div className="p-6">
      {items.map((item, i) => (
        <div key={i} className='flex justify-between text-md mt-3'>
          <span className="w-40">{item.description || '-'}</span>
          <span className="w-12">{item.quantity || '-'}
          </span>
            <span className="w-12">{item.rate || '-'}
          </span>
            <span className="w-12">{item.amount || '-'}
          </span>
        </div>
      ))}
  </div>
  
      <div className='flex flex-col mt-2 text-right'>
        <div>Subtotal: ₹{getSubTotal().toLocaleString('en-IN')}</div>
        <div>GST 18%: ₹{getGst().toLocaleString('en-IN')}</div>
        <div>Total Due: ₹{getTotal().toLocaleString('en-IN')}</div>
      </div>
    </div>
  <div className='flex flex-col'>
   <div>
    Payment Details
    </div> 
   <div>
     {userDetail.bankDetail ||"Your bank detail"}
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