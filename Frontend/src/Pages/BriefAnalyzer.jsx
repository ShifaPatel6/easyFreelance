import { colors,RegularButton ,Heading, OuterContainer,HeadingSubHeading, ContainerText,StyledTextArea} from '../CommonCss/commoncss';
import { useState } from 'react';
import { History } from 'lucide-react';
import {Link} from 'react-router-dom'
  import { CircleArrowLeft,MoveRight } from 'lucide-react';
  import TabHooks from '../Hooks/TabHooks';
  import ResultCompo from '../components/ResultCompo';
  import useLoading from '../Hooks/LoadingHook';
  import { Loader } from '../components/Loader';
import { getToken } from '../Helper/tokenHelper';
import ErrorCompo from '../components/ErrorCompo';
 const BriefAnalyzer = () => {
  const [userInput , setUserInput] = useState("");
  const [result , setResult] = useState();
  const { activeTab,  goToResult, goToForm } = TabHooks()
  const { isLoading, startLoading, stopLoading } = useLoading()
  const[error ,setError] = useState(null)

  const handleAnalyze = async () => {
    startLoading()
    try{

      const response = await getToken({
        url: `${import.meta.env.VITE_API_URL}/BriefAnalyzer`,
        options: {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ brief: userInput })
        }
      })
       if (!response.ok) {
      const errData = await response.json()
      throw new Error(errData.message || "Something went wrong")
    }
      const data = await response.json()
      
      setResult(data.aiResponse)
       stopLoading();
      goToResult();         
  

    }catch {
  setError("An error occurred while generating the email. Please try again later.")
  setTimeout(() => setError(null), 6000)
  stopLoading()
}
  }

  return (
    <>
    <OuterContainer >
    <HeadingSubHeading>
    <div className='flex justify-between items-center'>
  <Heading>
    Brief Analyzer  
  </Heading>

  <RegularButton className="w-auto h-8 flex  gap-3 flex-row items-center justify-evenly p-2 " >
  <Link to="/history"> History</Link> 
    <History size={15}/>
  </RegularButton>

</div>
     <h1 className='flex flex-wrap items-center gap-2'>
    <span>Paste client message</span>
    <MoveRight style={{ color: colors.Menu }} />
    <span>AI clearly explains what they actually want</span>
  </h1>
  </HeadingSubHeading>
                      <RegularButton  disabled={!result} className='w-2 items-center flex flex-col rounded-full p-2 ' onClick={goToForm}><CircleArrowLeft/></RegularButton>

  <div className='h-auto w-full border-gray-200 border-2 flex flex-col rounded-2xl mx-auto p-6 font-semibold' style={{color: colors.textSecondary}}>

{error && <div className='flex justify-center items-center'>
  <div className='w-auto md:w-1/2'>
    <ErrorCompo error={error} />
  </div>
</div>  
}

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

    <StyledTextArea name="Clientmsg" id="Clientmsg"
    value={userInput}
    onChange={(e)=>{setUserInput(e.target.value)}}
  className='w-auto md:w-full h-64 p-4 rounded-2xl bg-white resize-none focus:outline-none border-gray-300 border-2 text-black'
 
> 
    </StyledTextArea>
    <div className='flex justify-center md:justify-end mt-4'>
    <RegularButton 
  className='w-auto  h-auto md:h-10 text-xl'
  disabled={!userInput}
  onClick={handleAnalyze}
  
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