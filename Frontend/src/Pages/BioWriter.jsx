import { colors,RegularButton ,Heading, OuterContainer,HeadingSubHeading,InputTag, StyledTextArea,ContainerText} from '../CommonCss/commoncss';
import InputCompo from '../Common/InputCompo';
import { useState,useRef } from 'react';
import useInvoicedetailStore from '../Store/UserDetailStore';
import ResultCompo from '../components/ResultCompo';
import TabHooks from '../Hooks/TabHooks';
  import { CircleArrowLeft,MoveRight } from 'lucide-react';
  import { Loader } from '../components/Loader';
  import useLoading from '../Hooks/LoadingHook';
import { getToken } from '../Helper/tokenHelper';


 const BioWriter = () => {
    const { activeTab,  goToResult, goToForm } = TabHooks()
const { isLoading, startLoading, stopLoading } = useLoading()

     const [label, setLabel] = useState('');
     const[result,setResult]=useState('')
        const [tone ,setTone] =useState('');
        const[jobTitle ,setJobTitle] =useState('');

        const userDetail =useInvoicedetailStore((state)=>state.userDetail)
        const setUserDetail =useInvoicedetailStore((state)=>state.setUserDetail)

        const DisableHelper =!tone ||!userDetail.name || !jobTitle || !userDetail.exp || !userDetail.skills;
 const hadnleBioWriter = async () => {
      startLoading();
      const result = await getToken({
            url: 'http://localhost:5000/BioWriter',
            options: {
              method: "POST",
              headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({
          tone: tone,
          jobTitle: jobTitle,
          skills: userDetail.skills,
          exp: userDetail.exp,
          userName: userDetail.name,
        })
      }});
      const data = await result.json();
      setResult(data.response);
      stopLoading();
      goToResult();
    }
return (
    <>
    <OuterContainer>
    <HeadingSubHeading>
    <div className='flex justify-between items-center'>
      <Heading>Bio writer</Heading>
    </div>
    <div>
           <h1 className='flex flex-wrap items-center gap-2'>
<span>
 Turn your skills into a client-winning bio
  </span>
<MoveRight style={{color:colors.Menu}} />
<span>
  in seconds, not hours.
  </span> </h1> 
    </div>
    </HeadingSubHeading>

  <RegularButton onClick={goToForm} disabled={!result} className='w-2 items-center flex flex-col rounded-full p-2 '><CircleArrowLeft/></RegularButton>
  <div className='h-auto w-full border-gray-200 border-2 flex flex-col rounded-2xl mx-auto p-6 font-semibold' style={{color: colors.textSecondary}}>
   
    {activeTab === "result" ? 
      <div>
        <ResultCompo result={result} onBack={goToForm} />
      </div>
    :
    
      <div  className= 'relative'>
            {isLoading && (
        <div className='absolute z-10 flex inset-0 justify-center items-center py-4'>
          <Loader variant="dot" />  
        </div>
      )}
      <div className={isLoading ? 'opacity-20 pointer-events-none' : ''}>

     
        <div className= 'flex flex-row items-center gap-5 mb-4'>
          <ContainerText>Your details</ContainerText> 
          <RegularButton className='h-8 w-24' disabled={!result} onClick={() => {  goToResult() }}>
            Result
          </RegularButton>
        </div>

        <div className='flex flex-col items-center gap-6'>
          <div className='flex gap-4 lg:flex-row flex-col w-full '>
            <InputCompo label="Your name" placeholder="Your name" type="text" value={userDetail.name}  onChange={(e)=>setUserDetail('name',e.target.value)}/>
            <InputCompo label="Job title" placeholder="Job title" type="text" value={jobTitle}  onChange={(e)=>setJobTitle(e.target.value)}/>
          </div>

          <div className='w-full'>
            <InputCompo label="Skills (comma separated)" placeholder="Your skills" type="text" value={userDetail.skills}  onChange={(e)=>setUserDetail('skills',e.target.value)} />
          </div>

          <div className='flex flex-col gap-2 w-full'>
            <InputTag>Exp & Achievements</InputTag>
            <StyledTextArea
              value={userDetail.exp}
              onChange={(e) => setUserDetail('exp',e.target.value)}
          className={`w-full h-20 rounded-xl p-3 shadow-sm border-2 border-gray-300 focus:outline-none focus:border-purple-500`}
            />
          </div>

          <div className='flex flex-col w-full'>
            <InputTag>Tone</InputTag>
            <div className='flex gap-4 flex-col md:flex-row'>
              <RegularButton className='w-auto h-10 text-sm' onClick={()=>setTone("professional")} $selected={tone === "professional"}>Professional</RegularButton>
              <RegularButton className='w-auto h-10 text-sm' onClick={()=>setTone("confident")} $selected={tone === "confident"}>Confident</RegularButton>
              <RegularButton className='w-auto h-10 text-sm' onClick={()=>setTone("minimal")} $selected={tone === "minimal"}>Minimal</RegularButton>
              <RegularButton className='w-auto h-10 text-sm' onClick={()=>setTone("friendly")} $selected={tone === "friendly"}>Friendly</RegularButton>
            </div>
          </div>
        </div>
                    <div className='flex justify-center md:justify-end w-full mt-4'>

        <RegularButton 
          className='w-auto h-auto lg:h-10 text-xl mt-6'
          disabled={DisableHelper}
        onClick={hadnleBioWriter}
        >
          Generate Bio
        </RegularButton>
      </div>
            </div>

       </div>
    }
  </div>

</OuterContainer>
    </>
  )
}
export default BioWriter