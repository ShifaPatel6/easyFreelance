import { colors, RegularButton, Heading, OuterContainer, HeadingSubHeading, InputTag, StyledTextArea ,ContainerText} from '../CommonCss/commoncss';
import { useState } from 'react';
import InputCompo from '../Common/InputCompo';
import { Dropdown } from '../Common/Dropdown';
import { ChevronDown } from 'lucide-react';
import useProposalWriterStore from '../Store/ProposalWriterStore'
import { Loader } from '../components/Loader';
  import { CircleArrowLeft,MoveRight } from 'lucide-react';
  import TabHooks from '../Hooks/TabHooks';
  import ResultCompo from '../components/ResultCompo';
    import useLoading from '../Hooks/LoadingHook';
    import { getToken } from '../Helper/tokenHelper';
    import usePlanStore from '../Store/PlanStore';
    import ErrorCompo from '../components/ErrorCompo';
export const ProposalWriter = () => {
    const [label, setLabel] = useState('');
    const [error, setError] = useState();
    const[validate , setValidate] = useState({})
         const[result,setResult]=useState('');
             const { activeTab,  goToResult, goToForm } = TabHooks()
             const { isLoading, startLoading, stopLoading } = useLoading()
               const name = usePlanStore((state)=> state.name)


    const ProposalInfo = useProposalWriterStore((state)=>state.ProposalInfo)
    const setProposalInfo =useProposalWriterStore((state)=>state.setProposalInfo)


    const optionsarr = [
        { label: 'Other', value: 'other' },
        { label: 'Web Development', value: 'web_dev' },
        { label: 'Graphic Design', value: 'graphic_design' },
        { label: 'Content Writing', value: 'content_writing' },
        { label: 'UI/UX Design', value: 'ui_ux_design' },

    ]
    
    const DisableHelper =!ProposalInfo.clientName || !ProposalInfo.brief || !ProposalInfo.experience || !ProposalInfo.budget || !ProposalInfo.timeline ||!ProposalInfo.skills
    
    const handleAnalyze = async () => {
    startLoading()
    try{
        const response = await getToken({
          url: `${import.meta.env.VITE_API_URL}/ProposalWriter`,
          options: {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ clientName: ProposalInfo.clientName, budget: ProposalInfo.budget, label: label, brief: ProposalInfo.brief, experience: ProposalInfo.experience, timeline: ProposalInfo.timeline, skills: ProposalInfo.skills, userName:name })
          }
        })
        if (!response.ok) {
      const errData = await response.json()
      throw new Error(errData.message || "Something went wrong")
      }
        const data = await response.json()
        setResult(data)
        goToResult();         
        stopLoading();


    }catch {
  setError("An error occurred while generating the email. Please try again later.")
  setTimeout(() => setError(null), 6000)
  stopLoading()
}
  }
 
    return (
        <>
            <OuterContainer>
                <HeadingSubHeading>
                    <div className='flex justify-between items-center'>
                        <Heading>Proposal Writer</Heading>
                    </div>
                    <div>
                           <h1 className='flex flex-wrap items-center gap-2'>
<span>
    Add project details
    </span> <MoveRight style={{color:colors.Menu}} /> <span>
        AI writes a winning proposal for you along with pricing
        </span></h1>
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
                  {activeTab ==="result" ?
                    
        <ResultCompo result={result.aiResponse} onBack={goToForm} />
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

                      <ContainerText > Project details </ContainerText>
       
     <RegularButton className='h-8 w-24'
     disabled={!result}
     onClick={goToResult}
  >
     Result
     </RegularButton>
  
   </div>
                    <div className='flex flex-col items-center gap-6'>

                        {/* Row 1 — Client Name + Project Type */}
                        <div className='flex flex-col lg:flex-row gap-4 w-full'>
                            <div className='flex flex-col gap-2 flex-1'>
                                <InputTag>Client Name</InputTag>
                                <InputCompo
                                    placeholder="Client Name"
                                    value={ProposalInfo.clientName}
                                    onChange={(e) => setProposalInfo('clientName',e.target.value)}
                                        
                                    type="text"
                                  
                                />
                            </div>
                            <div className='flex flex-col gap-2 flex-1 relative'>
                                <InputTag>Project Type</InputTag>
                                <Dropdown
                                    options={optionsarr}
                                    placeholder="Select Project Type"
                                    onChange={setLabel}
                                />
                                <ChevronDown className='absolute right-4 top-12' />
                            </div>
                        </div>

                        {/* Row 2 — Client Requirement */}
                        <div className='flex flex-col gap-2 w-full'>
                            <InputTag>Client requirement / brief</InputTag>
                            <StyledTextArea
                                value={ProposalInfo.brief}
                                    onChange={(e) => setProposalInfo('brief',e.target.value)}
                                className='h-20'
                            />
                        </div>

                        {/* Row 3 — Experience + Budget + Timeline */}
                        <div className='flex gap-4 flex-col lg:flex-row w-full'>
                            <div className='flex flex-col gap-2 flex-1'>
                                <InputTag>Your experience (years)</InputTag>
                                <InputCompo
                                    placeholder="e.g. 3"
                                    value={ProposalInfo.experience}
                                    onChange={(e) => {setProposalInfo('experience',e.target.value);
                                    if(isNaN(e.target.value)){
                                            setValidate({...validate, experience:"Please enter valid experience in numbers"})
                                    }else{
                                        setValidate({...validate, experience:""})
                                    }}
                                }
                                    type="text"
                                    className='w-full p-2 rounded-xl border-gray-300 border-2'
                                />
                                {validate.experience && <span className='text-red-500 text-sm'>{validate.experience}</span>}
                            </div>
                            <div className='flex flex-col gap-2 flex-1'>
                                <InputTag>Expected budget (Rs.)</InputTag>
                                <InputCompo
                                    placeholder="e.g. 15000"
                                    value={ProposalInfo.budget}
                                    onChange={(e) => {
                                        setProposalInfo('budget',e.target.value);
                                        if(isNaN(e.target.value)){
                                            setValidate({...validate,budget:"Please enter valid budget in numbers"});
                                        }else{
                                            setValidate({...validate ,budget:""});
                                        }
                                    }}
                                    
                                    type="text"
                                    className='w-full p-2 rounded-xl border-gray-300 border-2'
                                />
                                {validate.budget && <span className='text-red-500 text-sm'>{validate.budget}</span>}
                            </div>
                            <div className='flex flex-col gap-2 flex-1 '>
                                <InputTag>Timeline (weeks)</InputTag>
                                 <InputCompo
                                    placeholder="e.g. 15000"
                                    value={ProposalInfo.timeline}
                                    onChange={(e) => {
                                        setProposalInfo('timeline',e.target.value);
                                        if(isNaN(e.target.value)){
                                            setValidate({...validate,timeline:"Please enter valid timeline in numbers"});
                                        }else{
                                            setValidate({...validate ,timeline:""});
                                        }
                                    }}
                                    
                                    type="text"
                                    className='w-full p-2 rounded-xl border-gray-300 border-2 focus:outline-none'
                                />
            
                                {validate.timeline && <span className='text-red-500 text-sm'>{validate.timeline}</span>}
                            </div>
                        </div>

                        {/* Row 4 — Skills */}
                        <div className='flex flex-col gap-2 w-full'>
                            <InputTag>Your skills (comma separated)</InputTag>
                            <StyledTextArea
                                value={ProposalInfo.skills}
                                    onChange={(e) => setProposalInfo('skills',e.target.value)}
                                className=' h-12 '
                            />
                        </div>

                    </div>

                    {/* Generate Button */}
                    <div className='flex justify-center md:justify-end w-full mt-4'>
                        <RegularButton className='h-auto lg:h-10  text-xl px-6' disabled={DisableHelper}
                         onClick={handleAnalyze} >
                            Generate Proposal
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