import { colors,RegularButton ,Heading, OuterContainer,HeadingSubHeading, ContainerText} from '../CommonCss/commoncss';
import { useState } from 'react';
import { History } from 'lucide-react';
import {Link} from 'react-router-dom'
  import { CircleArrowLeft } from 'lucide-react';
  import TabHooks from '../Hooks/TabHooks';
  import ResultCompo from '../components/ResultCompo';
  import useLoading from '../Hooks/LoadingHook';
  import { Loader } from '../components/Loader';



 const BriefAnalyzer = () => {
  const[userInput , setUserInput] = useState('');
  const[result , setResult] = useState('');
  const { activeTab,  goToResult, goToForm } = TabHooks()
  const { isLoading, startLoading, stopLoading } = useLoading()
  

  return (
    <>
    <OuterContainer >
    <HeadingSubHeading>
    <div className='flex justify-between items-center'>
  <Heading>
    Brief Analyzer  
  </Heading>

  <RegularButton className="w-auto h-8 flex  gap-3 flex-row items-center justify-evenly p-2 " style={{backgroundColor: " #e2e8f0",color:'black'}}>
  <Link to="/history"> History</Link> 
    <History size={15}/>
  </RegularButton>

</div>
    <div>
     <h1> Paste client message → AI clearly explains what they actually want</h1> 
    </div>
  </HeadingSubHeading>
                      <RegularButton  disabled={!result} className='w-2 items-center flex flex-col rounded-full p-2 ' onClick={goToForm}><CircleArrowLeft/></RegularButton>

  <div className='h-auto w-full border-gray-200 border-2 flex flex-col rounded-2xl mx-auto p-6 font-semibold' style={{color: colors.textSecondary}}>
{activeTab === "result" ? 
<div>
        <ResultCompo result={result} onBack={goToForm} />
      </div>
      :

<>

<div className='flex flex-col md:flex-row  items-center gap-5 mb-4'>

   <ContainerText>

   Paste Client Message or Brief

   </ContainerText>
   
    <RegularButton className='h-8 w-24'
  disabled={!result} 
  onClick={goToResult}>
    Result
    </RegularButton>
  
   </div>
    
      <div  className= 'relative'>
                  {isLoading && (
              <div className='absolute z-10 flex inset-0 justify-center items-center py-4'>
                <Loader variant="dot" />  
              </div>
            )}

                  <div className={isLoading ? 'opacity-20 pointer-events-none' : ''}>

    <textarea name="Clientmsg" id="Clientmsg"
    value={userInput}
    onChange={(e)=>{setUserInput(e.target.value)}}
  className='w-auto md:w-full h-64 p-4 rounded-2xl bg-white resize-none focus:outline-none border-gray-300 border-2'
 
> 
    </textarea>
    <div className='flex justify-center md:justify-end mt-4'>
    <RegularButton 
  className='w-auto  h-auto md:h-10 text-xl'
  disabled={!userInput}
  onClick={()=>{
    startLoading()
    setTimeout(()=>{
      setResult("testing responsiveness from brief analyzer in mobile view")
      stopLoading()
      goToResult()

    },5000)
  }}
 

>
  Analyze Brief
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
export default BriefAnalyzer;