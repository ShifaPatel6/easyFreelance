import { colors,RegularButton ,Heading, OuterContainer,HeadingSubHeading,InputTag} from '../CommonCss/commoncss';
import { useState } from 'react'
import InputCompo from '../Common/InputCompo';
import {Dropdown} from '../Common/Dropdown'
import { ChevronDown } from 'lucide-react';
import useInvoicedetailStore from '../Store/UserDetailStore';
import useWorkedItemStore from '../Store/WorkedItemStore'
  import { CircleArrowLeft } from 'lucide-react';
  import TabHooks from '../Hooks/TabHooks';
    import ResultCompo from '../components/ResultCompo';



 const FollowUpWriter = () => {
  const[result , setResult] = useState('');
    const [label, setLabel] = useState('');
    const [tone ,setTone] =useState('');
    
        const { activeTab,  goToResult, goToForm } = TabHooks()


     const userDetail =useInvoicedetailStore((state)=>state.userDetail)
     const setUserDetail =useInvoicedetailStore((state)=>state.setUserDetail)
    const clientDetail =useInvoicedetailStore((state)=>state.clientDetail)
      const getTotal    = useWorkedItemStore((state) => state.getTotal)  
      const setClientDetail = useInvoicedetailStore((state)=>state.setClientDetail)

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
    const DisableHelper =!tone ||!label|| !clientDetail.amount;

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
                      <RegularButton  disabled={!result} className='w-2 items-center flex flex-col rounded-full p-2 ' onClick={goToForm}><CircleArrowLeft/></RegularButton>


  <div className='h-auto w-11/12  border-gray-200 border-2 flex flex-col  rounded-2xl mx-auto p-6  font-semibold'style={{color: colors.textSecondary}}>
{activeTab === "result"?

<div>
        <ResultCompo result={result} onBack={goToForm} />
      </div>
      :

      <>
      
<div className='flex flex-row items-center gap-5 mb-4'>

        <h1 className='uppercase'> Invoice details</h1> 
      <RegularButton className='h-8 w-24'
    disabled={!result}
    onClick={goToResult}>
      Result
      </RegularButton>
  
   </div>
   <div className='flex flex-col items-center gap-6'>

        <div className='flex gap-4 w-full justify-between'>

           <InputCompo label="Client name" placeholder="Client name" type="text" value={clientDetail.name} className="w-full h-10 rounded-xl p-3 shadow-sm border-2 border-gray-300" onChange={(e)=>setClientDetail('name',e.target.value)}/>
        <InputCompo label="Invoice number" placeholder="Invoice number " type="text" value={clientDetail.invoiceNumber} className="w-full h-10 rounded-md p-3 shadow-sm border-2 border-gray-300" onChange={(e)=>setClientDetail('invoiceNumber',e.target.value)}/>
        <InputCompo label="Invoice amount" placeholder="Invoice amount" type="text" value={clientDetail.invoiceAmount} className="w-full h-10 rounded-xl p-3 shadow-sm border-2 border-gray-300" onChange={(e)=>setClientDetail('invoiceAmount',e.target.value)}/>
        <InputCompo label="Due date" placeholder="Due date" type="date" value={clientDetail.dueDate} className="w-52  h-10 rounded-xl p-3 shadow-sm border-2 border-gray-300"  onChange={(e)=>setClientDetail('dueDate',e.target.value)}  />
  </div>
  <div className='flex justify-between w-full gap-4 items-center '>
    <InputCompo label="Your name" placeholder="Your name" type="text" value={userDetail.name} className=" h-10 rounded-xl p-3 shadow-sm border-2 border-gray-300"onChange={(e)=>setUserDetail('name',e.target.value)} />
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
      
      </>
}


  </div>

</OuterContainer>
    </>
  )

}
export default FollowUpWriter;