import React, { useState } from 'react'
import { colors ,Heading, OuterContainer,HeadingSubHeading} from '../CommonCss/commoncss';
import InputCompo from '../Common/InputCompo';
import WorkedItemCompo from '../components/WorkedItemCompo';
import InvoiceCompo from '../components/InvoiceCompo';
import useInvoicedetailStore from '../Store/UserDetailStore';


 const InvoiceGenerator = () => {
    

    const userDetail =useInvoicedetailStore((state)=>state.userDetail)
    const clientDetail =useInvoicedetailStore((state)=>state.clientDetail)
    const setClientDetail =useInvoicedetailStore((state)=>state.setClientDetail);
    const setUserDetail =useInvoicedetailStore((state)=>state.setUserDetail)
  return (
     <>
     <OuterContainer >
     <HeadingSubHeading>
     <div className='flex justify-between items-center'>
   <Heading>
     Invoice Generator  
   </Heading>
 
 </div>
     <div>
      <h1> Fill in project details - and get your professional invoice</h1> 
     </div>
   </HeadingSubHeading>
 
<div className='h-auto w-full flex flex-col lg:flex-row gap-4 '>

    {/* Left Column — 3 cards */}
    <div className='flex flex-col gap-4  w-full lg:w-1/2 md:flex-col  justify-center items-center'>
        {/* user Details */}
        <div className="w-full min-h-fit   flex flex-col gap-3 justify-start rounded-2xl p-4 border-gray-300 border-2" 
            >
            Your Details
            <InputCompo label="Name" placeholder="Your name" type="text" value={userDetail.name} className="w-full h-10 rounded-md p-3 shadow-sm border-2 border-#534AB7" onChange={(e)=>setUserDetail( 'name',e.target.value)}/>
            <InputCompo label="Email" placeholder="Your Email" type="email" value={userDetail.email} className="w-full h-10 rounded-md p-3 shadow-sm border-2 border-gray-300" onChange={(e)=>setUserDetail( 'email',e.target.value)}/>
            <InputCompo label="UPI / bank details" placeholder="Your bank details" type="text" value={userDetail.bankDetail} className="w-full h-10 rounded-md p-3 shadow-sm border-2 border-gray-300" onChange={(e)=>setUserDetail( 'bankDetail',e.target.value)}/>
        </div>
        {/* Client Details */}
        <div className="w-full min-h-fit flex flex-col gap-3 justify-start rounded-2xl p-4 border-gray-300 border-2" 
           >
            Client Details
            <InputCompo label="Client name" placeholder="Client name" type="text" value={clientDetail.name} className="w-full h-10 rounded-md p-3 shadow-sm border-2 border-gray-300" onChange={(e) => setClientDetail('name', e.target.value)}
 />
            <InputCompo label="Client Company" placeholder="Client Company" type="text" value={clientDetail.company} className="w-full h-10 rounded-md p-3 shadow-sm border-2 border-gray-300" onChange={(e)=>setClientDetail('company',e.target.value)} />
            <InputCompo label="Invoice date" type="date" value={clientDetail.invoiceDate} className="w-full h-10 rounded-md p-3 shadow-sm border-2 border-gray-300" onChange={(e)=>setClientDetail('invoiceDate',e.target.value)} />
            <InputCompo label="Due date" type="date" value={clientDetail.dueDate} className="w-full h-10 rounded-md p-3 shadow-sm border-2 border-gray-300" onChange={(e)=>setClientDetail('dueDate',e.target.value)} />
        </div>
     {/* Worked Items */}
       <div className="w-full min-h-32 flex flex-col gap-3 justify-start rounded-2xl p-4 border-gray-300 border-2" 
            style={{backgroundColor: colors.primaryLight}}>
            <WorkedItemCompo />
        </div>

    </div>

    {/* Right Column — Invoice Preview */}
    <div className=" min-h-full w-full lg:w-1/2  "
        >
<InvoiceCompo userDetail={userDetail} clientDetail={clientDetail}/>
    </div>
    

</div>
 
 </OuterContainer>
     </>
   )
}
export default React.memo(InvoiceGenerator);
