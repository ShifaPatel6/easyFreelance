import { colors,RegularButton ,Heading, OuterContainer,HeadingSubHeading,InputTag} from '../CommonCss/commoncss';
import { useState } from 'react'
import InputCompo from '../Common/InputCompo';
import {Dropdown} from '../Common/Dropdown'

 const FollowUpWriter = () => {
  const[userInput , setUserInput] = useState('');
  const[result , setResult] = useState('');
    const [label, setLabel] = useState('');
  

  const dropDownop =[{
    label:'Pending' , value:'pending'
  }]
  return (
    <>
    <OuterContainer >
    <HeadingSubHeading>
    <div className='flex justify-between items-center'>
  <Heading>
   Follow-up writer
  </Heading>

</div>
    <div>
     <h1> Add invoice details - AI writes perfect payment reminder email for you</h1> 
    </div>
  </HeadingSubHeading>

  <div className='h-auto w-11/12  border-gray-200 border-2 flex flex-col  rounded-2xl mx-auto p-6  font-semibold'style={{color: colors.textSecondary}}>
<div className='flex flex-row items-center gap-5 mb-4'>

        <h1 className='uppercase'> Invoice details</h1> 
    <RegularButton className='h-8 w-24'
  disabled={!result}>
    Result
    </RegularButton>
  
   </div>
     <div className='flex  justify-around'>
           <InputCompo label="Client name" placeholder="Client name" type="text" value="" className="w-full h-10 rounded-md p-3 shadow-sm border-2 border-gray-300" />
        <InputCompo label="Invoice number" placeholder="Invoice number Company" type="text" value="" className="w-full h-10 rounded-md p-3 shadow-sm border-2 border-gray-300" />
        <InputCompo label="Invoice amount" placeholder="Invoice amount" type="text" value="" className="w-full h-10 rounded-md p-3 shadow-sm border-2 border-gray-300" />
        <InputCompo label="Due date" placeholder="Due date" type="text" value="" className="w-full h-10 rounded-md p-3 shadow-sm border-2 border-gray-300" />

   
  </div>
  <div className='flex justify-around items-center '>
    <InputCompo label="Your name" placeholder="Your name" type="text" value="" className=" h-10 rounded-md p-3 shadow-sm border-2 border-gray-300" />
    <div>

     <InputTag>Project Type</InputTag>
    <Dropdown    options={dropDownop}
                                    placeholder="Select Project Type"
                                    onChange={setLabel}/>

    
    </div>
    <div className='flex gap-6'>

<InputTag>Tone</InputTag>
     <RegularButton 
  className='w-auto h-10 text-sm  '
>
  Polite
</RegularButton>
 <RegularButton 
  className='w-auto h-10 text-sm '
  
>
 Firm
</RegularButton>
 <RegularButton 
  className='w-auto h-10 text-sm '

>
 Urgent
</RegularButton>
 <RegularButton 
  className='w-auto h-10 text-sm '

>
 Friendly
</RegularButton>
    </div>
    
  </div>
    <RegularButton 
  className='w-full h-10 text-xl mt-20'
  disabled={!userInput}
>
 Generate
</RegularButton>
  </div>

</OuterContainer>
    </>
  )

}
export default FollowUpWriter;