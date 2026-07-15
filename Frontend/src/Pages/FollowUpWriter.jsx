import { colors,RegularButton ,Heading, OuterContainer,HeadingSubHeading,InputTag,ContainerText} from '../CommonCss/commoncss';
import { useState } from 'react'
import InputCompo from '../Common/InputCompo';
import {Dropdown} from '../Common/Dropdown'
import { ChevronDown } from 'lucide-react';
import useInvoicedetailStore from '../Store/UserDetailStore';
import useWorkedItemStore from '../Store/WorkedItemStore'
import { CircleArrowLeft,MoveRight } from 'lucide-react';
import TabHooks from '../Hooks/TabHooks';
import ResultCompo from '../components/ResultCompo';
import useLoading from '../Hooks/LoadingHook';
import { Loader } from '../components/Loader';
import { getToken } from '../Helper/tokenHelper';
import ErrorCompo from '../components/ErrorCompo';




 const FollowUpWriter = () => {
  const[result , setResult] = useState('');
    const [label, setLabel] = useState('');
    const[error ,setError] = useState(null)
    const [tone ,setTone] =useState('');
    
        const { activeTab,  goToResult, goToForm } = TabHooks()
        const { isLoading, startLoading, stopLoading } = useLoading()

  const items = useWorkedItemStore((state)=>state.items)


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
    const DisableHelper =!tone ||!label|| !clientDetail.invoiceAmount;
    const handleGenerateEmail = async () => {
      startLoading();
      try{

        const response = await getToken({
              url: `${import.meta.env.VITE_API_URL}/FollowUpWriter`,
              options: {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
          body:JSON.stringify({
            tone: tone,
            clientName: clientDetail.name,
            invoiceAmount: clientDetail.invoiceAmount,
            label: label,
            userName: userDetail.name,
            Duedate: clientDetail.dueDate
          })
        }});
        if(!response.ok){
          const errData = await response.json();
          throw new Error(errData.message || "Something went wrong");
        }
        const data = await response.json();
        setResult(data.aiResponse);
        stopLoading();
        goToResult();
      }catch {
  setError("An error occurred while generating the email. Please try again later.")
  setTimeout(() => setError(null), 6000)
  stopLoading()
}
      stopLoading();
    }

      
    

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
     <h1 className='flex flex-wrap items-center gap-2'> <span>
      Add invoice details
      </span> <MoveRight style={{color:colors.Menu}} /> <span>
        AI writes perfect payment reminder email for you
        </span> </h1> 
    </div>
  </HeadingSubHeading>
                      <RegularButton  disabled={!result} className='w-2 items-center flex flex-col rounded-full p-2 ' onClick={goToForm}><CircleArrowLeft/></RegularButton>


  <div className='h-auto w-full border-gray-200 border-2 flex flex-col rounded-2xl mx-auto p-6 font-semibold' style={{color: colors.textSecondary}}>
{error && <div className='flex justify-center items-center'>
  <div className='w-auto md:w-1/2'>
    <ErrorCompo error={error} />
  </div>
</div>  
}

{activeTab === "result"?

<div>
        <ResultCompo result={result} onBack={goToForm} />
      </div>
      :

      <>
      <div  className= 'relative'>
                        {isLoading && (
                    <div className='absolute z-10 flex inset-0 justify-center items-center py-4'>
                      <Loader variant="dot" />  
                    </div>
                  )}
            <div className={isLoading ? 'opacity-20 pointer-events-none' : ''}>

      
<div className='flex flex-row items-center gap-5 mb-4'>

        <ContainerText > Invoice details</ContainerText> 
      <RegularButton className='h-8 w-24'
    disabled={!result}
    onClick={goToResult}>
      Result
      </RegularButton>
  
   </div>
   <div className='flex flex-col items-center  gap-6'>

        <div className='flex gap-4 w-full justify-between flex-col lg:flex-row'>

           <InputCompo label="Client name" placeholder="Client name" type="text" value={clientDetail.name}  onChange={(e)=>setClientDetail('name',e.target.value)}/>
        <InputCompo label="Invoice number" placeholder="Invoice number " type="text" value={clientDetail.invoiceNumber} onChange={(e)=>setClientDetail('invoiceNumber',e.target.value)}/>
        <InputCompo label="Invoice amount" placeholder="Invoice amount" type="text" value={clientDetail.invoiceAmount} onChange={(e)=>setClientDetail('invoiceAmount',e.target.value)}/>
        <InputCompo label="Due date" placeholder="Due date" type="date" value={clientDetail.dueDate}   onChange={(e)=>setClientDetail('dueDate',e.target.value)}  />
  </div>
  <div className='flex justify-between w-full gap-4 items-center flex-col lg:flex-row'>
    <div className='w-full'>

    <InputCompo label="Your name" placeholder="Your name" type="text" value={userDetail.name} onChange={(e)=>setUserDetail('name',e.target.value)}/>

    </div>
    <div className='flex flex-col w-full relative '>

     <InputTag>Payment status</InputTag>
    <Dropdown    options={dropDownop}
                                    placeholder="Select payment status"
                                    onChange={setLabel}/>
                                                                    <ChevronDown className='absolute right-4 top-10' />

</div>

    
<div className='flex flex-col w-full'>

<InputTag>Tone</InputTag>
<div className='flex gap-4 w-full flex-col md:flex-row'>
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
     <div className='flex justify-center md:justify-end mt-4'>

    <RegularButton 
  className='w-auto h-auto md:h-10 text-xl '
  disabled={DisableHelper}
  onClick={handleGenerateEmail}
 
>
 Generate Email
</RegularButton>
      </div>
       </div>
        </div>
      </>
}


  </div>

</OuterContainer>
    </>
  )

}
export default FollowUpWriter;