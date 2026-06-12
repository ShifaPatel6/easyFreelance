import { colors,RegularButton ,Heading, OuterContainer,HeadingSubHeading,InputTag} from '../CommonCss/commoncss';
import { useState } from 'react'
import InputCompo from '../Common/InputCompo';
import {Dropdown} from '../Common/Dropdown'
import { ChevronDown } from 'lucide-react';
import useInvoicedetailStore from '../Store/UserDetailStore';
import useWorkedItemStore from '../Store/WorkedItemStore'



 

 const FollowUpWriter = () => {
  const[userInput , setUserInput] = useState('');
  const[result , setResult] = useState('');
    const [label, setLabel] = useState('');
    const [tone ,setTone] =useState('')
    const[selected,setSelected] =useState(false)

     const userDetail =useInvoicedetailStore((state)=>state.userDetail)
    const clientDetail =useInvoicedetailStore((state)=>state.clientDetail)
      const getTotal    = useWorkedItemStore((state) => state.getTotal)  

  const dropDownop =[{
    label:'Pending' , value:'pending',
   
  },
  {
     label :'Overdue' ,value:'overdue',
  },
   {
     label :'30+Very Overdue' ,value:'very overdue',
  }

  
]
    const DisableHelper =!tone ||!label;

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
   <div className='flex flex-col items-center gap-6'>

        <div className='flex gap-4 w-full justify-between'>

           <InputCompo label="Client name" placeholder="Client name" type="text" value={clientDetail.name} className="w-full h-10 rounded-xl p-3 shadow-sm border-2 border-gray-300" readOnly/>

        <InputCompo label="Invoice number" placeholder="Invoice number " type="text" value="" className="w-full h-10 rounded-md p-3 shadow-sm border-2 border-gray-300" />
        <InputCompo label="Invoice amount" placeholder="Invoice amount" type="text" value={getTotal()} className="w-full h-10 rounded-xl p-3 shadow-sm border-2 border-gray-300" readOnly />
        <InputCompo label="Due date" placeholder="Due date" type="text" value={clientDetail.dueDate} className="w-full h-10 rounded-xl p-3 shadow-sm border-2 border-gray-300" />
  </div>
  <div className='flex justify-between w-full gap-4 items-center '>
    <InputCompo label="Your name" placeholder="Your name" type="text" value={userDetail.name} className=" h-10 rounded-xl p-3 shadow-sm border-2 border-gray-300" />
    <div className='flex flex-col  w-full relative '>

     <InputTag>Payment status</InputTag>
    <Dropdown    options={dropDownop}
                                    placeholder="Select payment status"
                                    onChange={setLabel}/>
                                                                    <ChevronDown className='absolute right-4 top-10' />

</div>

    
<div className='flex flex-col  w-full'>

<InputTag>Tone</InputTag>
<div className='flex gap-4'>
     <RegularButton 
  className='w-auto h-10 text-sm  '
  onClick={()=>setTone("polite")}
        $selected={tone === "polite"}

>
  
  Polite
</RegularButton>
 <RegularButton 
  className='w-auto h-10 text-sm '
    onClick={()=>setTone("firm")}
        $selected={tone === "firm"}


  
>
 Firm
</RegularButton>
 <RegularButton 
  onClick={()=>setTone("urgent")}
    $selected={tone === "urgent"}
  className='w-auto h-10 text-sm '

>
 Urgent
</RegularButton>
 <RegularButton 
  className='w-auto h-10 text-sm '
    onClick={()=>setTone("friendly")}
        $selected={tone === "friendly"}



>
 Friendly
</RegularButton>
    </div>
  </div>
    </div>
    
 </div>
    <RegularButton 
  className='w-full h-10 text-xl mt-20'
  disabled={DisableHelper}
>
 Generate Email
</RegularButton>
  </div>

</OuterContainer>
    </>
  )

}
export default FollowUpWriter;