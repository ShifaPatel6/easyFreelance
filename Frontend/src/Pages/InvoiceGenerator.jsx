import React from 'react'
import { colors,RegularButton ,Heading, OuterContainer,HeadingSubHeading} from '../CommonCss/commoncss';
import InputCompo from '../Common/InputCompo';
import WorkedItemCompo from '../components/WorkedItemCompo';
 const InvoiceGenerator = () => {
  return (
     <>
     <OuterContainer >
     <HeadingSubHeading>
     <div className='flex justify-between items-center'>
   <Heading>
     Invoice Generator  
   </Heading>
 
   {/* <RegularButton className="w-24 h-8 flex flex-row items-center justify-evenly p-2 " style={{backgroundColor: " #e2e8f0",color:'black'}}>
   <Link to="/history"> History</Link> 
     <History size={15}/>
   </RegularButton> */}
 
 </div>
     <div>
      <h1> Fill in project details — AI generates a professional invoice instantly</h1> 
     </div>
   </HeadingSubHeading>
 
<div className='h-auto w-full flex flex-row gap-4'>

    {/* Left Column — 3 cards */}
    <div className='flex flex-col gap-4 w-1/2'>

        {/* Your Details */}
        <div className="w-full min-h-fit flex flex-col gap-3 justify-start rounded-2xl p-4 border-gray-300 border-2" 
            style={{backgroundColor: colors.primaryLight}}>
            Your Details
            <InputCompo label="Name" placeholder="Your name" type="text" value="" className="w-full h-10 rounded-md p-3" />
            <InputCompo label="Email" placeholder="Your Email" type="email" value="" className="w-full h-10 rounded-md p-3" />
            <InputCompo label="UPI / bank details" placeholder="Your bank details" type="text" value="" className="w-full h-10 rounded-md p-3" />
        </div>

        {/* Client Details */}
        <div className="w-full min-h-fit flex flex-col gap-3 justify-start rounded-2xl p-4 border-gray-300 border-2" 
            style={{backgroundColor: colors.primaryLight}}>
            Client Details
            <InputCompo label="Client name" placeholder="Client name" type="text" value="" className="w-full h-10 rounded-md p-3" />
            <InputCompo label="Client Company" placeholder="Client Company" type="text" value="" className="w-full h-10 rounded-md p-3" />
            <InputCompo label="Invoice date" type="date" value="" className="w-full h-10 rounded-md p-3" />
            <InputCompo label="Due date" type="date" value="" className="w-full h-10 rounded-md p-3" />
        </div>

        {/* Worked Items */}
       <div className="w-full min-h-32 flex flex-col gap-3 justify-start rounded-2xl p-4 border-gray-300 border-2" 
            style={{backgroundColor: colors.primaryLight}}>
            <WorkedItemCompo />
        </div>

    </div>

    {/* Right Column — Invoice Preview */}
    <div className="flex-1 min-h-full flex flex-col gap-3 rounded-2xl p-4 border-gray-300 border-2"
        style={{backgroundColor: colors.primaryLight}}>
        Invoice Preview
    </div>
    

</div>
 
 </OuterContainer>
     </>
   )
}
export default React.memo(InvoiceGenerator);
