import React from 'react'
import { colors,RegularButton ,Heading, OuterContainer,HeadingSubHeading} from '../CommonCss/commoncss';
import { useState } from 'react';
import { History } from 'lucide-react';
import {Link} from 'react-router-dom'
  import { CircleArrowLeft } from 'lucide-react';
  import TabHooks from '../Hooks/TabHooks';
  import ResultCompo from '../components/ResultCompo';



 const BriefAnalyzer = () => {
  const[userInput , setUserInput] = useState('');
  const[result , setResult] = useState('');
      const { activeTab,  goToResult, goToForm } = TabHooks()

  return (
    <>
    <OuterContainer >
    <HeadingSubHeading>
    <div className='flex justify-between items-center'>
  <Heading>
    Brief Analyzer  
  </Heading>

  <RegularButton className="w-24 h-8 flex flex-row items-center justify-evenly p-2 " style={{backgroundColor: " #e2e8f0",color:'black'}}>
  <Link to="/history"> History</Link> 
    <History size={15}/>
  </RegularButton>

</div>
    <div>
     <h1> Paste client message → AI clearly explains what they actually want</h1> 
    </div>
  </HeadingSubHeading>
                      <RegularButton  disabled={!result} className='w-2 items-center flex flex-col rounded-full p-2 ' onClick={goToForm}><CircleArrowLeft/></RegularButton>

  <div className='h-auto w-11/12  border-gray-200 border-2 flex flex-col  rounded-2xl mx-auto p-6  font-semibold'style={{color: colors.textSecondary}}>
{activeTab === "result" ? 
<div>
        <ResultCompo result={result} onBack={goToForm} />
      </div>
      :

<>

<div className='flex flex-row items-center gap-5 mb-4'>

   Paste Client Message or Brief
   
    <RegularButton className='h-8 w-24'
  disabled={!result} 
  onClick={goToResult}>
    Result
    </RegularButton>
  
   </div>
     <div >
    <textarea name="Clientmsg" id="Clientmsg"
    value={userInput}
    onChange={(e)=>{setUserInput(e.target.value)}}
  className='w-full h-64 p-4 rounded-2xl bg-white resize-none focus:outline-none border-gray-300 border-2'
 
>
    </textarea>
    <div className='flex justify-center'>
    <RegularButton 
  className='w-full h-10 text-xl'
  disabled={!userInput}
>
  Analyze Brief
</RegularButton>
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